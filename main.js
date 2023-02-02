const nba = require("nba-api-client");
const cors = require('cors')
const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const port = 4000;

app.use(bodyParser.json())
app.use(cors())

app.post("*", async (req, res) => {
  const reqPath = req.path.replace('/', '')

  const reqBody = req.body;
  console.log({reqPath, reqBody})

  const response = await nba[reqPath](...reqBody);

  res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
