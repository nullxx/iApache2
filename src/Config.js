module.exports = {
    public: {
        mainTitle: "iApache2",
        pages: {
            main: {
                path: "/",
                title: "Dashboard",
                body: {
                    alertMessages: {
                        apache2Reloading: "Reloading apache2"
                    },
                    initialCards: {
                        modules: {
                            title: "LOADED MODULES",
                            style: {
                                class: "yoo-iconbox yoo-style1 yoo-color1 yoo-blue-bg yoo-blue-shadow",
                                icon: "albums"
                            }
                        },
                        virtualhosts: {
                            title: "VIRTUALHOSTS",
                            style: {
                                class: "yoo-iconbox yoo-style1 yoo-color1 yoo-gray-bg yoo-gray-shadow",
                                icon: "layers"
                            }
                        },
                        status: {
                            title: "STATUS",
                            style: {
                                class: "yoo-iconbox yoo-style1 yoo-color1 yoo-light-blue-bg yoo-light-blue-shadow",
                                icon: "file-tray"
                            },
                            body: {
                                reloadApache2BTN: {
                                    title: "Reload apache2",
                                    style: {
                                        class: "btn btn-warning",
                                        icon: "reload-outline"
                                    }
                                }
                            }
                        }
                    },
                    bigCards: {
                        loadedModules: {
                            title: "LOADED MODULES",
                            style: {
                                icon: "flask",
                                class: "yoo-list-group yoo-style1 yoo-type1 yoo-mp0"
                            },
                            body: {
                                items: {
                                    style: {
                                        img: {
                                            path: "assets/img/module.png",
                                            alt: "Module image"
                                        },
                                        class: "yoo-medias yoo-style1 yoo-type1"
                                    }
                                }
                            }
                        },
                        virtualhosts: {
                            title: "VIRTUALHOSTS",
                            style: {
                                icon: "cube"
                            },
                            body: {
                                search: {
                                    icon: "search",
                                    placeholder: "Search..."
                                },
                                createVHBTN: {
                                    title: "Create new",
                                    style: {
                                        class: "btn btn-info page"
                                    }
                                },
                                items: {
                                    style: {
                                        img: {
                                            path: "assets/img/virtualhost.png",
                                            alt: "Virtualhost image"
                                        },
                                        class: "yoo-medias yoo-style1"
                                    },
                                    disableBTN: {
                                        title: "Disable",
                                        style: {
                                            class: "btn btn-danger btn-sm col-sm-2"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            createNew: {
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
        },
        endpoints: {
            createVH: {
                method: "POST",
                path: "/createVH.post"
            },
            disableVH: {
                method: "POST",
                path: "/disableVH.post"
            },
            reloadApache2: {
                method: "POST",
                path: "/apache2Reload.post"
            }
        }
    },
    global: {
        version: {
            link: "https://github.com/nullxx/iApache2/raw/master/version",
            outdated: {
                msg: "This version is outdated. Please update."
            }
        }
    }
}