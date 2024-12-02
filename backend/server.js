const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors properly
const roleRoutes = require("./routes/role_routes");
const permissionRoutes = require("./routes/permission_routes");
const userRoutes = require("./routes/user_routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Invoke cors() correctly

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/rbac", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Use routes
app.use("/api", roleRoutes);
app.use("/api", permissionRoutes);
app.use("/api", userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
