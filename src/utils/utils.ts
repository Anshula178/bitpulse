const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/Bitpulse/"
    : "";
};

export { getImagePrefix };
 
