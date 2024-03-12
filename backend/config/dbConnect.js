const mongoose = require('mongoose');

const dbConnect = async () => {

    mongoose.connect(
        process.env.MONGODB_URI,
    {
        //useFindAndModify: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        useNewUrlParser: true,
      })
   .then(() => console.log('DB connected'))
   .catch(err => console.log(err));
}

module.exports = dbConnect;
