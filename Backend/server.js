const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoute");
const messageRoutes = require("./Routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running Succesfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  `${PORT}`,
  console.log(`Server started on Port ${PORT}`.yellow.bold)
);
