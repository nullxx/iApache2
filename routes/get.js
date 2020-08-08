var express = require('express');
var router = express.Router();
const Apache = require('../src/Apache')
const Config = require('../src/Config')
const { isLatest } = require('../src/Version')
/* GET home page. */
router.get('/', function (req, res, next) {

  isLatest().then(lastest => {
    const warn1 = !lastest ? Config.global.version.outdated.msg : null
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

            res.render('index', { data: { modules, virtualhosts, status, err: [err1, err2, err3], warn: [warn1] }, config: Config.public })
          })
        })
      })
  }).catch(err => {
    console.error(err)
  })

});
router.get('/createNew', function (req, res, next) {
  res.render('createNew', { config: Config.public })
});

module.exports = router;
