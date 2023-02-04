const phoneInputMask = (state, value) => {
  const length = value.length;
  if (state.phone.endsWith("-")) {
    return value;
  }
  if (length === 1 || length === 6 || length === 9) {
    value += "-";
  }
  return value;
};
export default phoneInputMask;
