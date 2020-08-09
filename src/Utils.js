const os = require('os');
const availableCommands = require('./AvailableCommands');
const fs = require('fs');
module.exports = {
    getCommand: function (cmd) {
        const platform = os.platform();
        if (availableCommands.hasOwnProperty(cmd)) {
            const command = availableCommands[cmd][platform] || availableCommands[cmd].other;
            return command
        } else {
            console.error("Command not available")
        }
    },
    readFile: function (path, encoding) {
        return new Promise(function (res, rej) {
            fs.readFile(path, { encoding }, function (err, fileData) {
                if (err) return rej(err);
                res(fileData)
            })
        })

    }
}