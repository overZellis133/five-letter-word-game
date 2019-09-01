export const stateChange = mark => {
  switch (mark) {
    case "":
      return false;
    case false:
      return true;
    case true:
      return "";
    default:
      return mark;
  }
}
