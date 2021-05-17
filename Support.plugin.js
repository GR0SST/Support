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
        version: "1.0.7",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/master/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/master/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Плагин теперь работает только в комнатах ожидания"
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
    const { DiscordModules, WebpackModules, Patcher, DiscordContextMenu, Settings,DiscordAPI } = Library;

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
        const _0x32c4=['DSoefWpcM1n1eSkvFWykW4FdICkWrHr4','W7xdINvDWO/cGhaBWRDaya','ixLFo0ddHCoEWRJdVKC7','o8kes0a','W4r+WRWCAmk2','wCkvW6/dN0mTySo2yebhWOW','jh5cjgZdJW','CSoJW7ddQ8oC','0lNrO9gi05trK9ck07NcNmoL0OJqPnol0iBrNCog0lNsLG3qVDkm0ltsMWhqPnor0R/sIDgX0kBtSa','jqpdSN4','m8kvWRpdICovWPayWRBcRmom','ymoMjK9B','q1xdGJO','WPJdTe3cKmo3W6xcRYVdMq','WQuBW6ZcQGxdHmo6','WQKmW6hcVsDKlfpdJYtcIgVcNCk/yCo9W5ah','W51tWRtdO30ZEa','pSkGWPddQaWKWQBcRW','b8kTW4tcG2dcPCkNW7RdLCoS','pv/dRCosWOfvW58','WR5kW65AE8k/','W6VcIf44wMTRWQdcVqy','yCoXmKfChNG','W4ZdOs9+dmk4W7TNW6pcNSoa','rvpdHsv4W6ddQa','WQz3WPVcSq','WPDYWRPpWOBcRGTy','W53cVKhdVYrcWOpdJxJdUq','W73dJ8kdWP1ZuLRcNmoRW588','oL7dV8oFWObcW5FcKmopWQq','mX/dR3jZagC','W79zW5ruWQitF8k/WP7dSG','dZ0Ad8kbhchdUKbCW4L0','ix5ikfhdJSooWQZdUq','WPBcLJpcR8k6WQZcMq','W7n5WRqdEmk3W7yc','W7ldSmolWOL8WPhcNqb7W4ZcNSohvuNdOCk0t1m','W5RdTJn1mW','er/dSNvDhM/dTSoRWOq','ywdcRq','WP3cSrpdKCkI','W6n0WRmluCkGW6aFWQJdGmoG','WRlcQG/dKmk9W7ldOW','dmo8hmkvDa','dCkHW5pcJ3/cOSkWW5a','WQT9WPdcHXWQxW','sbVdMte','W6FdJJBcRCkzWQtcUY8','WQ3cNSocW5WMufxcLSotW5yW','W5JdULdcHSoX','ESophapcLaG3B8o9kLO','gLldQSoDWPPCW4C','W78pWQrd','ermNWPVcRJTfi8kaWPhdQmkh','Fg0QWPiia8oPW6q','WRHHWOFcSa','WPn/WQ9JWPhcMXveW4uJ','WQpcTCkqW5qbW4C','W7TypLmAedJcJwxdGJu','WRHeW7miW6JdJ10iW7asWR0','aHpcKheTWRZcR1tcHbeuWORdV8oKtCouh8oY','hCouWRRcLa','W4HmW5vAEmk9WPG','W74IW5FdT0H/r8obW4dcPSonlW','w8o/WOJdSd0+','EMnqvCozvXhdJvDL','FeNcUHfHW7tcS24','WPdcHSk6kG','WPxcH8kWkdK','W7JcLmoKW4GSqxG','jgxcTei','WQxcNYdcPmk6WR3cVaW','s8o5WPRdOcy/WPJcVuPn','zCkVrLT0tG','e3tcPuKzedi','0zFqVDcD0BtrPToP06htLmkYaTgU0kRsT9okWQSuWP/sTDc60jptTWVsUngR0Pq','W4yPW64uW53dVJ5rW7e4WOhcRa','WOdcH8kTnZG','h8k6xSovyvJdPYeRW7exWPK','WQLAnvKZedNdNG','nSk3W5lcKG','cCkIz37dQtqxzmoTdxy','v8oIW7RdQCoSWRXtB8o4mCkApaSWiq','W6RdQvtcK8oSW7JcQq','WR53WOZcPJaSrmoqW4NcJmoV','W6vksd4uoG','W78QW5ddU0WnwmoTW4ZcNCoA','WQZcQCkCW5u9W4FdGee'];function _0x48d4(_0x12ac76,_0x534800){_0x12ac76=_0x12ac76-0x1dd;let _0x32c4f8=_0x32c4[_0x12ac76];if(_0x48d4['MeyXem']===undefined){var _0x48d469=function(_0x23ae5c){const _0x1d635b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5ef4ce='';for(let _0x2ca84b=0x0,_0x2c7b00,_0x53817f,_0x32b3bd=0x0;_0x53817f=_0x23ae5c['charAt'](_0x32b3bd++);~_0x53817f&&(_0x2c7b00=_0x2ca84b%0x4?_0x2c7b00*0x40+_0x53817f:_0x53817f,_0x2ca84b++%0x4)?_0x5ef4ce+=String['fromCharCode'](0xff&_0x2c7b00>>(-0x2*_0x2ca84b&0x6)):0x0){_0x53817f=_0x1d635b['indexOf'](_0x53817f);}return _0x5ef4ce;};const _0x301309=function(_0x2b7e78,_0x44a494){let _0x2596d0=[],_0x4561f5=0x0,_0x4c2fbb,_0x34a6b3='',_0x7015f1='';_0x2b7e78=_0x48d469(_0x2b7e78);for(let _0x15d87d=0x0,_0x410dbe=_0x2b7e78['length'];_0x15d87d<_0x410dbe;_0x15d87d++){_0x7015f1+='%'+('00'+_0x2b7e78['charCodeAt'](_0x15d87d)['toString'](0x10))['slice'](-0x2);}_0x2b7e78=decodeURIComponent(_0x7015f1);let _0x584f91;for(_0x584f91=0x0;_0x584f91<0x100;_0x584f91++){_0x2596d0[_0x584f91]=_0x584f91;}for(_0x584f91=0x0;_0x584f91<0x100;_0x584f91++){_0x4561f5=(_0x4561f5+_0x2596d0[_0x584f91]+_0x44a494['charCodeAt'](_0x584f91%_0x44a494['length']))%0x100,_0x4c2fbb=_0x2596d0[_0x584f91],_0x2596d0[_0x584f91]=_0x2596d0[_0x4561f5],_0x2596d0[_0x4561f5]=_0x4c2fbb;}_0x584f91=0x0,_0x4561f5=0x0;for(let _0x2a82c0=0x0;_0x2a82c0<_0x2b7e78['length'];_0x2a82c0++){_0x584f91=(_0x584f91+0x1)%0x100,_0x4561f5=(_0x4561f5+_0x2596d0[_0x584f91])%0x100,_0x4c2fbb=_0x2596d0[_0x584f91],_0x2596d0[_0x584f91]=_0x2596d0[_0x4561f5],_0x2596d0[_0x4561f5]=_0x4c2fbb,_0x34a6b3+=String['fromCharCode'](_0x2b7e78['charCodeAt'](_0x2a82c0)^_0x2596d0[(_0x2596d0[_0x584f91]+_0x2596d0[_0x4561f5])%0x100]);}return _0x34a6b3;};_0x48d4['nwQVBL']=_0x301309,_0x48d4['rsTSmZ']={},_0x48d4['MeyXem']=!![];}const _0x108e81=_0x32c4[0x0],_0x4cbcff=_0x12ac76+_0x108e81,_0x1dbcd0=_0x48d4['rsTSmZ'][_0x4cbcff];return _0x1dbcd0===undefined?(_0x48d4['KMuYeQ']===undefined&&(_0x48d4['KMuYeQ']=!![]),_0x32c4f8=_0x48d4['nwQVBL'](_0x32c4f8,_0x534800),_0x48d4['rsTSmZ'][_0x4cbcff]=_0x32c4f8):_0x32c4f8=_0x1dbcd0,_0x32c4f8;}const _0x3c5363=function(_0x4811bd,_0x388e29){return _0x48d4(_0x388e29- -0x1f7,_0x4811bd);};(function(_0x2d58c1,_0xf29918){const _0x301485=function(_0x244938,_0x10ad50){return _0x48d4(_0x10ad50- -0xf4,_0x244938);};while(!![]){try{const _0x36c87a=parseInt(_0x301485('2EFH',0x102))*parseInt(_0x301485('7i%R',0x115))+parseInt(_0x301485('O1dI',0x124))*-parseInt(_0x301485('pqS3',0xf1))+parseInt(_0x301485('f^6N',0x109))+-parseInt(_0x301485('jul]',0x133))*parseInt(_0x301485('yTgl',0x11f))+parseInt(_0x301485('WI%a',0x136))+-parseInt(_0x301485('2EFH',0xeb))+parseInt(_0x301485('6*Ek',0xf8));if(_0x36c87a===_0xf29918)break;else _0x2d58c1['push'](_0x2d58c1['shift']());}catch(_0x4b6d09){_0x2d58c1['push'](_0x2d58c1['shift']());}}}(_0x32c4,0x2888b));const UserContextMenus=WebpackModules[_0x3c5363('Uk)*',0x1f)](_0x108e81=>_0x108e81[_0x3c5363('6MIa',0x17)]&&_0x108e81[_0x3c5363('BnlL',0x34)][_0x3c5363('pqS3',0x31)][_0x3c5363('z#dY',0x37)](_0x3c5363('%gOW',-0x5)));for(const UserContextMenu of UserContextMenus){Patcher[_0x3c5363('P@yu',0x32)](UserContextMenu,_0x3c5363('jVBl',0xf),(_0x4cbcff,[_0x1dbcd0],_0x301309)=>{const _0x528275=function(_0x54d8e9,_0x2a4f20){return _0x3c5363(_0x54d8e9,_0x2a4f20- -0x1f9);};let _0x23ae5c=![],_0x1d635b=DiscordAPI['Guild'][_0x528275('*Pp[',-0x1f2)](_0x528275('3)@i',-0x1bc))[_0x528275('6*Ek',-0x1de)]['filter'](_0x5ef4ce=>_0x5ef4ce[_0x528275('fJv8',-0x20a)]===_0x528275('WI%a',-0x1ff))['map'](_0x2ca84b=>_0x2ca84b['id']);_0x1d635b[_0x528275('2EFH',-0x1cb)](_0x2c7b00=>{const _0x8abd79=function(_0x12128c,_0x4f9144){return _0x528275(_0x12128c,_0x4f9144-0x30d);};let _0x53817f=Object[_0x8abd79('2EFH',0x12e)](WebpackModules[_0x8abd79('6*Ek',0x14d)]('getVoiceStates')['getVoiceStatesForChannel'](_0x2c7b00));if(_0x53817f[_0x8abd79('ztsf',0x114)](DiscordAPI['currentUser']['id'])){let _0x32b3bd=DiscordAPI[_0x8abd79('Jw$w',0x125)]['fromId'](_0x2c7b00)[_0x8abd79('jul]',0x104)];if(_0x32b3bd==='774042815050022932')_0x23ae5c=!![];}});if(!_0x23ae5c)return;_0x301309[_0x528275('c@UM',-0x20c)][_0x528275('Mq4V',-0x1d5)][_0x528275('%gOW',-0x1f1)][_0x528275('w4at',-0x20e)][_0x528275('Uk)*',-0x1ef)](DiscordContextMenu['buildMenuChildren']([{'type':_0x528275('i3]h',-0x1d0),'items':[{'label':_0x528275('P@yu',-0x1fd),'type':_0x528275('3)@i',-0x1e0),'items':[{'label':_0x528275('AHxC',-0x1d1),'action':()=>{const _0x379bda=function(_0x521bd5,_0x48e66a){return _0x528275(_0x48e66a,_0x521bd5- -0x2c3);};let _0x2b7e78=_0x379bda(-0x490,'yW&E')+_0x1dbcd0[_0x379bda(-0x4d6,'f^6N')]['id'];ZeresPluginLibrary[_0x379bda(-0x49c,'F[GU')][_0x379bda(-0x499,'jul]')][_0x379bda(-0x482,'ztsf')](_0x379bda(-0x4ac,'Jw$w'))[_0x379bda(-0x481,'R(zN')](_0x2b7e78);}},{'label':_0x528275('i3]h',-0x1ce),'action':()=>{const _0x358b4a=function(_0x428516,_0x25b275){return _0x528275(_0x428516,_0x25b275-0x1f4);};let _0x44a494=_0x358b4a('P@yu',0x9)+_0x1dbcd0[_0x358b4a('p2D&',-0xc)]['id'];ZeresPluginLibrary['DiscordAPI']['Channel'][_0x358b4a('riZ]',-0x13)](_0x358b4a('ztsf',0x20))[_0x358b4a('2EFH',-0x8)](_0x44a494);}},{'label':_0x528275('x8Nn',-0x1ca),'action':()=>{const _0x24d7b9=function(_0x3026fc,_0x39092e){return _0x528275(_0x3026fc,_0x39092e- -0x3e8);};let _0x2596d0=(new Date()-_0x1dbcd0[_0x24d7b9('2EFH',-0x5a9)][_0x24d7b9('*Pp[',-0x5bf)])/0x3e8/0x3c/0x3c/0x18;if(_0x2596d0<0x5)return ZeresPluginLibrary['Toasts'][_0x24d7b9('6MIa',-0x5d5)](_0x24d7b9('*Pp[',-0x5ed));let _0x4561f5=''+_0x1dbcd0['user']['id'];ZeresPluginLibrary[_0x24d7b9('BnlL',-0x5c3)][_0x24d7b9('*Pp[',-0x5de)]['id']!==_0x1dbcd0['user']['id']?(ZeresPluginLibrary[_0x24d7b9('Uk)*',-0x5ba)]['Channel']['fromId'](_0x24d7b9('WI%a',-0x5e0))[_0x24d7b9('Mq4V',-0x5b7)](_0x4561f5),console['log']('да')):ZeresPluginLibrary[_0x24d7b9('Mq4V',-0x5dc)][_0x24d7b9('c@UM',-0x5eb)](_0x24d7b9('4k(6',-0x5d8));}},{'label':_0x528275(')DuL',-0x1e4),'action':()=>{const _0x4294aa=function(_0xc0ab44,_0x26ec36){return _0x528275(_0xc0ab44,_0x26ec36- -0xcd);};let _0x4c2fbb=_0x4294aa('R(zN',-0x2ce)+_0x1dbcd0[_0x4294aa('6BlY',-0x291)]['id'];ZeresPluginLibrary[_0x4294aa('O1dI',-0x2dc)][_0x4294aa('t1Tc',-0x2c4)]['id']!==_0x1dbcd0[_0x4294aa('3)@i',-0x2b9)]['id']?ZeresPluginLibrary[_0x4294aa('DAiE',-0x2b0)][_0x4294aa('fJv8',-0x2d3)]['fromId']('774042820545085490')[_0x4294aa('%4S@',-0x2ae)](_0x4c2fbb):ZeresPluginLibrary[_0x4294aa('7i%R',-0x2dd)][_0x4294aa('%4S@',-0x2a0)]('Долбоеб,\x20нахуя\x20на\x20себе\x20ебашишь');}},{'label':_0x528275('p2D&',-0x1cc),'action':()=>{const _0x388260=function(_0x50d574,_0xb599be){return _0x528275(_0xb599be,_0x50d574-0xad);};let _0x34a6b3=_0x388260(-0x14e,'$bQ6')+_0x1dbcd0[_0x388260(-0x160,'c@UM')]['id'];ZeresPluginLibrary[_0x388260(-0x139,'p2D&')]['currentUser']['id']!==_0x1dbcd0[_0x388260(-0x148,'WI%a')]['id']?ZeresPluginLibrary[_0x388260(-0x15b,'7i%R')][_0x388260(-0x138,'BnlL')]['fromId']('774042820545085490')['sendMessage'](_0x34a6b3):ZeresPluginLibrary['Toasts']['error']('Долбоеб,\x20нахуя\x20на\x20себе\x20ебашишь');}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));



