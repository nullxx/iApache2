const Config = require('./Config');
const https = require('https');
const path = require('path')
fs = require('fs');
module.exports.isLatest = () => {
    return new Promise((res, rej) => {
        https.get(Config.global.version.link, (resp) => {
            let onlineVersion = '';

            resp.on('data', (chunk) => {
                onlineVersion += chunk;
            });

            resp.on('end', () => {
                fs.readFile(path.join(__dirname, '../version'), 'utf8', function (err, currentVersion) {
                    if (err) {
                        return console.log(err);
                    }
                    if (onlineVersion == currentVersion) {
                        res(true)
                    } else {
                        res(false)
                    }
                });
            });

        }).on("error", (err) => {
            rej(err)
        });
    })
}