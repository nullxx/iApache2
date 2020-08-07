const os = require('os');
const availableCommands = require('./availableCommands');

module.exports = {
    getCommand: (cmd) => {
        const platform = os.platform();
        if (availableCommands.hasOwnProperty(cmd)) {
            const command = availableCommands[cmd][platform] || availableCommands[cmd].other;
            return command
        } else {
            console.error("Command not available")
        }
    }
}