const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { reviewsRouter, showsRouter, usersRouter } = require("./routes/index");

const app = express();
const port = 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static("../client/public"));

app.use("/api/reviews", reviewsRouter);
app.use("/api/shows", showsRouter);
app.use("/api/users", usersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public/index.html"));
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
