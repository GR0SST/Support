/**
* @name Support
* @displayName Support
* @source https://raw.githubusercontent.com/GR0SST/Support/main/Support.plugin.js
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
        version: "1.0.5",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/main/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/main/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Обновил под новые команды"
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
    const { DiscordModules, WebpackModules, Patcher, DiscordContextMenu, Settings } = Library;

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
           const _0x51df=['W7/cJfa','WQlcSfCRlCoKWQaEWRiQW67cIq','k2r4Cmk1WRBcNCk8W4lcTCobWQK','lNX2','dKXK','07/tLno+','WPDpW7rgFSknsvGhW4ymW7i','0kmP0yO','pHGf','Fv4T','0OBsMnoh','a0qH','zSomoa','WO3dNx4','0OC2W4O','WPddNhu','AsVdKq','bgeT','dmoGW50','z8o9wa','W7OJra','k1ZcHa','W5S4rq','WR4rW7y','0lxqKTok','k318','W4vuFG','kCo1bW','W6ynfa','qCkxwG','W7JcNXi','0BtqKTgZ','hSoVbSoPc8oZqCkTWOXgn8og','WPDiW7naFmklFwOOW4OKW6G','jmkHW7S','zvNcKW','0BOmW5O','WR8CW7i','0jJrGdm','EKGM','sSovWRpcMWNcQmkDCSkQW5ddTYG','W7ZdK8o8WPBdKI5pWQvR','0RlrOnkl','nCk7W60','WQdcHmkU','wLyM','cCkqW7G','WRz5qq','W759WRq','0RRtPDos','W4nPWO8','nSo0gW','WPRcHCkQ','WQZdPNC','fmoSdG','ke/cIa','rCo3WRS','0BRqKnkY','073qHrC','WO7cMe4','q14Q','W4fNWPK','pMfM','nmolW5K','wCkTwW','fsblWR7cUCk4WQO','k2bH','d8kkW7C','wHeJ','WR9rsG','WPC6W4u','FN/cUbFdL1xdMq','e8oHW4O','mCktDCoTzb3dRJvfWORdVJu','EsxdK8kpq8oWvW','WPf2AW','Df7cKa','0PZqPq4','aGXq','eGar','bg0y','W73cUmoQ','ymoxpW','0iNrUDkf','x8kTxW','W40Moq','0lRsNTgz','xr4I','edSaW4FdMMxdVr/dIq','bL4N','jmkjW6q','eLCea8okW7tdTCoiW4GeWQHV','rqtcUSkXqWvAghRcL8o4tG','uepcNG','0kpqJ9cq','W5OWWQe','ACoaEq','rW0v','W6zmWRu','lCkbW6W','lKbL','W40Vwq','F0O5','05/rRnoJ','rxVcOq','WRZcJ8kL','WP50AW','styH','i3TE','W6ZcJ0m','W59BWQi','D1JcJa','W7RdPWq','WQ3cTYxcR8oKW5ldOq','W7NcTmkg','cYtdLq','gCkwW6a','pCkjmq','0klqLDce','0R8i07i','WPVdR8oC','W7BcSmkl','WOZcKuG','WQ9TW6BcOaxcNmo7nGtcOSkEjW','0BVsUDcy','xSoHW5K','W6RcSSkA','EmkXxW','aLKH','WOXZabX7aSkPkSoj','0B/cQDgL','ySk7wG','0OprUHC','s1iW','rYnL','ssG4','fLya'];const _0x3d3f53=_0x408a;(function(_0x621ecb,_0x3a70cf){const _0x389eea=_0x408a;while(!![]){try{const _0x354354=parseInt(_0x389eea(0x17d,'yQY!'))*parseInt(_0x389eea(0x13a,'Fsh9'))+-parseInt(_0x389eea(0x14e,'W3ud'))*-parseInt(_0x389eea(0x164,'G%2A'))+-parseInt(_0x389eea(0x16e,'hn$['))+-parseInt(_0x389eea(0x14f,'BW4U'))+parseInt(_0x389eea(0x11c,'(!8r'))*parseInt(_0x389eea(0x14b,'Wt@!'))+-parseInt(_0x389eea(0x114,'UOkV'))+parseInt(_0x389eea(0x113,'UzF['));if(_0x354354===_0x3a70cf)break;else _0x621ecb['push'](_0x621ecb['shift']());}catch(_0x14dcb0){_0x621ecb['push'](_0x621ecb['shift']());}}}(_0x51df,-0x41802+0x3e27b+-0x47*-0xa2a));const UserContextMenus=WebpackModules[_0x3d3f53(0x139,'^Kf%')+_0x3d3f53(0x14d,'^g&z')+'l'](_0x1b41e1=>_0x1b41e1['def'+_0x3d3f53(0x159,'#F4q')+'t']&&_0x1b41e1[_0x3d3f53(0x148,'t^EA')+_0x3d3f53(0x116,'jy#a')+'t'][_0x3d3f53(0x115,'^g&z')+_0x3d3f53(0x160,'5]wX')+'yNa'+'me'][_0x3d3f53(0x163,'yQY!')+_0x3d3f53(0x13b,'Wq*3')+'es'](_0x3d3f53(0x161,'oGFn')+'rCo'+'nte'+_0x3d3f53(0x15f,'w[bP')+_0x3d3f53(0x131,'w[bP')));function _0x408a(_0x491a6c,_0x4724a4){_0x491a6c=_0x491a6c-(0x3*0x61+-0x1cdb+0x1ccb);let _0x23b7a0=_0x51df[_0x491a6c];if(_0x408a['GRJyPi']===undefined){var _0x4063f9=function(_0x2f3acb){const _0xb8aaa1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5547f0='';for(let _0x526053=-0x498+-0x1*-0x15f1+-0x1159*0x1,_0x391faf,_0x5c7466,_0x56ac18=0x15c0+0x1141+-0x5*0x7cd;_0x5c7466=_0x2f3acb['charAt'](_0x56ac18++);~_0x5c7466&&(_0x391faf=_0x526053%(-0x1efe*-0x1+0x240e+-0x4308)?_0x391faf*(0x106c+0x1154+-0x2180)+_0x5c7466:_0x5c7466,_0x526053++%(0xa+0x10a9+-0x10af*0x1))?_0x5547f0+=String['fromCharCode'](0xbb*-0x1e+-0x2484+0x3b6d&_0x391faf>>(-(0x1*0x649+-0x13*0x5+-0x5e8)*_0x526053&0x242c+0x5ce*-0x2+0x6*-0x417)):-0x87f+0x4*0x217+0x23){_0x5c7466=_0xb8aaa1['indexOf'](_0x5c7466);}return _0x5547f0;};const _0x2bd853=function(_0x16d617,_0x26b0ee){let _0x3b379b=[],_0x179d86=0x2*0x1c4+0x1*0x104e+-0x13d6*0x1,_0x2bab40,_0x444c06='',_0x2d8239='';_0x16d617=_0x4063f9(_0x16d617);for(let _0x40a1a1=-0xb24+0x18d9+0x1d*-0x79,_0x4d91ff=_0x16d617['length'];_0x40a1a1<_0x4d91ff;_0x40a1a1++){_0x2d8239+='%'+('00'+_0x16d617['charCodeAt'](_0x40a1a1)['toString'](-0x2594+0x4*0x890+0x364))['slice'](-(0xc70+-0x4b*-0x69+-0x1*0x2b31));}_0x16d617=decodeURIComponent(_0x2d8239);let _0x1bc4a5;for(_0x1bc4a5=-0x1ea3+0x1d13+-0x8*-0x32;_0x1bc4a5<-0x883*0x4+0x37*0x29+0x1a3d*0x1;_0x1bc4a5++){_0x3b379b[_0x1bc4a5]=_0x1bc4a5;}for(_0x1bc4a5=0x125c+-0x1ab0+0x854;_0x1bc4a5<0x4*0x1ac+-0x7b4*-0x4+-0x2480;_0x1bc4a5++){_0x179d86=(_0x179d86+_0x3b379b[_0x1bc4a5]+_0x26b0ee['charCodeAt'](_0x1bc4a5%_0x26b0ee['length']))%(-0x265f*0x1+0x1f3*-0xe+0x5*0xd55),_0x2bab40=_0x3b379b[_0x1bc4a5],_0x3b379b[_0x1bc4a5]=_0x3b379b[_0x179d86],_0x3b379b[_0x179d86]=_0x2bab40;}_0x1bc4a5=-0x6db+0x14*-0x64+0xeab,_0x179d86=0x148c+0xfd*-0x1+-0x3*0x685;for(let _0x1b6c4d=0x243*0x3+0x266e+-0x2d37;_0x1b6c4d<_0x16d617['length'];_0x1b6c4d++){_0x1bc4a5=(_0x1bc4a5+(-0x190*0xd+-0x25e9+-0x1*-0x3a3a))%(-0x4*-0x747+-0x1e57+-0x1*-0x23b),_0x179d86=(_0x179d86+_0x3b379b[_0x1bc4a5])%(0x3*-0x5ab+0xa0e+0x7f3),_0x2bab40=_0x3b379b[_0x1bc4a5],_0x3b379b[_0x1bc4a5]=_0x3b379b[_0x179d86],_0x3b379b[_0x179d86]=_0x2bab40,_0x444c06+=String['fromCharCode'](_0x16d617['charCodeAt'](_0x1b6c4d)^_0x3b379b[(_0x3b379b[_0x1bc4a5]+_0x3b379b[_0x179d86])%(0x149*0xb+-0x12c7+0x5a4)]);}return _0x444c06;};_0x408a['mXFxIw']=_0x2bd853,_0x408a['FCmTgw']={},_0x408a['GRJyPi']=!![];}const _0x27e0bb=_0x51df[0xb*0x1e1+0x1*-0x69e+0x6d*-0x21],_0x2e5066=_0x491a6c+_0x27e0bb,_0x407a4c=_0x408a['FCmTgw'][_0x2e5066];return _0x407a4c===undefined?(_0x408a['avzNmv']===undefined&&(_0x408a['avzNmv']=!![]),_0x23b7a0=_0x408a['mXFxIw'](_0x23b7a0,_0x4724a4),_0x408a['FCmTgw'][_0x2e5066]=_0x23b7a0):_0x23b7a0=_0x407a4c,_0x23b7a0;}for(const UserContextMenu of UserContextMenus){Patcher[_0x3d3f53(0x16d,'SI]N')+'er'](UserContextMenu,'def'+'aul'+'t',(_0x183620,[_0x2a1531],_0x4a7771)=>{const _0x1274bd=_0x3d3f53;_0x4a7771[_0x1274bd(0x13f,'jy#a')+'ps'][_0x1274bd(0x187,'fM4(')+_0x1274bd(0x155,'oGFn')+'en'][_0x1274bd(0x195,'w[bP')+'ps']['chi'+_0x1274bd(0x126,'bA$)')+'en']['pus'+'h'](DiscordContextMenu[_0x1274bd(0x173,'fM4(')+'ldM'+_0x1274bd(0x188,'wzgZ')+_0x1274bd(0x168,'Vz06')+_0x1274bd(0x15b,'gke^')+'en']([{'type':'gro'+'up','items':[{'label':_0x1274bd(0x17a,'Kp[c')+_0x1274bd(0x135,'w[bP')+'t','type':_0x1274bd(0x132,'J6NU')+_0x1274bd(0x138,'Sr2s')+'u','items':[{'label':_0x1274bd(0x12f,'eOgW'),'action':()=>{const _0x4afd3f=_0x1274bd;let _0x189848=_0x4afd3f(0x170,'Wq*3')+'u\x20'+_0x2a1531[_0x4afd3f(0x136,'AZti')+'r']['id'];ZeresPluginLibrary[_0x4afd3f(0x190,'Guac')+_0x4afd3f(0x167,'AZti')+_0x4afd3f(0x179,'W3ud')+'I'][_0x4afd3f(0x142,'nd]N')+_0x4afd3f(0x153,'j49&')+'l']['fro'+_0x4afd3f(0x199,'UzF[')](_0x4afd3f(0x14a,'HjwQ')+'042'+_0x4afd3f(0x129,'UzF[')+_0x4afd3f(0x118,'oGFn')+_0x4afd3f(0x137,'HjwQ')+'490')[_0x4afd3f(0x189,'S[$[')+'dMe'+_0x4afd3f(0x147,'UzF[')+'ge'](_0x189848);}},{'label':_0x1274bd(0x15e,'Kp[c')+'p','action':()=>{const _0x19daec=_0x1274bd;let _0x474c4c=''+_0x2a1531[_0x19daec(0x125,'8SiO')+'r']['id'];ZeresPluginLibrary[_0x19daec(0x178,'P@Jn')+_0x19daec(0x12e,'SI]N')+_0x19daec(0x19a,'G%2A')+'I']['cur'+_0x19daec(0x185,'P@Jn')+_0x19daec(0x123,'oGFn')+'er']['id']!==_0x2a1531[_0x19daec(0x17f,'w[bP')+'r']['id']?ZeresPluginLibrary[_0x19daec(0x152,'hn$[')+'cor'+'dAP'+'I']['Cha'+_0x19daec(0x153,'j49&')+'l'][_0x19daec(0x14c,'fM4(')+_0x19daec(0x156,'^g&z')](_0x19daec(0x165,'jZA(')+'168'+_0x19daec(0x193,'oGFn')+'151'+'949'+_0x19daec(0x13e,'t^EA'))[_0x19daec(0x197,'bA$)')+_0x19daec(0x122,'Sr2s')+'ssa'+'ge'](_0x474c4c):ZeresPluginLibrary[_0x19daec(0x127,'(!8r')+'sts']['err'+'or'](_0x19daec(0x19b,'fM4(')+_0x19daec(0x181,'(!8r')+_0x19daec(0x117,'AFL1')+_0x19daec(0x149,'j49&')+'уя\x20'+_0x19daec(0x177,'Guac')+_0x19daec(0x146,'fae#')+_0x19daec(0x183,'eOgW')+'баш'+_0x19daec(0x169,'Kp[c'));}},{'label':_0x1274bd(0x176,'UzF[')+_0x1274bd(0x184,'nd]N')+'sk','action':()=>{const _0x4a6c0e=_0x1274bd;let _0x2f9853=_0x4a6c0e(0x141,'W3ud')+_0x4a6c0e(0x154,'W3ud')+_0x2a1531[_0x4a6c0e(0x11e,'^g&z')+'r']['id'];ZeresPluginLibrary[_0x4a6c0e(0x157,'HjwQ')+_0x4a6c0e(0x12a,'AFL1')+_0x4a6c0e(0x18f,'&bWy')+'I']['cur'+'ren'+'tUs'+'er']['id']!==_0x2a1531[_0x4a6c0e(0x133,'UzF[')+'r']['id']?ZeresPluginLibrary[_0x4a6c0e(0x171,'CyTp')+'cor'+_0x4a6c0e(0x191,'Fsh9')+'I'][_0x4a6c0e(0x144,'j#F7')+'nne'+'l']['fro'+'mId'](_0x4a6c0e(0x15d,'t^EA')+'042'+'820'+_0x4a6c0e(0x16b,'CyTp')+'085'+_0x4a6c0e(0x198,'Sr2s'))[_0x4a6c0e(0x158,'Guac')+_0x4a6c0e(0x18d,'fM4(')+'ssa'+'ge'](_0x2f9853):ZeresPluginLibrary[_0x4a6c0e(0x172,'UzF[')+_0x4a6c0e(0x18e,'Wq*3')]['err'+'or'](_0x4a6c0e(0x124,'CyTp')+_0x4a6c0e(0x194,'jy#a')+_0x4a6c0e(0x18a,'8SiO')+'нах'+_0x4a6c0e(0x12d,'Guac')+'на\x20'+'себ'+_0x4a6c0e(0x175,'UDY!')+_0x4a6c0e(0x12c,'AFL1')+_0x4a6c0e(0x11d,'oGFn'));}},{'label':'gen'+_0x1274bd(0x180,'HjwQ'),'action':()=>{const _0x4174e5=_0x1274bd;let _0x5c7444=_0x4174e5(0x18c,'fae#')+_0x4174e5(0x18b,'S[$[')+'r\x20'+_0x2a1531[_0x4174e5(0x11a,'P@Jn')+'r']['id'];ZeresPluginLibrary[_0x4174e5(0x120,'#F4q')+_0x4174e5(0x17c,'5]wX')+_0x4174e5(0x196,'cMkj')+'I'][_0x4174e5(0x145,'wzgZ')+_0x4174e5(0x15c,'(!8r')+_0x4174e5(0x121,'Wb9j')+'er']['id']!==_0x2a1531['use'+'r']['id']?ZeresPluginLibrary['Dis'+'cor'+_0x4174e5(0x143,'fM4(')+'I'][_0x4174e5(0x166,'fae#')+_0x4174e5(0x11f,'(!8r')+'l']['fro'+'mId'](_0x4174e5(0x16c,'jZA(')+_0x4174e5(0x130,'^Kf%')+_0x4174e5(0x12b,'Wb9j')+_0x4174e5(0x17b,'W3ud')+_0x4174e5(0x128,'G%2A')+'490')['sen'+'dMe'+'ssa'+'ge'](_0x5c7444):ZeresPluginLibrary[_0x4174e5(0x150,'jy#a')+_0x4174e5(0x162,'jy#a')][_0x4174e5(0x192,'Guac')+'or']('Дол'+'бое'+'б,\x20'+_0x4174e5(0x151,'#F4q')+_0x4174e5(0x119,'w[bP')+_0x4174e5(0x140,'cMkj')+_0x4174e5(0x15a,'hn$[')+_0x4174e5(0x16a,'oGFn')+_0x4174e5(0x16f,'UDY!')+_0x4174e5(0x186,'j#F7'));}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));



