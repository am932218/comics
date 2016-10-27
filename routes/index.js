var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('index.html', { root:  'public' });
});

router.get('/getcomic',function(req,res,next) {
            console.log("In getcomic route");
      var url = "http://xkcd.com/" + req.query.q + "/info.0.json"
	request(url).pipe(res);
    });




module.exports = router;
