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
    home: require('./routers/home'),
    profile: require('./routers/profile')
}
app.use(routes.home);
app.use(routes.profile);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
