const getCars = async (req, res) => {
  res.send("All cars ");
};

const getCar = async (req, res) => {
  res.send("Single car ");
};


module.exports={getCars, getCar }