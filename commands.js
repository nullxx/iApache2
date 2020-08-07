const { spawn } = require('child_process');

module.exports = {
    executeCommand: (cmd, args) => {
        return new Promise((res,) => {
            try {
                const sp = spawn(cmd, args);
                sp.stdout.setEncoding('utf8');
                sp.stderr.setEncoding('utf8');

                var stdout = "";
                var stderr = "";

                sp.stdout.on('data', data => {
                    stdout += data;
                });
                sp.stderr.on('data', data => {
                    stderr += data;
                });
                sp.on('error', (err) => {
                    // will mix stderr with err
                    stderr += err;
                })
                sp.on('close', code => {
                    res({ stdout, stderr, code })
                });
            } catch (error) {
                console.log("ERROR")
            }



        })
    }
}