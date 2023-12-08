const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')
const app = express();
const port = 3000

//favicon
//app.use('public', path.join(__dirname, 'public', favicon.ico))

//settings
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//middewares
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes
app.use(routes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${port}`)
})
