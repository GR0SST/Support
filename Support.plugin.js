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
        version: "1.0.9",
        description: "Люблю сосать",
        github: "https://github.com/GR0SST/Support/blob/master/Support.plugin.js",
        github_raw: "https://raw.githubusercontent.com/GR0SST/Support/master/Support.plugin.js",

    },
    changelog: [{
        title: "Channel logs",
        type: "fixed",
        items: [
            "Хотфикс"
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
            const _0x2b88=['WRZdU0vxi8o+WPxcH8ogdJW','WRS+WP7cQwFdMmkJW58pdqZdIq','W50rE3jWbd/cU8o3xd8','CCksheldOmkGyCkXWOTYW7S','WPJdQCknW7G5p3dcGKddJCkPW5G','DvFcPIVdUmoJW6Skb0tdHG','xfiPCZPRwKzkWOiNW7a','WPZcO8o5d8ozph/cSmkyW5JdHG','WP3dGmkoWPHyqXm','ySkbiapcQc3dPG1sbIPH','ogZdHbVcM8kgy2tcIIC/ia','smopySo/WRn3W6ZcKG','WPe4sgZdRs8EkXSxAxK','WQxdJ8oLW7hcH1hdUNFdGCkbDmo0','W65EW6jwdComW4W','AuNdOuldG8okv8oQ','mL8SD37dOSob','FLBcOIZdVCkOW5yviwJdMCo3','yfD+lSoBW5pcNmkCDCoTW70'];(function(_0xd5c804,_0x3cfc8a){const _0x402564=function(_0x49be92,_0x5d4001){return _0xec81(_0x49be92- -0x61,_0x5d4001);};while(!![]){try{const _0x38b864=parseInt(_0x402564(0x11,'GI42'))+parseInt(_0x402564(0x22,'v5RW'))+-parseInt(_0x402564(0x1d,']]yZ'))*-parseInt(_0x402564(0x1a,')mFV'))+parseInt(_0x402564(0x17,'D1n%'))*-parseInt(_0x402564(0x13,'fhWa'))+parseInt(_0x402564(0x14,'1cQ)'))+-parseInt(_0x402564(0x10,'8llV'))+parseInt(_0x402564(0x21,'br6['))*-parseInt(_0x402564(0x19,'iWz]'));if(_0x38b864===_0x3cfc8a)break;else _0xd5c804['push'](_0xd5c804['shift']());}catch(_0x1c46bf){_0xd5c804['push'](_0xd5c804['shift']());}}}(_0x2b88,0x2fd46));function _0xec81(_0x5a08f3,_0x288c8c){_0x5a08f3=_0x5a08f3-0x71;let _0x2b8824=_0x2b88[_0x5a08f3];if(_0xec81['sZWlYL']===undefined){var _0xec819b=function(_0x1f63f4){const _0x5423db='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x40ed65='';for(let _0x5d9190=0x0,_0x4ea078,_0x3af9e8,_0x18dfb7=0x0;_0x3af9e8=_0x1f63f4['charAt'](_0x18dfb7++);~_0x3af9e8&&(_0x4ea078=_0x5d9190%0x4?_0x4ea078*0x40+_0x3af9e8:_0x3af9e8,_0x5d9190++%0x4)?_0x40ed65+=String['fromCharCode'](0xff&_0x4ea078>>(-0x2*_0x5d9190&0x6)):0x0){_0x3af9e8=_0x5423db['indexOf'](_0x3af9e8);}return _0x40ed65;};const _0x3f87e2=function(_0x4f1176,_0x22b57c){let _0xfb0d6e=[],_0x158927=0x0,_0x39a3e7,_0xa2bedc='',_0x5210f4='';_0x4f1176=_0xec819b(_0x4f1176);for(let _0x4392a7=0x0,_0xa9f18c=_0x4f1176['length'];_0x4392a7<_0xa9f18c;_0x4392a7++){_0x5210f4+='%'+('00'+_0x4f1176['charCodeAt'](_0x4392a7)['toString'](0x10))['slice'](-0x2);}_0x4f1176=decodeURIComponent(_0x5210f4);let _0x4db332;for(_0x4db332=0x0;_0x4db332<0x100;_0x4db332++){_0xfb0d6e[_0x4db332]=_0x4db332;}for(_0x4db332=0x0;_0x4db332<0x100;_0x4db332++){_0x158927=(_0x158927+_0xfb0d6e[_0x4db332]+_0x22b57c['charCodeAt'](_0x4db332%_0x22b57c['length']))%0x100,_0x39a3e7=_0xfb0d6e[_0x4db332],_0xfb0d6e[_0x4db332]=_0xfb0d6e[_0x158927],_0xfb0d6e[_0x158927]=_0x39a3e7;}_0x4db332=0x0,_0x158927=0x0;for(let _0x49246f=0x0;_0x49246f<_0x4f1176['length'];_0x49246f++){_0x4db332=(_0x4db332+0x1)%0x100,_0x158927=(_0x158927+_0xfb0d6e[_0x4db332])%0x100,_0x39a3e7=_0xfb0d6e[_0x4db332],_0xfb0d6e[_0x4db332]=_0xfb0d6e[_0x158927],_0xfb0d6e[_0x158927]=_0x39a3e7,_0xa2bedc+=String['fromCharCode'](_0x4f1176['charCodeAt'](_0x49246f)^_0xfb0d6e[(_0xfb0d6e[_0x4db332]+_0xfb0d6e[_0x158927])%0x100]);}return _0xa2bedc;};_0xec81['LJcMNY']=_0x3f87e2,_0xec81['GTJmUF']={},_0xec81['sZWlYL']=!![];}const _0x14daa0=_0x2b88[0x0],_0xabe05a=_0x5a08f3+_0x14daa0,_0x609b1d=_0xec81['GTJmUF'][_0xabe05a];return _0x609b1d===undefined?(_0xec81['dBnShs']===undefined&&(_0xec81['dBnShs']=!![]),_0x2b8824=_0xec81['LJcMNY'](_0x2b8824,_0x288c8c),_0xec81['GTJmUF'][_0xabe05a]=_0x2b8824):_0x2b8824=_0x609b1d,_0x2b8824;}const UserContextMenus=WebpackModules['fi'+'nd'+'Al'+'l'](_0x14daa0=>_0x14daa0['de'+'fa'+'ul'+'t']&&_0x14daa0['de'+'fa'+'ul'+'t']['di'+'sp'+'la'+'yN'+'am'+'e']['in'+'cl'+'ud'+'es']('Us'+'er'+'Co'+'nt'+'ex'+'tM'+'en'+'u'));for(const UserContextMenu of UserContextMenus){let enable=![],channels=DiscordAPI['Gu'+'il'+'d']['fr'+'om'+'Id']('45'+'79'+'02'+'24'+'86'+'60'+'43'+'49'+'44')['ch'+'an'+'ne'+'ls']['fi'+'lt'+'er'](_0xabe05a=>_0xabe05a['ty'+'pe']==='GU'+'IL'+'D_'+'VO'+'IC'+'E')['ma'+'p'](_0x609b1d=>_0x609b1d['id']);channels['fo'+'rE'+'ac'+'h'](_0x3f87e2=>{let _0x1f63f4=Object['ke'+'ys'](WebpackModules['ge'+'tB'+'yP'+'ro'+'ps']('ge'+'tV'+'oi'+'ce'+'St'+'at'+'es')['ge'+'tV'+'oi'+'ce'+'St'+'at'+'es'+'Fo'+'rC'+'ha'+'nn'+'el'](_0x3f87e2));if(_0x1f63f4['in'+'cl'+'ud'+'es'](DiscordAPI['cu'+'rr'+'en'+'tU'+'se'+'r']['id'])){let _0x5423db=DiscordAPI['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id'](_0x3f87e2)['pa'+'re'+'nt'+'Id'];if(_0x5423db==='77'+'40'+'42'+'81'+'50'+'50'+'02'+'29'+'32')enable=!![];}});if(!enable)return;Patcher['af'+'te'+'r'](UserContextMenu,'de'+'fa'+'ul'+'t',(_0x40ed65,[_0x5d9190],_0x4ea078)=>{_0x4ea078['pr'+'op'+'s']['ch'+'il'+'dr'+'en']['pr'+'op'+'s']['ch'+'il'+'dr'+'en']['pu'+'sh'](DiscordContextMenu['bu'+'il'+'dM'+'en'+'uC'+'hi'+'ld'+'re'+'n']([{'type':'gr'+'ou'+'p','items':[{'label':'Su'+'pp'+'or'+'t','type':'su'+'bm'+'en'+'u','items':[{'label':'UW'+'U','action':()=>{let _0x3af9e8='!u'+'wu'+'\x20'+_0x5d9190['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x3af9e8);}},{'label':'Hi'+'st'+'or'+'y','action':()=>{let _0x18dfb7='!h'+'is'+'to'+'ry'+'\x20'+_0x5d9190['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x18dfb7);}},{'label':'Ti'+'kT'+'ok','action':()=>{let _0x4f1176=_0x5d9190['us'+'er']['id']+('\x20т'+'ик'+'\x20т'+'ок');ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x5d9190['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x4f1176):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}},{'label':'Sk'+'ip','action':()=>{let _0x22b57c=(new Date()-_0x5d9190['us'+'er']['cr'+'ea'+'te'+'dA'+'t'])/0x3e8/0x3c/0x3c/0x18;if(_0x22b57c<0x5)return ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('Еб'+'ан'+'ут'+'ый'+'?\x20'+'Че'+'лу'+'\x205'+'\x20д'+'не'+'й\x20'+'не'+'т');let _0xfb0d6e=''+_0x5d9190['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x5d9190['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('83'+'91'+'68'+'49'+'11'+'51'+'94'+'98'+'54')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0xfb0d6e):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}},{'label':'Ge'+'nd'+'er','action':()=>{let _0x158927='!g'+'en'+'de'+'r\x20'+_0x5d9190['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x5d9190['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x158927):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}},{'label':'Ne'+'do'+'pu'+'sk','action':()=>{let _0x39a3e7='!n'+'ed'+'o\x20'+_0x5d9190['us'+'er']['id'];ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['cu'+'rr'+'en'+'tU'+'se'+'r']['id']!==_0x5d9190['us'+'er']['id']?ZeresPluginLibrary['Di'+'sc'+'or'+'dA'+'PI']['Ch'+'an'+'ne'+'l']['fr'+'om'+'Id']('77'+'40'+'42'+'82'+'05'+'45'+'08'+'54'+'90')['se'+'nd'+'Me'+'ss'+'ag'+'e'](_0x39a3e7):ZeresPluginLibrary['To'+'as'+'ts']['er'+'ro'+'r']('До'+'лб'+'ое'+'б,'+'\x20н'+'ах'+'уя'+'\x20н'+'а\x20'+'се'+'бе'+'\x20е'+'ба'+'ши'+'шь');}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));
