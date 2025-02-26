const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const PORT = process.env.PORT | 3000;
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin/", adminRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "userAuth",
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
