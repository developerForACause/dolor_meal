const express = require("express");
const app = express();
const mongoose = require("mongoose");
const graphqlExpress = require("express-graphql");
const MenuSchema = require("../src/graphql/schemas/menuSchema").menuSchema;

mongoose.connect(
  "mongodb://test:Testing1@ds033559.mlab.com:33559/dolormeal",
  err => {
    if (err) throw err;
    console.log("connected to mongo");
  }
);

app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
  console.log("Node app is running at localhost:" + app.get("port"));
});

app.use(
  "/graphql",
  graphqlExpress({
    schema: MenuSchema,
    rootValue: global,
    graphiql: true
  })
);

app.get("/", (req, res) => {
  res.send("hello world ! ");
});
