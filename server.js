var express = require('express');
var app     = express();
var router  = express.Router();

router.get('/', (req, res) => {
    //res.json({ message : 'hello, shodan'});
    res.sendFile(__dirname + '/index.html');
});

app.use(router);
app.listen(3000);
