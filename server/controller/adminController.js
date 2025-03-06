const addCar = async (req, res) => {
    res.send("Car added");
  };
  const updateCar = async (req, res) => {
    res.send("car updated");
  };
  const removeCar = async (req, res) => {
    res.send("car removed ");
  };
  const getrentals = async (req, res) => {
    res.send("All rentals ");
  }; const getAlluserReview = async (req, res) => {
    res.send("All user review");
  };

  module.exports={addCar, removeCar, updateCar , getrentals , getAlluserReview}