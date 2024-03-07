require('dotenv').config();
const app = require('./app');

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
