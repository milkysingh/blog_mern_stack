const express = require("express");
const app = express();
const port = process.env.PORT || 4500;
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
var bodyParser = require("body-parser");

mongoose.connect(keys.mongoURL);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(passport.session());

require("./models/Users");
require("./models/Blog");

require("./services/passport");
require("./routes/authRoutes")(app);
require("./routes/blogRoutes")(app);
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
