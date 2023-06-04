if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require('path');

//paths
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
app.use(express.static(publicPath))
app.set('views', viewsPath);
app.set('view engine', 'ejs');

//routes
const routes = {
    landing: require('./routers/landing')
}
app.use(routes.landing);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
