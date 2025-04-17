const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors({ origin: true, credentials: true }));



const crudServiceFactory = require("./application/use-cases/crudService");

const mainController = require("./presentation/controllers/mainController")(
  crudServiceFactory
);

const userRoutes = require("./presentation/routes/userRoutes")(mainController);
const todoRoutes = require("./presentation/routes/todoRoutes")(mainController);

app.use("/api/users", userRoutes);
app.use("/api/todo", todoRoutes);

module.exports = app;
