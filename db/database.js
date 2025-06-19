const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://Incorz:2668@cluster0.ewwkzzw.mongodb.net/incorz?retryWrites=true&w=majority&appName=Cluster0/incorz")
    .then(() => console.log("DB connected"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
