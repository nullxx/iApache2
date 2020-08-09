var express = require('express');
const iApache2 = require('../src/iApache2')
var router = express.Router();


router.post('/disableVH.post', function (req, res, next) {
  const fileName = req.body.fileName;
  iApache2.disableVH(fileName)
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
router.post('/readVH.post', function (req, res, next) {
  const vhName = req.body.vhName;
  iApache2.readVH(vhName)
    .then(response => {
      res.send(response)
    })
    .catch(errData => {
      res.send(errData)
    })
})

module.exports = router;
