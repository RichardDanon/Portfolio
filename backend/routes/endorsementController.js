var express = require('express');
var router = express.Router();
const endorsementService = require('../services/endorsementService')
// let cors = require('cors');
var morgan = require('morgan');

router.use(morgan('dev'));
/* GET home page. */
router.get('', function(req, res) {
    return endorsementService.getAllEndorsements(res);
});

router.post('', function(req, res) {
    console.log("POST")
    console.log(req.body)
    return endorsementService.addEndorsement(req, res);
});

router.get('/:id/approve', function(req,res){
    return endorsementService.approveEndorsement(req, res);
})

router.get('/:id/reject', function(req,res){
    return endorsementService.rejectEndorsement(req, res);
})

module.exports = router;