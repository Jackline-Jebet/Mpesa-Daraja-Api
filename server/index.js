const express = require("express");

const app = express();
const TokenRoute = require("./routes/token");

app.listen(5500, () => {
  console.log("server run nicely");
})

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Mpesa programing in progress, Time to get paid!");
});

app.use("/token", TokenRoute);