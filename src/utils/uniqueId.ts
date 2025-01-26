const uniqueId = () => {
  const dateString = Date.now().toString(36);
  return dateString;
};

export default uniqueId;
