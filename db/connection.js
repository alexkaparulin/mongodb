const mongoose    = require('mongoose');
// const color_logger = require('../utils/color_logger');
// const p = color_logger('connection.js');

// set Promise provider to bluebird
mongoose.Promise = require('bluebird');

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true 
  };
  
mongoose.connect('mongodb://localhost/api-mongoose',options)
    .then(()=> console.log('MONGOOSE CONNECTION ESTABLISHED'))
    .catch(err=> p.error(err));

module.exports = mongoose;



/// if makes problems....  to npm i mongoose@5.2.8
