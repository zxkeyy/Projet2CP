//using mongoose
const mongoose = require("mongoose");
//create connect to the data base function
const connectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE);
    console.log("connect to the data base");
  } catch (error) {
    console.log("can not connect to data base", error);
  }
};
//export the function
module.exports = connectToDataBase;
