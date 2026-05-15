const express = require("express");

const cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));


// STATIC FOLDER
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);


// ROUTES
app.use(
  "/api",
  require("./routes/uploadRoutes")
);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
