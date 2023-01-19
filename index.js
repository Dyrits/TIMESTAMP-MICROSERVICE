const express = require("express");
const app = express();


const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (request, response) {
  response.json({greeting: "hello API"});
});
app.get("/api/:input", function ({ params}, response) {
    const { input } = params;
    const $date = new Date(isNaN(input) ? input : Number(input));
    const date = isNaN($date.getTime()) ? { error: "Invalid date" } : { unix: $date.getTime(), utc: $date.toUTCString() }
    response.json(date);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
