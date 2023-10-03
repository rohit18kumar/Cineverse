const express = require("express");
const cors = require("cors"); //This package is used to enable Cross-Origin Resource Sharing,
// allowing your server to handle requests from different origins.
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors()); //This middleware enables Cross-Origin Resource Sharing for your server.
app.use(express.json()); //This middleware parses incoming JSON data in request bodies to javascript object

mongoose
  .connect(
    "mongodb+srv://rohitkumar974316:Rohitkumar123@cluster0.4jokwtt.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
//This code mounts the userRoutes module under the "/api/user" route.
//It means that all routes defined in the userRoutes module will be accessed under this base path.
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});

//Middleware functions in Express are functions that sit in between the incoming request and the final route handler.
//They can perform various tasks such as modifying the request or response objects, authenticating users, logging, and more.
//Middleware functions are executed sequentially for each incoming request.
