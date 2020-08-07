var express = require('express');
const Apache = require('../src/Apache')
var router = express.Router();


router.post('/disableVH.post', function (req, res, next) {
  Apache.disableVH(req.body.fileName)
    .then(result => {
      res.send(result);
    })
});
router.post('/createVH.post', function (req, res, next) {
  const path = req.body.path;
  const vhContent = req.body.vhContent;

  Apache.createVH(path, vhContent)
    .then(result => {
      res.send(result)
    })
})
router.post('/apache2Reload.post', function (req, res, next) {
  Apache.reload()
    .then(result => {
      res.send(result)
    })
})

module.exports = router;
