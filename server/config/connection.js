const { connect, connection } = require('mongoose');

connect('mongodb+srv://nicholasortiz:colzNZKrdknDBSqD@cluster0.urzdm32.mongodb.net/app-portfolio-nicholas-ortiz?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

module.exports = connection;
