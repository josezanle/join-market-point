const express = require("express");
require("dotenv").config();
const routes = require("./routes");
var cors = require("cors");
const { dbConnection } = require("./database");

// init
const app = express();

// base de datos
dbConnection();

app.use(cors());

// parseo de data
app.use(express.json());

// habilitando el routing
app.use("/", routes());

// seteo del puerto
const port = process.env.PORT || 4000;

// Lanzamos el server, indicamos el puerto, y un mensje por consola para ver que esta Online.
app.listen(port, () => {
  console.log(`🚀 Server is Running in port: ${port}`);
});
