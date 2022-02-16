const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static("static"));

/* app.get("/", (req, res) => {
    console.log(req);
    // res.send("Hello World!");
}); */

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));