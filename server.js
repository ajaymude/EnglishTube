const express = require("express");
const dbconnect = require("./db/DbConnection");
const UserRoutes = require("./Routes/AdminRoutes");
const morgan = require("morgan");
const cors = require("cors");
const VocabRoute = require("./Routes/VocabRoutes");
const app = express();
const env = require('dotenv').config()


// db connection
dbconnect();

app.use(express.static('build'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/", UserRoutes);

app.use("/", VocabRoute); 

app.get("/", (req, res) => {
  res.send("this is testing");   
});

app.listen(process.env.PORT, () => console.log("server is runnig on 8000 port"));
