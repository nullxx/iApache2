var express = require('express');
const iApache2 = require('../src/iApache2')
var router = express.Router();


router.post('/disableVH.post', function (req, res, next) {
  iApache2.disableVH(req.body.fileName)
    .then(result => {
      res.send(result);
    })
});
router.post('/createVH.post', function (req, res, next) {
  const path = req.body.path;
  const vhContent = req.body.vhContent;
  iApache2.createVH(path, vhContent)
    .then(result => {
      res.send(result)
    })
})
router.post('/apache2Reload.post', function (req, res, next) {
  iApache2.reload()
    .then(result => {
      res.send(result)
    })
})

module.exports = router;
