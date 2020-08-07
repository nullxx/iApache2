// TODO DELETE DARWIN AND OTHER
module.exports = {
    listVirtualHost: {
        linux: {
            cmd: "apache2ctl",
            args: ["-S"]
        },
        darwin: {
            cmd: "apachectl",
            args: ["-S"]
        },
        other: {
            cmd: "httpd",
            args: ["-S"]
        }
    },
    listModules: {
        linux: {
            cmd: "apache2ctl",
            args: ["-M"]
        },
        darwin: {
            cmd: "apachectl",
            args: ["-M"]
        },
        other: {
            cmd: "httpd",
            args: ["-M"]
        }
    },
    disableVH: {
        linux: {
            cmd: "a2dissite",
            args: []
        },
        darwin: {
            cmd: "a2dissite",
            args: []
        },
        other: {
            cmd: "a2dissite",
            args: []
        }
    },
    enableVH: {
        linux: {
            cmd: "a2ensite",
            args: []
        },
        darwin: {
            cmd: "a2ensite",
            args: []
        },
        other: {
            cmd: "a2ensite",
            args: []
        }
    },
    status: {
        linux: {
            cmd: "systemctl",
            args: ["status", "apache2"]
        },
        darwin: {
            cmd: "service",
            args: ["status", "apache2"]
        },
        other: {
            cmd: "service",
            args: ["status", "apache2"]
        }
    },
    reload: {
        linux: {
            cmd: "systemctl",
            args: ["reload", "apache2"]
        },
        darwin: {
            cmd: "apachectl",
            args: ["reload"]
        },
        other: {
            cmd: "systemctl",
            args: ["reload", "apache2"]
        }
    },
    COMMANDS: {
        LIST_VIRTUAL_HOST: "listVirtualHost"
    }

}