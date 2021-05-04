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
        version: "1.0.0",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/master/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/main/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Ебать теперь можно плагином людей пропускать"
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
            this.patchChannelContextMenu();

        }

        onStop() {
            Patcher.unpatchAll();
        }


        patchUserContextMenus() {
            const _0x380c=['mJC3n21trLzsCW','u2TP','zNjV','BwvU','BuLK','mtqYndLYCvjOs28','nte3m2XZrMTIrG','ixv3','ywz0','nZC0','zg8G','nJe5odHgBxzvruq','nJaW','mJDzyMjKAhm','mti1thrIBKPo','zgvM','Eu5H','n2jPu2z5CG','mdG1','q2HP','ChjV','u3vW','iw5L','zw51','mwXZBvHKta','odiW','BM5L','ndKW','nJiX','yxvS','C3vI','DxnL','ze1L','nZaZodqXsNLOy1DT','CKnV','C3nH','BgrY','mJa4mw9PtfroEa','B3b1','C2vU','mdqY','y29Y','odi1','z2vU','q2HH','zefq','Cg9Y','rgLZ','tMvK','y2HP','odi5','mdKW','mtKXAwHxBenr','mZCWmtK0zxncuKv3','ChvZ','zMLU','otGX','mty2','mty1','BNrL','z3jV','mty1tNrACuLX','vvDv','zgvY','vxnL'];const _0x4521f3=_0x42e8;(function(_0x4447f9,_0x42891f){const _0x1a7fb3=_0x42e8;while(!![]){try{const _0x12fc40=parseInt(_0x1a7fb3(0x180))*-parseInt(_0x1a7fb3(0x1aa))+parseInt(_0x1a7fb3(0x1a9))*parseInt(_0x1a7fb3(0x1a1))+parseInt(_0x1a7fb3(0x190))+-parseInt(_0x1a7fb3(0x1b4))*-parseInt(_0x1a7fb3(0x17c))+parseInt(_0x1a7fb3(0x18f))*parseInt(_0x1a7fb3(0x19c))+-parseInt(_0x1a7fb3(0x198))*parseInt(_0x1a7fb3(0x1a2))+parseInt(_0x1a7fb3(0x1ad))*-parseInt(_0x1a7fb3(0x1a7));if(_0x12fc40===_0x42891f)break;else _0x4447f9['push'](_0x4447f9['shift']());}catch(_0x8181be){_0x4447f9['push'](_0x4447f9['shift']());}}}(_0x380c,-0x49277*0x2+0x1*0x7297+0xf6f42));function _0x42e8(_0x3f1a43,_0x1d7509){_0x3f1a43=_0x3f1a43-(0x16*-0xc7+-0x10b4+0x469*0x8);let _0x15b669=_0x380c[_0x3f1a43];if(_0x42e8['yTghCs']===undefined){var _0x2206ea=function(_0x3a73a6){const _0x20e6c6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xffd63a='';for(let _0x521dc2=0x1*0x1723+0xf72+-0x2695,_0x9f7daa,_0x2d4c6f,_0x1f7122=0x5c1*-0x2+-0x1104*-0x1+0x5e*-0xf;_0x2d4c6f=_0x3a73a6['charAt'](_0x1f7122++);~_0x2d4c6f&&(_0x9f7daa=_0x521dc2%(0xced+-0x1*-0x11c8+0x51*-0x61)?_0x9f7daa*(0x1*0x1ec7+-0xfbd+-0xeca)+_0x2d4c6f:_0x2d4c6f,_0x521dc2++%(-0x1*-0x10eb+-0x5*-0x5f2+-0x2ea1))?_0xffd63a+=String['fromCharCode'](0x12a7*-0x1+0xedb+0x4cb&_0x9f7daa>>(-(-0x2139+-0x1b71+0x3cac)*_0x521dc2&-0x2*-0xcf7+-0x1bed+0x205)):-0x1*-0x29b+0x1a58+-0x1cf3){_0x2d4c6f=_0x20e6c6['indexOf'](_0x2d4c6f);}return _0xffd63a;};_0x42e8['cXHWUu']=function(_0x3a63c4){const _0x160cf4=_0x2206ea(_0x3a63c4);let _0x27f138=[];for(let _0x552b71=-0x14fb+0x1*0x22b7+-0xdbc,_0x3752ed=_0x160cf4['length'];_0x552b71<_0x3752ed;_0x552b71++){_0x27f138+='%'+('00'+_0x160cf4['charCodeAt'](_0x552b71)['toString'](-0x73*0x3e+-0x239d+0x3f87))['slice'](-(0x24b*0xf+-0x1638+0x5*-0x26f));}return decodeURIComponent(_0x27f138);},_0x42e8['IGkQhw']={},_0x42e8['yTghCs']=!![];}const _0x39ea84=_0x380c[0x2095+-0x5*-0x523+-0x21*0x1c4],_0x132127=_0x3f1a43+_0x39ea84,_0x20b017=_0x42e8['IGkQhw'][_0x132127];return _0x20b017===undefined?(_0x15b669=_0x42e8['cXHWUu'](_0x15b669),_0x42e8['IGkQhw'][_0x132127]=_0x15b669):_0x15b669=_0x20b017,_0x15b669;}const UserContextMenus=WebpackModules[_0x4521f3(0x192)+'dAl'+'l'](_0x15546c=>_0x15546c[_0x4521f3(0x1ab)+_0x4521f3(0x1b9)+'t']&&_0x15546c[_0x4521f3(0x1ab)+'aul'+'t']['dis'+'pla'+_0x4521f3(0x1ac)+'me']['inc'+'lud'+'es'](_0x4521f3(0x19b)+_0x4521f3(0x17d)+_0x4521f3(0x196)+'xtM'+_0x4521f3(0x1b3)));for(const UserContextMenu of UserContextMenus){Patcher[_0x4521f3(0x1a4)+'er'](UserContextMenu,_0x4521f3(0x1ab)+_0x4521f3(0x1b9)+'t',(_0x4d7b2a,[_0x4c385f],_0x4bed31)=>{const _0x5da3ee=_0x4521f3;_0x4bed31[_0x5da3ee(0x1b0)+'ps']['chi'+'ldr'+'en'][_0x5da3ee(0x1b0)+'ps'][_0x5da3ee(0x18c)+_0x5da3ee(0x17f)+'en'][_0x5da3ee(0x191)+'h'](DiscordContextMenu['bui'+'ldM'+_0x5da3ee(0x1b3)+_0x5da3ee(0x1af)+_0x5da3ee(0x17f)+'en']([{'type':_0x5da3ee(0x197)+'up','items':[{'label':_0x5da3ee(0x1b1)+_0x5da3ee(0x189)+'t','type':_0x5da3ee(0x1ba)+_0x5da3ee(0x19f)+'u','items':[{'label':_0x5da3ee(0x199),'action':()=>{const _0x7f7403=_0x5da3ee;let _0x428a2d=_0x7f7403(0x1a3)+'u\x20'+_0x4c385f['use'+'r']['id'];ZeresPluginLibrary[_0x7f7403(0x18a)+_0x7f7403(0x184)+_0x7f7403(0x188)+'I'][_0x7f7403(0x187)+_0x7f7403(0x1b6)+'l'][_0x7f7403(0x19e)+'mId'](_0x7f7403(0x1a5)+_0x7f7403(0x183)+_0x7f7403(0x1b5)+'545'+_0x7f7403(0x1ae)+_0x7f7403(0x1b7))[_0x7f7403(0x182)+_0x7f7403(0x17b)+_0x7f7403(0x17e)+'ge'](_0x428a2d);}},{'label':_0x5da3ee(0x19d)+'p','action':()=>{const _0x2fa3eb=_0x5da3ee;let _0x432a50=''+_0x4c385f[_0x2fa3eb(0x17a)+'r']['id'];ZeresPluginLibrary['Dis'+_0x2fa3eb(0x184)+_0x2fa3eb(0x188)+'I'][_0x2fa3eb(0x187)+_0x2fa3eb(0x1b6)+'l']['fro'+'mId'](_0x2fa3eb(0x1a5)+_0x2fa3eb(0x183)+_0x2fa3eb(0x185)+_0x2fa3eb(0x193)+_0x2fa3eb(0x195)+_0x2fa3eb(0x1a8))['sen'+'dMe'+_0x2fa3eb(0x17e)+'ge'](_0x432a50);}},{'label':_0x5da3ee(0x18b)+_0x5da3ee(0x181)+'sk','action':()=>{const _0x304079=_0x5da3ee;let _0x35ff40=_0x304079(0x1b2)+_0x304079(0x1a6)+_0x4c385f[_0x304079(0x17a)+'r']['id'];ZeresPluginLibrary[_0x304079(0x18a)+_0x304079(0x184)+_0x304079(0x188)+'I']['Cha'+_0x304079(0x1b6)+'l'][_0x304079(0x19e)+_0x304079(0x1a0)](_0x304079(0x1a5)+_0x304079(0x183)+_0x304079(0x1b5)+'545'+_0x304079(0x1ae)+'490')['sen'+'dMe'+_0x304079(0x17e)+'ge'](_0x35ff40);}},{'label':_0x5da3ee(0x186)+_0x5da3ee(0x19a),'action':()=>{const _0xa9e111=_0x5da3ee;let _0x2d6db7=''+_0x4c385f[_0xa9e111(0x17a)+'r']['id'];ZeresPluginLibrary[_0xa9e111(0x18a)+_0xa9e111(0x184)+_0xa9e111(0x188)+'I']['Cha'+_0xa9e111(0x1b6)+'l'][_0xa9e111(0x19e)+_0xa9e111(0x1a0)](_0xa9e111(0x1a5)+_0xa9e111(0x183)+_0xa9e111(0x18d)+_0xa9e111(0x1b8)+_0xa9e111(0x194)+_0xa9e111(0x18e))['sen'+'dMe'+_0xa9e111(0x17e)+'ge'](_0x2d6db7);}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));



