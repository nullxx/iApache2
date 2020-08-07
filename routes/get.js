var express = require('express');
var router = express.Router();
const Apache = require('../Apache')
/* GET home page. */
router.get('/', function (req, res, next) {
  Apache.getModules()
    .then((modulesData) => {
      const modules = modulesData.modules;
      const err1 = modulesData.err;
      Apache.getVirtualHosts().then((virtualhostsData) => {
        const virtualhosts = virtualhostsData.virtualhosts;
        const err2 = virtualhostsData.err;
        res.render('index', { modules, virtualhosts, err: [err1, err2] })
      })
    })
});
router.get('/createNew', function (req, res, next) {
  res.render('createNew')
});
router.get('/status.get', function (req, res, next) {
  Apache.getStatus()
    .then(response => {
      res.send(response)
    })
});


module.exports = router;
