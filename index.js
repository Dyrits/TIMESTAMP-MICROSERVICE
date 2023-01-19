const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/api/hello", function (request, response) {
  response.json({ greeting: "hello API" });
});
app.get("/api/:date", function ({ params}, response) {
    const { date } = params;
    const $date = new Date(isNaN(date) ? date : Number(date));
    response.json(isNaN($date.getTime()) ? { error: "Invalid date" } : { unix: $date.getTime(), utc: $date.toUTCString() });
});


const listener = app.listen(process.env.PORT, function () {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
