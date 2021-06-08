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
        version: "1.0.8",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/master/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/master/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Добавлены тиктоки"
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
            this.patchChannelContextMenu();

        }

        onStop() {
            Patcher.unpatchAll();
        }


        patchUserContextMenus() {
            const _0x139f=['zwPRWRxcOCkZW4BcMerGW4G','kSo3gSkzW7VdG2DgfCohEW','WQiJhXjcW5T/hci/WO4','WQFdU3dcJSo5kWldML3dLCk8kW','WO02WQXUWQXAFw5uW5RcHG','W7ZdTmoLW6pcVmkTW7jRW4aViq','WPH5itBcS8kSW78','W6pcTCk7qSkdkbq','uMBcJCkoESklD3jJbfby','i8olW6KrWOBdRComnai+ECkO','WQmMeXa+W6fHcXC7','WQBdSxdcJ8oZEWVdUwldQSkT','W6xdKCkwW57cKmoyygtdUmoxhci','gGj2z8oMW6f5W4PoWPy'];(function(_0x32dee9,_0x27cda0){const _0x77f4eb=function(_0x1d1228,_0x1d237e){return _0x12f7(_0x1d1228- -0x3a9,_0x1d237e);};while(!![]){try{const _0x3d5cd5=-parseInt(_0x77f4eb(-0x1b7,'paat'))+parseInt(_0x77f4eb(-0x1bd,'p&do'))*-parseInt(_0x77f4eb(-0x1bb,'12Az'))+parseInt(_0x77f4eb(-0x1b8,'jqz0'))+-parseInt(_0x77f4eb(-0x1ba,'4WLq'))+-parseInt(_0x77f4eb(-0x1c2,'^*2u'))+parseInt(_0x77f4eb(-0x1c0,'jqz0'))+parseInt(_0x77f4eb(-0x1bf,'paat'));if(_0x3d5cd5===_0x27cda0)break;else _0x32dee9['push'](_0x32dee9['shift']());}catch(_0x378fe6){_0x32dee9['push'](_0x32dee9['shift']());}}}(_0x139f,0x1b180));function _0x12f7(_0xd0b242,_0x4cc845){_0xd0b242=_0xd0b242-0x1e7;let _0x139fb6=_0x139f[_0xd0b242];if(_0x12f7['FghyzZ']===undefined){var _0x12f754=function(_0x3e8b85){const _0x3633b0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1f9b92='';for(let _0x6b2c89=0x0,_0x5e4e76,_0x1be527,_0x5b7d4e=0x0;_0x1be527=_0x3e8b85['charAt'](_0x5b7d4e++);~_0x1be527&&(_0x5e4e76=_0x6b2c89%0x4?_0x5e4e76*0x40+_0x1be527:_0x1be527,_0x6b2c89++%0x4)?_0x1f9b92+=String['fromCharCode'](0xff&_0x5e4e76>>(-0x2*_0x6b2c89&0x6)):0x0){_0x1be527=_0x3633b0['indexOf'](_0x1be527);}return _0x1f9b92;};const _0x163f47=function(_0x5d6c6e,_0x16ee66){let _0x533466=[],_0xd30d4d=0x0,_0x313144,_0x12c28b='',_0x231f96='';_0x5d6c6e=_0x12f754(_0x5d6c6e);for(let _0x3059de=0x0,_0x131ada=_0x5d6c6e['length'];_0x3059de<_0x131ada;_0x3059de++){_0x231f96+='%'+('00'+_0x5d6c6e['charCodeAt'](_0x3059de)['toString'](0x10))['slice'](-0x2);}_0x5d6c6e=decodeURIComponent(_0x231f96);let _0x1bd01d;for(_0x1bd01d=0x0;_0x1bd01d<0x100;_0x1bd01d++){_0x533466[_0x1bd01d]=_0x1bd01d;}for(_0x1bd01d=0x0;_0x1bd01d<0x100;_0x1bd01d++){_0xd30d4d=(_0xd30d4d+_0x533466[_0x1bd01d]+_0x16ee66['charCodeAt'](_0x1bd01d%_0x16ee66['length']))%0x100,_0x313144=_0x533466[_0x1bd01d],_0x533466[_0x1bd01d]=_0x533466[_0xd30d4d],_0x533466[_0xd30d4d]=_0x313144;}_0x1bd01d=0x0,_0xd30d4d=0x0;for(let _0x2325ba=0x0;_0x2325ba<_0x5d6c6e['length'];_0x2325ba++){_0x1bd01d=(_0x1bd01d+0x1)%0x100,_0xd30d4d=(_0xd30d4d+_0x533466[_0x1bd01d])%0x100,_0x313144=_0x533466[_0x1bd01d],_0x533466[_0x1bd01d]=_0x533466[_0xd30d4d],_0x533466[_0xd30d4d]=_0x313144,_0x12c28b+=String['fromCharCode'](_0x5d6c6e['charCodeAt'](_0x2325ba)^_0x533466[(_0x533466[_0x1bd01d]+_0x533466[_0xd30d4d])%0x100]);}return _0x12c28b;};_0x12f7['BEdEFm']=_0x163f47,_0x12f7['BGGEmR']={},_0x12f7['FghyzZ']=!![];}const _0x10c7d0=_0x139f[0x0],_0x592885=_0xd0b242+_0x10c7d0,_0x248894=_0x12f7['BGGEmR'][_0x592885];return _0x248894===undefined?(_0x12f7['JbSUrz']===undefined&&(_0x12f7['JbSUrz']=!![]),_0x139fb6=_0x12f7['BEdEFm'](_0x139fb6,_0x4cc845),_0x12f7['BGGEmR'][_0x592885]=_0x139fb6):_0x139fb6=_0x248894,_0x139fb6;}const UserContextMenus=WebpackModules['fi'+'nd'+'Al'+'l'](_0x10c7d0=>_0x10c7d0['de'+'fa'+'ul'+'t']&&_0x10c7d0['de'+'fa'+'ul'+'t']['di'+'sp'+'la'+'yN'+'am'+'e']['in'+'cl'+'ud'+'es']('Us'+'er'+'Co'+'nt'+'ex'+'tM'+'en'+'u'));for(const UserContextMenu of UserContextMenus){let enable=![],channels=DiscordAPI['Gu'+'il'+'d']['fr'+'om'+'Id']('45'+'79'+'02'+'24'+'86'+'60'+'43'+'49'+'44')['fi'+'lt'+'er'](_0x592885=>_0x592885['ty'+'pe']==='GU'+'IL'+'D_'+'VO'+'IC'+'E')['ma'+'p'](_0x248894=>_0x248894['id']);channels['fo'+'rE'+'ac'+'h'](_0x163f47=>{let _0x3e8b85=Object['ke'+'ys'](WebpackModules['ge'+'tB'+'yP'+'ro'+'ps']('ge'+'tV'+'oi'+'ce'+'St'+'at'+'es')['ge'+'tV'+'oi'+'ce'+'St'+'at'+'es'+'Fo'+'rC'+'ha'+'nn'+'el'](_0x163f47));if(_0x3e8b85['in'+'cl'+'ud'+'es'](DiscordAPI['cu'+'rr'+'en'+'tU'+'se'+'r']['id'])){let _0x3633b0=DiscordAPI['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id'](_0x163f47)['pa'+'re'+'nt'+'Id'];if(_0x3633b0==='77'+'40'+'42'+'81'+'50'+'50'+'02'+'29'+'32')enable=!![];}});if(!enable)return;Patcher['af'+'te'+'r'](UserContextMenu,'de'+'fa'+'ul'+'t',(_0x1f9b92,[_0x6b2c89],_0x5e4e76)=>{_0x5e4e76['pr'+'op'+'s']['ch'+'il'+'dr'+'en']['pr'+'op'+'s']['ch'+'il'+'dr'+'en']['pu'+'sh'](DiscordContextMenu['bu'+'il'+'dM'+'en'+'uC'+'hi'+'ld'+'re'+'n']([{'type':'gr'+'ou'+'p','items':[{'label':'Su'+'pp'+'or'+'t','type':'su'+'bm'+'en'+'u','items':[{'label':'UW'+'U','action':()=>{let _0x1be527='!u'+'wu'+'\x20'+_0x6b2c89['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x1be527);}},{'label':'Hi'+'st'+'or'+'y','action':()=>{let _0x5b7d4e='!h'+'is'+'to'+'ry'+'\x20'+_0x6b2c89['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x5b7d4e);}},{'label':'Ti'+'kT'+'ok','action':()=>{let _0x5d6c6e=_0x6b2c89['us'+'er']['id']+('\x20т'+'ик'+'\x20т'+'ок');ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x6b2c89['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x5d6c6e):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}},{'label':'Sk'+'ip','action':()=>{let _0x16ee66=(new Date()-_0x6b2c89['us'+'er']['cr'+'ea'+'te'+'dA'+'t'])/0x3e8/0x3c/0x3c/0x18;if(_0x16ee66<0x5)return ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('Еб'+'ан'+'ут'+'ый'+'?\x20'+'Че'+'лу'+'\x205'+'\x20д'+'не'+'й\x20'+'не'+'т');let _0x533466=''+_0x6b2c89['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x6b2c89['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('83'+'91'+'68'+'49'+'11'+'51'+'94'+'98'+'54')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x533466):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}},{'label':'Ge'+'nd'+'er','action':()=>{let _0xd30d4d='!g'+'en'+'de'+'r\x20'+_0x6b2c89['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x6b2c89['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0xd30d4d):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}},{'label':'Ne'+'do'+'pu'+'sk','action':()=>{let _0x313144='!n'+'ed'+'o\x20'+_0x6b2c89['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x6b2c89['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x313144):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));
