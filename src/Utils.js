const os = require('os');
const availableCommands = require('./AvailableCommands');

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