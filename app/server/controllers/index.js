'use strict';

//******************************
//********** PACKAGES **********
//******************************
var express = require('express');
var router = express.Router();


/* GET home page. */


//************************************
//********** PARTIAL ROUTES **********
//************************************
router.get('/partials/:name', function(req, res) {
	var test = req.params.name;
	req.log.info({
		status: 200,
		'partial': test
	});
	res.render('partials/' + test, {
		title: 'SimpTek Inc'
	});
});

router.get('/*', function(req, res, next) {
	res.render('index', {
		title: 'SimpTek'
	});
});

module.exports = router;
