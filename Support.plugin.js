/**
* @name Support
* @displayName Support
* @source https://raw.githubusercontent.com/GR0SST/Support/master/Support.plugin.js
* @authorId 371336044022464523
*/
/*@cc_on
@if (@_jscript)
	
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/
const request = require("request");
const fs = require("fs");
const path = require("path");


const config = {
    info: {
        name: "Support",
        authors: [
            {
                name: "GROSST",
                discord_id: "3713360440224645238",
            }
        ],
        version: "1.3.0",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/master/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/master/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Теперь работает"
        ]
    }],
    defaultConfig: []
};

module.exports = !global.ZeresPluginLibrary ? class {
    constructor() {
        this._config = config;
    }

    getName() {
        return config.info.name;
    }

    getAuthor() {
        return config.info.authors.map(author => author.name).join(", ");
    }

    getDescription() {
        return config.info.description;
    }

    getVersion() {
        return config.info.version;
    }

    load() {
        BdApi.showConfirmationModal("Library plugin is needed",
            `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
            confirmText: "Download",
            cancelText: "Cancel",
            onConfirm: () => {
                request.get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", (error, response, body) => {
                    if (error) {
                        return electron.shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                    }

                    fs.writeFileSync(path.join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body);
                });
            }
        });
    }

    start() { }

    stop() { }
} : (([Plugin, Library]) => {
    const { DiscordModules, WebpackModules, Patcher, DiscordContextMenu, Settings, DiscordAPI } = Library;
    const tkn = getToken()
    function getToken() {
        let token
        var req = webpackJsonp.push([
            [], {
                extra_id: (e, r, t) => e.exports = t
            },
            [
                ["extra_id"]
            ]
        ]);
        for (let e in req.c) {
            if (req.c.hasOwnProperty(e)) {
                let r = req.c[e].exports;
                if (r && r.__esModule && r.default)
                    for (let e in r.default)
                        if ("getToken" === e) {
                            token = r.default.getToken();
                        }
            }
        }
        return token

    }
    class Support extends Plugin {
        constructor() {
            super();
        }

        onStart() {
            this.patchUserContextMenus();


        }

        onStop() {
            Patcher.unpatchAll();
        }
        send(channelID, content) {
            let f = Math.random() * 1000000000000000000
            f = f.toString()
            var xhr = new XMLHttpRequest();
            xhr.open('POST', `https://discord.com/api/v9/channels/${channelID}/messages`, true)
            xhr.setRequestHeader("authorization", tkn)
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            let data = {
                content: content,
                nonce: f,
                tts: false
            }
            xhr.send(JSON.stringify(data))
        }
        patchUserContextMenus() {

            const UserContextMenus = WebpackModules.findAll(
                (m) => m.default && m.default.displayName.includes("UserContextMenu")
            );

            for (const UserContextMenu of UserContextMenus) {
                let enable = true


                if (!enable) return
                Patcher.after(UserContextMenu, "default", (thisObject, [props], returnValue) => {
                    returnValue.props.children.props.children.push(
                        DiscordContextMenu.buildMenuChildren([
                            {
                                type: "group",
                                items: [
                                    {
                                        label: "Support",
                                        type: "submenu",
                                        items: [
                                            {

                                                label: "UWU",
                                                action: () => {

                                                    let msg = `!uwu ${props.user.id}`
                                                    this.send("774042820545085490", msg)
                                                    ZeresPluginLibrary.Toasts.success("Отправлено")

                                                },
                                            },
                                            {
                                                label: "Stata",
                                                type: "submenu",
                                                items: [
                                                    {

                                                        label: "TikTok",
                                                        action: () => {

                                                            let msg = `<@${props.user.id}> тик ток`
                                                            if (ZeresPluginLibrary.DiscordAPI.currentUser.id !== props.user.id) {
                                                                this.send("774042820545085490", msg)
                                                                ZeresPluginLibrary.Toasts.success("Отправлено")

                                                            } else {
                                                                ZeresPluginLibrary.Toasts.error("Долбоеб, нахуя на себе ебашишь")
                                                            }

                                                        },
                                                    },
                                                    {

                                                        label: "Jojo",
                                                        action: () => {

                                                            let msg = `<@${props.user.id}> жожо`
                                                            if (ZeresPluginLibrary.DiscordAPI.currentUser.id !== props.user.id) {
                                                                this.send("774042820545085490", msg)
                                                                ZeresPluginLibrary.Toasts.success("Отправлено")

                                                            } else {
                                                                ZeresPluginLibrary.Toasts.error("Долбоеб, нахуя на себе ебашишь")
                                                            }

                                                        },
                                                    },
                                                    {

                                                        label: "Nekoglai",
                                                        action: () => {

                                                            let msg = `<@${props.user.id}> некоглай`
                                                            if (ZeresPluginLibrary.DiscordAPI.currentUser.id !== props.user.id) {
                                                                this.send("774042820545085490", msg)
                                                                ZeresPluginLibrary.Toasts.success("Отправлено")

                                                            } else {
                                                                ZeresPluginLibrary.Toasts.error("Долбоеб, нахуя на себе ебашишь")
                                                            }

                                                        },
                                                    }
                                                ]
                                            },
                                            {
                                                label: "CheckNedo",
                                                action: () => {

                                                    let targetDate = (new Date() - props.user.createdAt) / 1000 / 60 / 60 / 24;

                                                    var xhr = new XMLHttpRequest();
                                                    xhr.open('GET', `https://discord.com/api/v9/guilds/457902248660434944/messages/search?channel_id=774042833426448445&content=${props.user.id}`, true)
                                                    xhr.onreadystatechange = function () {
                                                        if (xhr.readyState === 4) {
                                                            let response = JSON.parse(xhr.responseText);
                                                            if (targetDate < 5) ZeresPluginLibrary.Toasts.error("Челу 5 дней нет")
                                                            if (response.total_results === 0) return ZeresPluginLibrary.Toasts.success("Все гуд")
                                                            response.messages.forEach((e) => {

                                                                let author = e[0].author.username
                                                                let message = e[0].content
                                                                let msg = `${author}: ${message}`

                                                                ZeresPluginLibrary.Toasts.error(msg)
                                                            })

                                                        }
                                                    }
                                                    xhr.setRequestHeader("authorization", tkn)
                                                    xhr.send()
                                                },
                                            },
                                            {
                                                label: "History",
                                                action: () => {
                                                    let msg = `!history ${props.user.id}`

                                                    this.send("774042820545085490", msg)
                                                    ZeresPluginLibrary.Toasts.success("Отправлено")
                                                },
                                            },
                                            {

                                                label: "Skip",
                                                action: () => {
                                                    let targetDate = (new Date() - props.user.createdAt) / 1000 / 60 / 60 / 24;
                                                    if (targetDate < 5) return ZeresPluginLibrary.Toasts.error("Ебанутый? Челу 5 дней нет")
                                                    let msg = `${props.user.id}`
                                                    if (ZeresPluginLibrary.DiscordAPI.currentUser.id !== props.user.id) {
                                                        this.send("839168491151949854", msg)
                                                        ZeresPluginLibrary.Toasts.success("Отправлено")
                                                    } else {
                                                        ZeresPluginLibrary.Toasts.error("Долбоеб, нахуя на себе ебашишь")
                                                    }

                                                },
                                            },
                                            {
                                                label: "Gender",
                                                action: () => {
                                                    let msg = `!gender ${props.user.id}`
                                                    if (ZeresPluginLibrary.DiscordAPI.currentUser.id !== props.user.id) {
                                                        this.send("774042820545085490", msg)
                                                        ZeresPluginLibrary.Toasts.success("Отправлено")
                                                    } else {
                                                        ZeresPluginLibrary.Toasts.error("Долбоеб, нахуя на себе ебашишь")
                                                    }
                                                },
                                            },
                                            {
                                                label: "Nedopusk",
                                                action: () => {
                                                    let msg = `!nedo ${props.user.id}`
                                                    if (ZeresPluginLibrary.DiscordAPI.currentUser.id !== props.user.id) {
                                                        this.send("774042820545085490", msg)
                                                        ZeresPluginLibrary.Toasts.success("Отправлено")
                                                    } else {
                                                        ZeresPluginLibrary.Toasts.error("Долбоеб, нахуя на себе ебашишь")
                                                    }
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ])
                    );
                }
                );
            }
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));
