const { executeCommand } = require("../Command");
const { getCommand } = require("../Utils");
module.exports = class Apache {
    static getModules = () => {
        return new Promise((res) => {
            executeCommand(getCommand("listModules").cmd, getCommand("listModules").args)
                .then(({ stdout, stderr }) => {
                    // parse modules
                    const regexp = /\n\s([^(]*[^\n]*)/g;
                    const matches = stdout.matchAll(regexp);
                    var all = []
                    for (const match of matches) {
                        all.push(match[1])
                    }
                    res({ modules: all, err: stderr, msg: "Loaded Modules" })
                })
        })

    }
    static getVirtualHosts = () => {
        return new Promise((res) => {
            executeCommand(getCommand("listVirtualHost").cmd, getCommand("listVirtualHost").args)
                .then(({ stdout, stderr }) => {
                    const regexp = /([^VirtualHost configuration:\n][^\n]*)/g
                    const matches = stdout.matchAll(regexp);
                    var all = []
                    for (const match of matches) {
                        const pathMatch = match[1].match(/(\(([^)]+)\))/);
                        const domainMatch = match[1].match(/namevhost\s*(\S+)/);
                        const portMatch = match[1].match(/port\s*(\S+)/);
                        if (pathMatch && domainMatch && portMatch) {
                            const fileNameMatch = pathMatch[2].match(/.*\/(.+f)/)
                            all.push({
                                domain: domainMatch[1],
                                vhConfigPath: pathMatch[2],
                                port: parseInt(portMatch[1]),
                                fileName: fileNameMatch[1]
                            })
                        }
                    }
                    res({ virtualhosts: all, err: stderr, msg: "Loaded VirtualHosts" })
                })
        })
    }
    static disableVH(vhFile) {
        return new Promise((res) => {
            executeCommand(getCommand("disableVH").cmd, [vhFile])
                .then(({ stdout, stderr, code }) => {
                    res({ code, msg: stdout, err: stderr })
                })
        })
    }
    static createVH(path, virtualhostContent) {
        return new Promise((res) => {
            const fs = require('fs');

            fs.writeFile(path, virtualhostContent, function (err) {
                if (err) {
                    return res({ code: 0, msg: null, err });
                }
                // success saving file
                const fileNameMatch = path.match(/.*\/(.+f)/)

                executeCommand(getCommand("enableVH").cmd, [fileNameMatch[1]])
                    .then(({ stdout, stderr, code }) => {
                        res({ code, msg: stdout, err: stderr })
                    })

            });
        })
    }
    static getStatus() {
        return new Promise((res) => {
            executeCommand(getCommand("status").cmd, getCommand("status").args)
                .then(({ stdout, stderr, code }) => {
                    res({ code, status: stdout.match(/Active: [^\n]*/) ? stdout.match(/Active: [^\n]*/)[0] : "", err: stderr })
                })
        })
    }
    static reload() {
        return new Promise((res) => {
            executeCommand(getCommand("reload").cmd, getCommand("reload").args)
                .then(({ stdout, stderr, code }) => {
                    if (code == 0) {
                        res({ code, msg: "Successfully reloaded", err: stderr })
                    } else {
                        res({ code, msg: stdout, err: stderr })
                    }
                })
        })
    }
}