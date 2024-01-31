const app = require('./src/app.js');

// Syncing all the models at once.
const PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('Error starting the server:', error);
}

  