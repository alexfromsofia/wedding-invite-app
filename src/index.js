const app = require('./app');

const PORT = process.env.PORT || 5000;

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
