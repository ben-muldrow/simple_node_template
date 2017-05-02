var express     = require('express');
var app         = express();
var router      = express.Router();
var request     = require('request');
var bodyParser  = require('body-parser');
var jade        = require('jade');

var API_URL = '192.241.185.58:3000/api/users';

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'jade');

router.get('/', (req, res) => {
    //res.json({ message : 'hello, shodan'});
    res.sendFile(__dirname + '/index.html');
});

app.use(router);
app.listen(3000);
console.log("listening...");

app.post('/submitUser', function(req, res) {
    if (req.body.name != null &&
        req.body.age != null &&
        req.body.email != null) {
        console.log('attempting to POST to ' + API_URL);
        request.post("http://" + API_URL,
            {form: {
                name    : req.body.name,
                age     : req.body.age,
                email   : req.body.email
            }},
            function(err, httpResponse, body) {
                console.log(err);
            });
        request.get("http://" + API_URL, (err, response, body) => {
            var html = jade.renderFile('viewUser.jade', {
                name    : req.body.name,
                age     : req.body.age,
                email   : req.body.email
            });
            res.send(html);
        });
    }
});
