const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get("/api/:date?", function ({ params }, response) {
    if (params.date) {
        const date = new Date(isNaN(params.date) ? params.date : Number(params.date));
        return response.json(isNaN(date.getTime()) ? { error: "Invalid date" } : { unix: date.getTime(), utc: date.toUTCString() });
    }
    return response.json({ unix: Date.now(), utc: new Date().toUTCString() });
});

const listener = app.listen(process.env.PORT, function () {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
