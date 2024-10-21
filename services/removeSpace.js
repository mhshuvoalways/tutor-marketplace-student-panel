const removeSpace = (value) => {
  return value?.replace(/\s*-\s*/g, "-").replace(/\s+/g, "-");
};

export default removeSpace;
