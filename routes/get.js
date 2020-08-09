var express = require('express');
var router = express.Router();
const iApache2 = require('../src/iApache2')
const Config = require('../src/Config')

/* GET home page. */
router.get('/', function (req, res, next) {

  iApache2.isLatest().then(lastest => {
    const warn1 = !lastest ? Config.global.version.outdated.msg : undefined;
    iApache2.getModules()
      .then((modulesData) => {
        const modules = modulesData.modules;
        const err1 = modulesData.err;

        iApache2.getEnabledVirtualHosts().then((virtualhostsData) => {
          const virtualhosts = virtualhostsData.virtualhosts;
          const err2 = virtualhostsData.err;

          iApache2.getStatus().then((statusData) => {
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
