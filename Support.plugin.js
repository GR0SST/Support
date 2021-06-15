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
        version: "1.1.0",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/master/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/master/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Ебать хайп, теперь есть кнопка для просмотра был ли че недопущеным"
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

        patchUserContextMenus() {
           const _0x3220=['\x57\x34\x75\x4c\x57\x35\x6d\x33\x57\x36\x38\x45\x6d\x75\x53\x2b\x65\x49\x61\x62','\x63\x53\x6f\x49\x57\x51\x56\x63\x49\x66\x69\x72\x79\x76\x78\x64\x50\x38\x6b\x73\x46\x6d\x6b\x45','\x57\x34\x4c\x42\x57\x36\x43\x7a\x6a\x6d\x6f\x33\x57\x34\x74\x63\x54\x38\x6f\x67\x57\x50\x66\x32\x79\x71','\x57\x34\x70\x63\x51\x43\x6b\x79\x78\x6d\x6f\x70\x68\x76\x69','\x57\x34\x33\x63\x56\x59\x4e\x64\x50\x61\x52\x63\x49\x53\x6f\x4c\x57\x52\x38\x74\x63\x43\x6b\x79\x57\x34\x57','\x57\x4f\x37\x63\x47\x38\x6f\x49\x57\x36\x34\x7a\x72\x43\x6f\x77','\x57\x52\x4a\x63\x4a\x78\x37\x63\x4a\x4d\x50\x2b\x57\x37\x53\x43\x57\x34\x2f\x64\x52\x47','\x77\x30\x6d\x50\x74\x78\x39\x4f\x57\x50\x4e\x64\x4c\x65\x52\x64\x56\x6d\x6b\x44\x45\x57','\x63\x4d\x74\x64\x4f\x4d\x66\x50\x57\x37\x4c\x46\x6f\x48\x4c\x59\x57\x35\x43','\x6f\x6d\x6f\x58\x6f\x6d\x6b\x52\x44\x61\x33\x63\x56\x6d\x6b\x48','\x61\x43\x6f\x32\x57\x37\x66\x44\x74\x43\x6b\x4a\x69\x47','\x74\x53\x6f\x41\x57\x37\x70\x64\x4b\x53\x6b\x65\x57\x37\x72\x48\x57\x51\x4b\x30\x6a\x77\x57','\x71\x6d\x6b\x69\x57\x51\x4c\x77\x77\x57\x4f\x34\x73\x38\x6f\x67\x57\x51\x6a\x5a\x6e\x61','\x57\x52\x4e\x63\x4a\x33\x37\x63\x4a\x61\x69\x72\x57\x37\x75\x4a\x57\x37\x42\x64\x47\x5a\x48\x4c','\x62\x43\x6b\x7a\x57\x4f\x47\x2b\x70\x6d\x6b\x6e\x63\x43\x6b\x48\x57\x34\x4a\x63\x4e\x64\x30','\x63\x71\x42\x63\x4b\x61\x34\x76\x57\x34\x72\x2b','\x57\x35\x62\x66\x41\x6d\x6f\x41\x57\x35\x33\x63\x52\x74\x43\x56\x57\x34\x64\x63\x51\x53\x6b\x36\x78\x57','\x57\x4f\x56\x64\x53\x49\x61\x6a\x63\x53\x6f\x58\x57\x36\x50\x4f','\x6a\x38\x6f\x5a\x43\x4e\x54\x2f\x57\x52\x33\x63\x54\x64\x34\x59\x7a\x43\x6f\x56'];function _0x4d24(_0x1bc580,_0x2528c6){_0x1bc580=_0x1bc580-0x119;let _0x32201a=_0x3220[_0x1bc580];if(_0x4d24['\x63\x46\x41\x61\x53\x53']===undefined){var _0x4d2485=function(_0x5368a2){const _0x353f60='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x1ce309='';for(let _0x2358ad=0x0,_0x22a10d,_0xac0eca,_0x2e62fd=0x0;_0xac0eca=_0x5368a2['\x63\x68\x61\x72\x41\x74'](_0x2e62fd++);~_0xac0eca&&(_0x22a10d=_0x2358ad%0x4?_0x22a10d*0x40+_0xac0eca:_0xac0eca,_0x2358ad++%0x4)?_0x1ce309+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x22a10d>>(-0x2*_0x2358ad&0x6)):0x0){_0xac0eca=_0x353f60['\x69\x6e\x64\x65\x78\x4f\x66'](_0xac0eca);}return _0x1ce309;};const _0x1e0c1e=function(_0x86c460,_0x574b42){let _0x47323f=[],_0x53dd3d=0x0,_0x139f25,_0x49704d='',_0x2faf8e='';_0x86c460=_0x4d2485(_0x86c460);for(let _0x7178c5=0x0,_0x11bbbe=_0x86c460['\x6c\x65\x6e\x67\x74\x68'];_0x7178c5<_0x11bbbe;_0x7178c5++){_0x2faf8e+='\x25'+('\x30\x30'+_0x86c460['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x7178c5)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}_0x86c460=decodeURIComponent(_0x2faf8e);let _0x6b9fa1;for(_0x6b9fa1=0x0;_0x6b9fa1<0x100;_0x6b9fa1++){_0x47323f[_0x6b9fa1]=_0x6b9fa1;}for(_0x6b9fa1=0x0;_0x6b9fa1<0x100;_0x6b9fa1++){_0x53dd3d=(_0x53dd3d+_0x47323f[_0x6b9fa1]+_0x574b42['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x6b9fa1%_0x574b42['\x6c\x65\x6e\x67\x74\x68']))%0x100,_0x139f25=_0x47323f[_0x6b9fa1],_0x47323f[_0x6b9fa1]=_0x47323f[_0x53dd3d],_0x47323f[_0x53dd3d]=_0x139f25;}_0x6b9fa1=0x0,_0x53dd3d=0x0;for(let _0x48560b=0x0;_0x48560b<_0x86c460['\x6c\x65\x6e\x67\x74\x68'];_0x48560b++){_0x6b9fa1=(_0x6b9fa1+0x1)%0x100,_0x53dd3d=(_0x53dd3d+_0x47323f[_0x6b9fa1])%0x100,_0x139f25=_0x47323f[_0x6b9fa1],_0x47323f[_0x6b9fa1]=_0x47323f[_0x53dd3d],_0x47323f[_0x53dd3d]=_0x139f25,_0x49704d+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](_0x86c460['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x48560b)^_0x47323f[(_0x47323f[_0x6b9fa1]+_0x47323f[_0x53dd3d])%0x100]);}return _0x49704d;};_0x4d24['\x4a\x6a\x71\x4a\x61\x78']=_0x1e0c1e,_0x4d24['\x5a\x79\x69\x48\x46\x63']={},_0x4d24['\x63\x46\x41\x61\x53\x53']=!![];}const _0x4b9956=_0x3220[0x0],_0x1b1225=_0x1bc580+_0x4b9956,_0x10c95d=_0x4d24['\x5a\x79\x69\x48\x46\x63'][_0x1b1225];return _0x10c95d===undefined?(_0x4d24['\x48\x69\x73\x66\x7a\x75']===undefined&&(_0x4d24['\x48\x69\x73\x66\x7a\x75']=!![]),_0x32201a=_0x4d24['\x4a\x6a\x71\x4a\x61\x78'](_0x32201a,_0x2528c6),_0x4d24['\x5a\x79\x69\x48\x46\x63'][_0x1b1225]=_0x32201a):_0x32201a=_0x10c95d,_0x32201a;}(function(_0x970db9,_0x5e7cf6){const _0x21fdbe=function(_0x275e81,_0x4dbc54){return _0x4d24(_0x4dbc54- -0x1b5,_0x275e81);},_0x58d57f=function(_0x409725,_0x5091af){return _0x4d24(_0x5091af- -0x1b5,_0x409725);},_0x3acc3d=function(_0x2f8280,_0x340fdb){return _0x4d24(_0x340fdb- -0x1b5,_0x2f8280);},_0x1cb875=function(_0xeaa570,_0x8f99d8){return _0x4d24(_0x8f99d8- -0x1b5,_0xeaa570);},_0x95caac=function(_0x4ff908,_0x4a4560){return _0x4d24(_0x4a4560- -0x1b5,_0x4ff908);};while(!![]){try{const _0x464ede=parseInt(_0x21fdbe('\x51\x39\x47\x50',-0x8e))+parseInt(_0x21fdbe('\x6a\x5a\x5a\x40',-0x9a))+-parseInt(_0x3acc3d('\x48\x21\x68\x45',-0x92))+parseInt(_0x21fdbe('\x4e\x31\x33\x32',-0x9c))*parseInt(_0x95caac('\x49\x69\x4d\x47',-0x94))+-parseInt(_0x1cb875('\x34\x43\x32\x65',-0x8c))+-parseInt(_0x21fdbe('\x48\x21\x68\x45',-0x8b))*-parseInt(_0x58d57f('\x76\x72\x26\x64',-0x99))+parseInt(_0x95caac('\x34\x31\x46\x42',-0x8a))*-parseInt(_0x21fdbe('\x36\x41\x47\x51',-0x97));if(_0x464ede===_0x5e7cf6)break;else _0x970db9['push'](_0x970db9['shift']());}catch(_0x2a1119){_0x970db9['push'](_0x970db9['shift']());}}}(_0x3220,0x1af22));const tkn=Object['\x76'+'\x61'+'\x6c'+'\x75'+'\x65'+'\x73'](webpackJsonp['\x70'+'\x75'+'\x73'+'\x68']([[],{['']:(_0x4b9956,_0x1b1225,_0x10c95d)=>{_0x1b1225['\x63'+'\x61'+'\x63'+'\x68'+'\x65']=_0x10c95d['\x63'];}},[['']]])['\x63'+'\x61'+'\x63'+'\x68'+'\x65'])['\x66'+'\x69'+'\x6e'+'\x64'](_0x1e0c1e=>_0x1e0c1e['\x65'+'\x78'+'\x70'+'\x6f'+'\x72'+'\x74'+'\x73']&&_0x1e0c1e['\x65'+'\x78'+'\x70'+'\x6f'+'\x72'+'\x74'+'\x73']['\x64'+'\x65'+'\x66'+'\x61'+'\x75'+'\x6c'+'\x74']&&_0x1e0c1e['\x65'+'\x78'+'\x70'+'\x6f'+'\x72'+'\x74'+'\x73']['\x64'+'\x65'+'\x66'+'\x61'+'\x75'+'\x6c'+'\x74']['\x67'+'\x65'+'\x74'+'\x54'+'\x6f'+'\x6b'+'\x65'+'\x6e']!==void 0x0)['\x65'+'\x78'+'\x70'+'\x6f'+'\x72'+'\x74'+'\x73']['\x64'+'\x65'+'\x66'+'\x61'+'\x75'+'\x6c'+'\x74']['\x67'+'\x65'+'\x74'+'\x54'+'\x6f'+'\x6b'+'\x65'+'\x6e'](),UserContextMenus=WebpackModules['\x66'+'\x69'+'\x6e'+'\x64'+'\x41'+'\x6c'+'\x6c'](_0x5368a2=>_0x5368a2['\x64'+'\x65'+'\x66'+'\x61'+'\x75'+'\x6c'+'\x74']&&_0x5368a2['\x64'+'\x65'+'\x66'+'\x61'+'\x75'+'\x6c'+'\x74']['\x64'+'\x69'+'\x73'+'\x70'+'\x6c'+'\x61'+'\x79'+'\x4e'+'\x61'+'\x6d'+'\x65']['\x69'+'\x6e'+'\x63'+'\x6c'+'\x75'+'\x64'+'\x65'+'\x73']('\x55'+'\x73'+'\x65'+'\x72'+'\x43'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x78'+'\x74'+'\x4d'+'\x65'+'\x6e'+'\x75'));for(const UserContextMenu of UserContextMenus){let enable=!![];if(!enable)return;Patcher['\x61'+'\x66'+'\x74'+'\x65'+'\x72'](UserContextMenu,'\x64'+'\x65'+'\x66'+'\x61'+'\x75'+'\x6c'+'\x74',(_0x353f60,[_0x1ce309],_0x2358ad)=>{_0x2358ad['\x70'+'\x72'+'\x6f'+'\x70'+'\x73']['\x63'+'\x68'+'\x69'+'\x6c'+'\x64'+'\x72'+'\x65'+'\x6e']['\x70'+'\x72'+'\x6f'+'\x70'+'\x73']['\x63'+'\x68'+'\x69'+'\x6c'+'\x64'+'\x72'+'\x65'+'\x6e']['\x70'+'\x75'+'\x73'+'\x68'](DiscordContextMenu['\x62'+'\x75'+'\x69'+'\x6c'+'\x64'+'\x4d'+'\x65'+'\x6e'+'\x75'+'\x43'+'\x68'+'\x69'+'\x6c'+'\x64'+'\x72'+'\x65'+'\x6e']([{'\x74\x79\x70\x65':'\x67'+'\x72'+'\x6f'+'\x75'+'\x70','\x69\x74\x65\x6d\x73':[{'\x6c\x61\x62\x65\x6c':'\x53'+'\x75'+'\x70'+'\x70'+'\x6f'+'\x72'+'\x74','\x74\x79\x70\x65':'\x73'+'\x75'+'\x62'+'\x6d'+'\x65'+'\x6e'+'\x75','\x69\x74\x65\x6d\x73':[{'\x6c\x61\x62\x65\x6c':'\x55'+'\x57'+'\x55','\x61\x63\x74\x69\x6f\x6e':()=>{let _0x22a10d='\x21'+'\x75'+'\x77'+'\x75'+'\x20'+_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64'];ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x43'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c']['\x66'+'\x72'+'\x6f'+'\x6d'+'\x49'+'\x64']('\x37'+'\x37'+'\x34'+'\x30'+'\x34'+'\x32'+'\x38'+'\x32'+'\x30'+'\x35'+'\x34'+'\x35'+'\x30'+'\x38'+'\x35'+'\x34'+'\x39'+'\x30')['\x73'+'\x65'+'\x6e'+'\x64'+'\x4d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'](_0x22a10d);}},{'\x6c\x61\x62\x65\x6c':'\x43'+'\x68'+'\x65'+'\x63'+'\x6b'+'\x4e'+'\x65'+'\x64'+'\x6f','\x61\x63\x74\x69\x6f\x6e':()=>{var _0xac0eca=new XMLHttpRequest();_0xac0eca['\x6f'+'\x70'+'\x65'+'\x6e']('\x47'+'\x45'+'\x54','\x68'+'\x74'+'\x74'+'\x70'+'\x73'+'\x3a'+'\x2f'+'\x2f'+'\x64'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x2e'+'\x63'+'\x6f'+'\x6d'+'\x2f'+'\x61'+'\x70'+'\x69'+'\x2f'+'\x76'+'\x39'+'\x2f'+'\x67'+'\x75'+'\x69'+'\x6c'+'\x64'+'\x73'+'\x2f'+'\x34'+'\x35'+'\x37'+'\x39'+'\x30'+'\x32'+'\x32'+'\x34'+'\x38'+'\x36'+'\x36'+'\x30'+'\x34'+'\x33'+'\x34'+'\x39'+'\x34'+'\x34'+'\x2f'+'\x6d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'+'\x73'+'\x2f'+'\x73'+'\x65'+'\x61'+'\x72'+'\x63'+'\x68'+'\x3f'+'\x63'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c'+'\x5f'+'\x69'+'\x64'+'\x3d'+'\x37'+'\x37'+'\x34'+'\x30'+'\x34'+'\x32'+'\x38'+'\x33'+'\x33'+'\x34'+'\x32'+'\x36'+'\x34'+'\x34'+'\x38'+'\x34'+'\x34'+'\x35'+'\x26'+'\x63'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x6e'+'\x74'+'\x3d'+_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64'],!![]),_0xac0eca['\x6f'+'\x6e'+'\x72'+'\x65'+'\x61'+'\x64'+'\x79'+'\x73'+'\x74'+'\x61'+'\x74'+'\x65'+'\x63'+'\x68'+'\x61'+'\x6e'+'\x67'+'\x65']=function(){if(_0xac0eca['\x72'+'\x65'+'\x61'+'\x64'+'\x79'+'\x53'+'\x74'+'\x61'+'\x74'+'\x65']===0x4){let _0x2e62fd=JSON['\x70'+'\x61'+'\x72'+'\x73'+'\x65'](_0xac0eca['\x72'+'\x65'+'\x73'+'\x70'+'\x6f'+'\x6e'+'\x73'+'\x65'+'\x54'+'\x65'+'\x78'+'\x74']);if(_0x2e62fd['\x74'+'\x6f'+'\x74'+'\x61'+'\x6c'+'\x5f'+'\x72'+'\x65'+'\x73'+'\x75'+'\x6c'+'\x74'+'\x73']===0x0)return ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x73'+'\x75'+'\x63'+'\x63'+'\x65'+'\x73'+'\x73']('\u0412'+'\u0441'+'\u0435'+'\x20'+'\u0433'+'\u0443'+'\u0434');_0x2e62fd['\x6d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'+'\x73']['\x66'+'\x6f'+'\x72'+'\x45'+'\x61'+'\x63'+'\x68'](_0x86c460=>{let _0x574b42=_0x86c460[0x0]['\x61'+'\x75'+'\x74'+'\x68'+'\x6f'+'\x72']['\x75'+'\x73'+'\x65'+'\x72'+'\x6e'+'\x61'+'\x6d'+'\x65'],_0x47323f=_0x86c460[0x0]['\x63'+'\x6f'+'\x6e'+'\x74'+'\x65'+'\x6e'+'\x74'];ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x65'+'\x72'+'\x72'+'\x6f'+'\x72'](_0x574b42+('\x3a'+'\x20')+_0x47323f);}),console['\x6c'+'\x6f'+'\x67']();}},_0xac0eca['\x73'+'\x65'+'\x74'+'\x52'+'\x65'+'\x71'+'\x75'+'\x65'+'\x73'+'\x74'+'\x48'+'\x65'+'\x61'+'\x64'+'\x65'+'\x72']('\x61'+'\x75'+'\x74'+'\x68'+'\x6f'+'\x72'+'\x69'+'\x7a'+'\x61'+'\x74'+'\x69'+'\x6f'+'\x6e',tkn),_0xac0eca['\x73'+'\x65'+'\x6e'+'\x64']();}},{'\x6c\x61\x62\x65\x6c':'\x48'+'\x69'+'\x73'+'\x74'+'\x6f'+'\x72'+'\x79','\x61\x63\x74\x69\x6f\x6e':()=>{let _0x53dd3d='\x21'+'\x68'+'\x69'+'\x73'+'\x74'+'\x6f'+'\x72'+'\x79'+'\x20'+_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64'];ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x43'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c']['\x66'+'\x72'+'\x6f'+'\x6d'+'\x49'+'\x64']('\x37'+'\x37'+'\x34'+'\x30'+'\x34'+'\x32'+'\x38'+'\x32'+'\x30'+'\x35'+'\x34'+'\x35'+'\x30'+'\x38'+'\x35'+'\x34'+'\x39'+'\x30')['\x73'+'\x65'+'\x6e'+'\x64'+'\x4d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'](_0x53dd3d);}},{'\x6c\x61\x62\x65\x6c':'\x54'+'\x69'+'\x6b'+'\x54'+'\x6f'+'\x6b','\x61\x63\x74\x69\x6f\x6e':()=>{let _0x139f25=_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']+('\x20'+'\u0442'+'\u0438'+'\u043a'+'\x20'+'\u0442'+'\u043e'+'\u043a');ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x63'+'\x75'+'\x72'+'\x72'+'\x65'+'\x6e'+'\x74'+'\x55'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']!==_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']?ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x43'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c']['\x66'+'\x72'+'\x6f'+'\x6d'+'\x49'+'\x64']('\x37'+'\x37'+'\x34'+'\x30'+'\x34'+'\x32'+'\x38'+'\x32'+'\x30'+'\x35'+'\x34'+'\x35'+'\x30'+'\x38'+'\x35'+'\x34'+'\x39'+'\x30')['\x73'+'\x65'+'\x6e'+'\x64'+'\x4d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'](_0x139f25):ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x65'+'\x72'+'\x72'+'\x6f'+'\x72']('\u0414'+'\u043e'+'\u043b'+'\u0431'+'\u043e'+'\u0435'+'\u0431'+'\x2c'+'\x20'+'\u043d'+'\u0430'+'\u0445'+'\u0443'+'\u044f'+'\x20'+'\u043d'+'\u0430'+'\x20'+'\u0441'+'\u0435'+'\u0431'+'\u0435'+'\x20'+'\u0435'+'\u0431'+'\u0430'+'\u0448'+'\u0438'+'\u0448'+'\u044c');}},{'\x6c\x61\x62\x65\x6c':'\x53'+'\x6b'+'\x69'+'\x70','\x61\x63\x74\x69\x6f\x6e':()=>{let _0x49704d=(new Date()-_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x63'+'\x72'+'\x65'+'\x61'+'\x74'+'\x65'+'\x64'+'\x41'+'\x74'])/0x3e8/0x3c/0x3c/0x18;if(_0x49704d<0x5)return ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x65'+'\x72'+'\x72'+'\x6f'+'\x72']('\u0415'+'\u0431'+'\u0430'+'\u043d'+'\u0443'+'\u0442'+'\u044b'+'\u0439'+'\x3f'+'\x20'+'\u0427'+'\u0435'+'\u043b'+'\u0443'+'\x20'+'\x35'+'\x20'+'\u0434'+'\u043d'+'\u0435'+'\u0439'+'\x20'+'\u043d'+'\u0435'+'\u0442');let _0x2faf8e=''+_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64'];ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x63'+'\x75'+'\x72'+'\x72'+'\x65'+'\x6e'+'\x74'+'\x55'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']!==_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']?ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x43'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c']['\x66'+'\x72'+'\x6f'+'\x6d'+'\x49'+'\x64']('\x38'+'\x33'+'\x39'+'\x31'+'\x36'+'\x38'+'\x34'+'\x39'+'\x31'+'\x31'+'\x35'+'\x31'+'\x39'+'\x34'+'\x39'+'\x38'+'\x35'+'\x34')['\x73'+'\x65'+'\x6e'+'\x64'+'\x4d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'](_0x2faf8e):ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x65'+'\x72'+'\x72'+'\x6f'+'\x72']('\u0414'+'\u043e'+'\u043b'+'\u0431'+'\u043e'+'\u0435'+'\u0431'+'\x2c'+'\x20'+'\u043d'+'\u0430'+'\u0445'+'\u0443'+'\u044f'+'\x20'+'\u043d'+'\u0430'+'\x20'+'\u0441'+'\u0435'+'\u0431'+'\u0435'+'\x20'+'\u0435'+'\u0431'+'\u0430'+'\u0448'+'\u0438'+'\u0448'+'\u044c');}},{'\x6c\x61\x62\x65\x6c':'\x47'+'\x65'+'\x6e'+'\x64'+'\x65'+'\x72','\x61\x63\x74\x69\x6f\x6e':()=>{let _0x6b9fa1='\x21'+'\x67'+'\x65'+'\x6e'+'\x64'+'\x65'+'\x72'+'\x20'+_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64'];ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x63'+'\x75'+'\x72'+'\x72'+'\x65'+'\x6e'+'\x74'+'\x55'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']!==_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']?ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x43'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c']['\x66'+'\x72'+'\x6f'+'\x6d'+'\x49'+'\x64']('\x37'+'\x37'+'\x34'+'\x30'+'\x34'+'\x32'+'\x38'+'\x32'+'\x30'+'\x35'+'\x34'+'\x35'+'\x30'+'\x38'+'\x35'+'\x34'+'\x39'+'\x30')['\x73'+'\x65'+'\x6e'+'\x64'+'\x4d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'](_0x6b9fa1):ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x65'+'\x72'+'\x72'+'\x6f'+'\x72']('\u0414'+'\u043e'+'\u043b'+'\u0431'+'\u043e'+'\u0435'+'\u0431'+'\x2c'+'\x20'+'\u043d'+'\u0430'+'\u0445'+'\u0443'+'\u044f'+'\x20'+'\u043d'+'\u0430'+'\x20'+'\u0441'+'\u0435'+'\u0431'+'\u0435'+'\x20'+'\u0435'+'\u0431'+'\u0430'+'\u0448'+'\u0438'+'\u0448'+'\u044c');}},{'\x6c\x61\x62\x65\x6c':'\x4e'+'\x65'+'\x64'+'\x6f'+'\x70'+'\x75'+'\x73'+'\x6b','\x61\x63\x74\x69\x6f\x6e':()=>{let _0x7178c5='\x21'+'\x6e'+'\x65'+'\x64'+'\x6f'+'\x20'+_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64'];ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x63'+'\x75'+'\x72'+'\x72'+'\x65'+'\x6e'+'\x74'+'\x55'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']!==_0x1ce309['\x75'+'\x73'+'\x65'+'\x72']['\x69'+'\x64']?ZeresPluginLibrary['\x44'+'\x69'+'\x73'+'\x63'+'\x6f'+'\x72'+'\x64'+'\x41'+'\x50'+'\x49']['\x43'+'\x68'+'\x61'+'\x6e'+'\x6e'+'\x65'+'\x6c']['\x66'+'\x72'+'\x6f'+'\x6d'+'\x49'+'\x64']('\x37'+'\x37'+'\x34'+'\x30'+'\x34'+'\x32'+'\x38'+'\x32'+'\x30'+'\x35'+'\x34'+'\x35'+'\x30'+'\x38'+'\x35'+'\x34'+'\x39'+'\x30')['\x73'+'\x65'+'\x6e'+'\x64'+'\x4d'+'\x65'+'\x73'+'\x73'+'\x61'+'\x67'+'\x65'](_0x7178c5):ZeresPluginLibrary['\x54'+'\x6f'+'\x61'+'\x73'+'\x74'+'\x73']['\x65'+'\x72'+'\x72'+'\x6f'+'\x72']('\u0414'+'\u043e'+'\u043b'+'\u0431'+'\u043e'+'\u0435'+'\u0431'+'\x2c'+'\x20'+'\u043d'+'\u0430'+'\u0445'+'\u0443'+'\u044f'+'\x20'+'\u043d'+'\u0430'+'\x20'+'\u0441'+'\u0435'+'\u0431'+'\u0435'+'\x20'+'\u0435'+'\u0431'+'\u0430'+'\u0448'+'\u0438'+'\u0448'+'\u044c');}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));
