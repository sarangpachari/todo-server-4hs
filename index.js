require("dotenv").config();

const app = require('./src/app')
const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
