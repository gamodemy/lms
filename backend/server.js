const path = require("path");
require("dotenv").config({ silent: process.env.NODE_ENV === "production" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpoad = require("express-fileupload");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpoad({ useTempFiles: true }));

app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/upload"));
app.use("/courses", require("./routes/courseRouter"));
app.use("/orders", require("./routes/orderRoutes"));
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
app.use((err, req, res, next) => {
  res.status(404).json({
    error: {
      message: err.message,
    },
  });
});
__dirname = path.resolve();
console.log(__dirname);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Runn....");
  });
}

const port = process.env.PORT || 4000;

const CONNECTION_URL =
  "mongodb+srv://souhail:souhail2001@cluster0.bnzut.mongodb.net/myDataBase?retryWrites=true&w=majority";


mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(
        `Server MongoDb Connected Running on port: http://localhost:${port}`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
