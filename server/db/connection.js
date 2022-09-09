const mongoose = require("mongoose");
const hostname =
  'mongodb://localhost:27017/theam';
  // 'mongodb+srv://shashikant2002:4886Shashi%40384443@allproject.nmzcmgh.mongodb.net/allTheams?retryWrites=true&w=majority';

mongoose
  .connect(hostname, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Data Base Connected");
  })
  .catch((err) => {
    console.log("Error " + err);
  });
