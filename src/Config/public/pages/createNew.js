module.exports = {
    path: "/createNew",
    title: "Create new virtualhost",
    body: {
        mainCard: {
            title: "NEW VH",
            style: {
                class: "yoo-card yoo-style1"
            },
            body: {
                virtualHostTextArea: {
                    placeholder: "VIRTUALHOST",
                    content: "<VirtualHost *:80>\n    DocumentRoot \"/var/www/example\"\n    ServerName www.example.org\n\n    # Other directives here\n</VirtualHost>",
                    style: {
                        class: "form-group level-up active2"
                    }
                },
                save: {
                    saveToMsg: "Save to",
                    saveTextArea: {
                        placeholder: "/etc/apache2/sites-available/",
                        style: {
                            class: "form-group level-up"
                        }
                    },

                    saveBTN: {
                        preTitle: "Save to",
                        prePath: "/etc/apache2/sites-available/",
                        style: {
                            class: "btn btn-primary"
                        }
                    }

                }
            }
        }
    }
}