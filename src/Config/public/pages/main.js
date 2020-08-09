module.exports = {
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
                        },
                        displayBTN: {
                            title: "Display content",
                            style: {
                                class: "btn btn-info btn-sm col-sm-2"
                            }
                        }
                    }
                }
            }
        },
        displayContentModal: {
            modalTitle: "Display virtualhost file",
            style: {
                class: ["modal", "fade", "bd-example-modal-lg"]
            }
        }
    }
}