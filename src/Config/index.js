const endpoints = require('./public/endpoints');
const pages = require('./public/pages');
const global = require('./global')
module.exports = {
    public: {
        mainTitle: "iApache2",
        pages,
        endpoints
    },
    global
}