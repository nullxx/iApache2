var express = require('express');
var router = express.Router();
const Apache = require('../src/Apache')
/* GET home page. */
router.get('/', function (req, res, next) {
  Apache.getModules()
    .then((modulesData) => {
      const modules = modulesData.modules;
      const err1 = modulesData.err;
      Apache.getVirtualHosts().then((virtualhostsData) => {
        const virtualhosts = virtualhostsData.virtualhosts;
        const err2 = virtualhostsData.err;
        Apache.getStatus().then((statusData) => {
          const status = statusData.status;
          const err3 = statusData.err;
          res.render('index', { modules, virtualhosts, status, err: [err1, err2, err3] })
        })
      })
    })
});
router.get('/createNew', function (req, res, next) {
  res.render('createNew')
});

module.exports = router;
