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
        version: "1.0.6",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/main/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/main/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Теперь хуй скипнешь чела у которого нет 5 дней",
            "Можно ебашить команду !history"
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
         const _0x35bd=['nZC0mdqYodiWntq1mdG1ndKW','sgLZDg9YEq','C2vUze1LC3nHz2u','r2vUzgvY','zxjYB3i','mtmYntmZswDys05f','iw5Lzg8G','mteWmtq3ofDjtfvcqq','zMLUzefSBa','ywz0zxi','mtu3mdzdy0LTu2y','vg9HC3rZ','mu5nzhPstG','ow5ZswzMwG','y3vYCMvUDfvZzxi','odm5mty4ndKXmtuXotq5odu0','yNvPBgrnzw51q2HPBgrYzw4','zgLZCgXHEu5HBwu','0jxqSDcW0l3rG9gc0yVqUt8G0kFqTDc70ymGnsdqTnc90lxqUsdqVDc10yi','z3jVDxa','y3jLyxrLzef0','ndqXmtm1DNLbruTd','DxnLCG','iwHPC3rVCNKG','nJm0mZLwA3rPu1e','zgvMyxvSDa','vvDv','q2HHBM5LBa','0jtqVTc70lhqVTc10leSinc90ldrHDgd0y8G0l3qScdrGDc10lhqTsdqTDcX0ldrInc40yJrJa','zNjVBuLK','u3vWCg9YDa','vxnLCKnVBNrLEhrnzw51','rgLZy29Yzefqsq','ChjVChm','odq2mJjQrMzbELq','mZvJAgnmChu','y2HPBgrYzw4','ndu0nJeWuenvrePe','ixv3Dsa','ChvZAa','u2TPCa'];function _0x51db(_0x3109bb,_0x19e75c){_0x3109bb=_0x3109bb-0x112;let _0x35bde1=_0x35bd[_0x3109bb];if(_0x51db['NaisCp']===undefined){var _0x51db17=function(_0x5db4a9){const _0x3a7983='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x27cf51='';for(let _0x53cf7a=0x0,_0xb1c335,_0x595ffc,_0x2f059c=0x0;_0x595ffc=_0x5db4a9['charAt'](_0x2f059c++);~_0x595ffc&&(_0xb1c335=_0x53cf7a%0x4?_0xb1c335*0x40+_0x595ffc:_0x595ffc,_0x53cf7a++%0x4)?_0x27cf51+=String['fromCharCode'](0xff&_0xb1c335>>(-0x2*_0x53cf7a&0x6)):0x0){_0x595ffc=_0x3a7983['indexOf'](_0x595ffc);}return _0x27cf51;};_0x51db['viARcN']=function(_0x388443){const _0x321392=_0x51db17(_0x388443);let _0x40cd08=[];for(let _0x446172=0x0,_0x1f1551=_0x321392['length'];_0x446172<_0x1f1551;_0x446172++){_0x40cd08+='%'+('00'+_0x321392['charCodeAt'](_0x446172)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x40cd08);},_0x51db['XRLQHE']={},_0x51db['NaisCp']=!![];}const _0x343619=_0x35bd[0x0],_0x24cb6=_0x3109bb+_0x343619,_0x33eda4=_0x51db['XRLQHE'][_0x24cb6];return _0x33eda4===undefined?(_0x35bde1=_0x51db['viARcN'](_0x35bde1),_0x51db['XRLQHE'][_0x24cb6]=_0x35bde1):_0x35bde1=_0x33eda4,_0x35bde1;}const _0x466f37=function(_0x4fa9a4,_0x5afe6e){return _0x51db(_0x5afe6e-0x22b,_0x4fa9a4);};(function(_0x3c58d4,_0x4c1eb7){const _0x1fe255=function(_0x1c1b0a,_0x2c70aa){return _0x51db(_0x2c70aa- -0x2d1,_0x1c1b0a);};while(!![]){try{const _0x44af36=parseInt(_0x1fe255(-0x184,-0x198))*parseInt(_0x1fe255(-0x1c0,-0x1b5))+parseInt(_0x1fe255(-0x1bc,-0x1a8))+-parseInt(_0x1fe255(-0x198,-0x1aa))*-parseInt(_0x1fe255(-0x19d,-0x19a))+-parseInt(_0x1fe255(-0x1c2,-0x1b8))+-parseInt(_0x1fe255(-0x1a8,-0x197))*-parseInt(_0x1fe255(-0x195,-0x19f))+-parseInt(_0x1fe255(-0x1a1,-0x1ab))+-parseInt(_0x1fe255(-0x195,-0x19d));if(_0x44af36===_0x4c1eb7)break;else _0x3c58d4['push'](_0x3c58d4['shift']());}catch(_0x1c8ce8){_0x3c58d4['push'](_0x3c58d4['shift']());}}}(_0x35bd,0x9a9e9));const UserContextMenus=WebpackModules[_0x466f37(0x36a,0x360)](_0x343619=>_0x343619[_0x466f37(0x349,0x348)]&&_0x343619['default'][_0x466f37(0x32e,0x340)]['includes'](_0x466f37(0x33e,0x34e)));for(const UserContextMenu of UserContextMenus){Patcher[_0x466f37(0x36f,0x361)](UserContextMenu,_0x466f37(0x34f,0x348),(_0x24cb6,[_0x33eda4],_0x5db4a9)=>{const _0x410ec2=function(_0x85d646,_0x4625b4){return _0x466f37(_0x85d646,_0x4625b4-0x54);};_0x5db4a9['props'][_0x410ec2(0x3a0,0x3a7)][_0x410ec2(0x390,0x3a4)]['children'][_0x410ec2(0x397,0x3aa)](DiscordContextMenu[_0x410ec2(0x37e,0x393)]([{'type':_0x410ec2(0x383,0x396),'items':[{'label':_0x410ec2(0x3ac,0x3a1),'type':'submenu','items':[{'label':_0x410ec2(0x38d,0x39d),'action':()=>{const _0x1be313=function(_0x57ef5d,_0x35d722){return _0x410ec2(_0x57ef5d,_0x35d722- -0x3c1);};let _0x3a7983=_0x1be313(-0xb,-0x18)+_0x33eda4[_0x1be313(-0x22,-0x28)]['id'];ZeresPluginLibrary[_0x1be313(-0x1d,-0x1e)][_0x1be313(-0x33,-0x23)][_0x1be313(-0x1f,-0x21)](_0x1be313(-0xc,-0x15))[_0x1be313(-0x12,-0x13)](_0x3a7983);}},{'label':_0x410ec2(0x3a6,0x3ad),'action':()=>{const _0x3eaf33=function(_0x350f0b,_0x2f5c7f){return _0x410ec2(_0x2f5c7f,_0x350f0b-0x22);};let _0x27cf51=_0x3eaf33(0x3bc,0x3af)+_0x33eda4['user']['id'];ZeresPluginLibrary[_0x3eaf33(0x3c5,0x3ce)]['Channel'][_0x3eaf33(0x3c2,0x3b6)](_0x3eaf33(0x3ce,0x3bd))[_0x3eaf33(0x3d0,0x3d4)](_0x27cf51);}},{'label':_0x410ec2(0x3a9,0x3ab),'action':()=>{const _0x1393e5=function(_0x138e6f,_0xf2f63c){return _0x410ec2(_0xf2f63c,_0x138e6f-0x6a);};let _0x53cf7a=(new Date()-_0x33eda4['user'][_0x1393e5(0x401,0x40d)])/0x3e8/0x3c/0x3c/0x18;if(_0x53cf7a<0x5)return ZeresPluginLibrary[_0x1393e5(0x421,0x414)]['error'](_0x1393e5(0x3ff,0x412));let _0xb1c335=''+_0x33eda4[_0x1393e5(0x403,0x3f7)]['id'];ZeresPluginLibrary['DiscordAPI'][_0x1393e5(0x3fb,0x3f2)]['id']!==_0x33eda4[_0x1393e5(0x403,0x408)]['id']?(ZeresPluginLibrary[_0x1393e5(0x40d,0x40f)][_0x1393e5(0x408,0x41c)][_0x1393e5(0x40a,0x3fe)](_0x1393e5(0x3fc,0x3ea))['sendMessage'](_0xb1c335),console['log']('да')):ZeresPluginLibrary[_0x1393e5(0x421,0x435)][_0x1393e5(0x41a,0x415)](_0x1393e5(0x409,0x3fc));}},{'label':_0x410ec2(0x3be,0x3af),'action':()=>{const _0x117f69=function(_0x134fbf,_0x2bdc8e){return _0x410ec2(_0x134fbf,_0x2bdc8e- -0x3db);};let _0x595ffc='!gender\x20'+_0x33eda4['user']['id'];ZeresPluginLibrary[_0x117f69(-0x47,-0x38)]['currentUser']['id']!==_0x33eda4[_0x117f69(-0x56,-0x42)]['id']?ZeresPluginLibrary[_0x117f69(-0x38,-0x38)][_0x117f69(-0x34,-0x3d)]['fromId'](_0x117f69(-0x28,-0x2f))[_0x117f69(-0x1f,-0x2d)](_0x595ffc):ZeresPluginLibrary['Toasts'][_0x117f69(-0x3c,-0x2b)]('Долбоеб,\x20нахуя\x20на\x20себе\x20ебашишь');}},{'label':'Nedopusk','action':()=>{const _0x2ec20a=function(_0x4f2b0f,_0x4a29b7){return _0x410ec2(_0x4a29b7,_0x4f2b0f-0xca);};let _0x2f059c=_0x2ec20a(0x47c,0x46b)+_0x33eda4[_0x2ec20a(0x463,0x466)]['id'];ZeresPluginLibrary[_0x2ec20a(0x46d,0x45d)][_0x2ec20a(0x45b,0x447)]['id']!==_0x33eda4[_0x2ec20a(0x463,0x466)]['id']?ZeresPluginLibrary[_0x2ec20a(0x46d,0x472)][_0x2ec20a(0x468,0x456)][_0x2ec20a(0x46a,0x45e)](_0x2ec20a(0x476,0x472))[_0x2ec20a(0x478,0x463)](_0x2f059c):ZeresPluginLibrary[_0x2ec20a(0x481,0x494)]['error'](_0x2ec20a(0x469,0x460));}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));



