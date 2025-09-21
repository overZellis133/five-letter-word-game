import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';

class FoundLetters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letterSlots: [null, null, null, null, null], // 5 empty slots
      availableLetters: [] // Letters not yet placed in slots
    };
  }

  componentDidMount() {
    this.updateLetterSlots();
  }

  componentDidUpdate(prevProps) {
    // Update letter slots when new letters are discovered OR when currentPlayer changes
    if (prevProps.letters !== this.props.letters || prevProps.currentPlayer !== this.props.currentPlayer) {
      this.updateLetterSlots();
    }
  }

  updateLetterSlots = () => {
    const { currentPlayer } = this.props;
    const alphabet = Object.keys(this.props.letters);
    const discoveredLetters = alphabet.filter(letter => 
      this.props.letters[letter][currentPlayer].currentState === true
    );
    
    const currentSlots = [...this.state.letterSlots];
    
    // Remove letters that are no longer discovered
    for (let i = 0; i < currentSlots.length; i++) {
      if (currentSlots[i] && !discoveredLetters.includes(currentSlots[i])) {
        currentSlots[i] = null;
      }
    }
    
    // Add newly discovered letters to leftmost empty slots
    discoveredLetters.forEach(letter => {
      // Check if letter is already placed in slots
      if (!currentSlots.includes(letter)) {
        // Find leftmost empty slot
        const emptyIndex = currentSlots.findIndex(slot => slot === null);
        if (emptyIndex !== -1) {
          currentSlots[emptyIndex] = letter;
        }
      }
    });
    
    this.setState({ 
      letterSlots: currentSlots,
      availableLetters: [] // No separate bank needed
    });
  }

  handleDragStart = (e, letter) => {
    e.dataTransfer.setData('text/plain', letter);
    e.dataTransfer.effectAllowed = 'move';
  }

  handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  handleDragEnter = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  }

  handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
  }

  handleDropOnSlot = (e, slotIndex) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const letter = e.dataTransfer.getData('text/plain');
    
    const newSlots = [...this.state.letterSlots];
    
    // Find the current position of the dragged letter
    const currentIndex = newSlots.indexOf(letter);
    
    // If dropping on the same slot, do nothing
    if (currentIndex === slotIndex) {
      return;
    }
    
    // Remove letter from its current position
    if (currentIndex > -1) {
      newSlots[currentIndex] = null;
    }
    
    // If target slot has a letter, swap them
    if (newSlots[slotIndex] !== null && currentIndex > -1) {
      newSlots[currentIndex] = newSlots[slotIndex];
    }
    
    // Place the dragged letter in the target slot
    newSlots[slotIndex] = letter;
    
    this.setState({
      letterSlots: newSlots
    });
  }

  // Remove this method since we don't have a separate available letters area

  renderDraggableLetter = (letter, isDraggable = true) => {
    const { currentPlayer, player } = this.props;
    
    return (
      <div
        key={letter}
        className="draggable-letter"
        draggable={isDraggable && player === currentPlayer}
        onDragStart={(e) => this.handleDragStart(e, letter)}
      >
        <Letter
          char={letter}
          currentPlayer={currentPlayer}
          player={player}
          currentState={true}
        />
      </div>
    );
  }

  render() {
    const { letterSlots } = this.state;

    return (
      <div className="found-letters-container">
        <div className="letters-workspace">
          {/* 5 Letter Slots - Always visible */}
          <div className="letter-slots">
            <h5 className="slots-title">Word Builder</h5>
            <div className="slots-grid">
              {letterSlots.map((letter, index) => (
                <div
                  key={index}
                  className={`letter-slot ${letter ? 'filled' : 'empty'}`}
                  onDragOver={this.handleDragOver}
                  onDragEnter={this.handleDragEnter}
                  onDragLeave={this.handleDragLeave}
                  onDrop={(e) => this.handleDropOnSlot(e, index)}
                >
                  {letter ? this.renderDraggableLetter(letter) : (
                    <span className="slot-placeholder">{index + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters
  };
}

export default connect(mapStateToProps)(FoundLetters);
