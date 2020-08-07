const Apache = require("./Apache");

Apache.getModules()
    .then(modules => {
        console.log(modules)
    })