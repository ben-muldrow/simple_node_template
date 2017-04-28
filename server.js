var express = require('express');
var app     = express();
var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message : 'hello, shodan'});
});

app.use('/api',router);
app.listen(8080);
