const express = require("express");
const app = express();

const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/user"));
app.use("/api/donation", require("./routes/donation"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  