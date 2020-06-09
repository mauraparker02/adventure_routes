const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const uri = process.env.MONGODB_URI || 'mongodb://adventure:adventure1@ds011024.mlab.com:11024/heroku_gk0rls04';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Connected to Mongo');
    },
    err => {
        console.log('error connecting to Mongo: ')
        console.log(err);
    }
)

module.exports = mongoose.connection;