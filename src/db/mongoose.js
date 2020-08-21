const mongoose = require('mongoose');

// eslint-disable-next-line
const dbUrl =
  process.env.MONGODB_URL || 'mongodb://localhost/wedding-invitation';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => {
    // eslint-disable-next-line
    console.log('Conection has been made!');
  })
  .on('error', (error) => {
    // eslint-disable-next-line
    console.log('Error is: ', error);
  });
