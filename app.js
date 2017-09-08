var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    News = require('./api/models/NewsModel'),
    bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/NewsDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/NewsRoutes'); //importing route
routes(app); //register the route

app.use('/apidoc',express.static('./apidoc'));

app.listen(port);

console.log('JJNews API server started on: ' + port);

