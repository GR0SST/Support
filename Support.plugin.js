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
        version: "1.0.4",
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
           const _0x23b0=['WR95W4O','WRBcTsu','W7CbkG','wSoXnW','W7/dR8kl','W6urka','rKbb','0iNsR9cx','v3BdGq','y8kBrW','cmkQwa','WQxcKCoB','yKXp','xSoTW54','jx/dKW','057tKLa','W47dKSoG','vCoXgCoHFCk3BKy7uvW','bCofnCk3b2dcHG','WQqoWOO','WPiYWONdLeJdRCouWR7cUgBcJW','W7ldMSk8','W6ZdIMG','WQldK1C','WQzaDa','W6JcJHP5xSkAW4m','DXGP','W4iBjW','WPSYW4O','0iVsKTk7','WPWcW4a','W6SYW7S/WRRdSmo4WPe','cCkRdq','dCo+W5q','i8kSdW','fSoevG','0P3qS8ky','ofylb8kTid3dIW','07xtQno6','W5ldRri','ECovuSkowSkOFNe8W5uuAG','EfddKb1EWQNdTq','CJ3cIq','WOKjWPO','amoevG','07FsSDgq','b2/dKW','0i7qVmoK','wHPt','uCoTia','05JrJ9kq','0jCP05S','WRW5DG','WQafWOC','0A7rO9kP','WPDKEa','WQeaW6m','qSo5W5O','uLju','dJ7dLa','WQSsWOy','e8ofxa','qwBcNa','W75CBG','WPu3WO0','W6G7WO1jW7hcH8ofWRJdVmkhvZi','0ONtJ9k4','smoaW5O','0iNsR3i','bmkRya','0OlrITg9','W7PxW50','WQVcT8on','kalcLW','ohddSa','WRbUW7G','icdcJq','W4rcW6G','WQS7y8kMW4v3W4DtWQLthG','W5HdWPddP8oPwHuMuK1whq','mhT4WO/cV8o6la','W6rQW4S','WP0KW5y','W6X5nq','0QRqVSkf','WQ9lW5i','kCkbeW','aW/cMa','r8orxa','WRRdOMK','mYhcLq','dej4','fCk3cW','W7xdTmkE','n8ogaa','p1T+CCoUvZ7dPfBcNSkxWOO','rCk4W4a','WO4iWOG','W49ZW40','BX0N','0jJrMDg6','W7uBna','0BdqKTcx','WQKfWO8','FL7dIW','WQ94W50','oSkccq','CxG4','iSoFsG','hefb','gv0a','0PxqPnkN','cSkuWRS','nb0eW7RdImk1d8oagLxcG8ou','WR5UW54','m1ZdVq','sbuwW7GnhHf3i8o1W68Q','d8oLW5O','07FtNngl','W7TBAa','W6XtW7G','0ABcG9gh','WPK/ya','bSkUy8oFvu7cK8kSW6zZvW','gCoKWOC','WQWbW7O','0zjU04e','W7i5iW','WR4fWOC','WRCCW7q','cufb','W5VcNSo/','BLpdJa','WRGhW7m','lmkMnW','WQxdO0O','Ah/dGa','0kZtSDcC','nZBcIG','cSoIW5SGfmkEzx3cKxClW5m','06uGoq','0idsMTkI','lwhdQG','W7GAWOS','oN/dLq','W6PACG','W5iDnq','0Q3qU9cs','WP3cLmk6','amoGW54','cYRcHG','WQ5bCSk9jSkRpSoGzIdcSW','WRuJWQW','fd3cLq','WQ0yW5y'];const _0x1429d3=_0x366b;function _0x366b(_0x35ab6f,_0x346dfa){_0x35ab6f=_0x35ab6f-(0x1610+0xa*-0x2ba+0x634);let _0x3e56d9=_0x23b0[_0x35ab6f];if(_0x366b['yDzzBj']===undefined){var _0x14f941=function(_0x26ab4b){const _0x1cfa53='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2efd96='';for(let _0x4bcb46=-0xe2c*0x1+-0x26cd+-0x1*-0x34f9,_0x299198,_0x1c9baf,_0x377afe=0x76a+-0xde2+-0x8*-0xcf;_0x1c9baf=_0x26ab4b['charAt'](_0x377afe++);~_0x1c9baf&&(_0x299198=_0x4bcb46%(0x21dd+-0x8d1+0x642*-0x4)?_0x299198*(0x1735+-0xcb9*0x3+0x16*0xb1)+_0x1c9baf:_0x1c9baf,_0x4bcb46++%(0x1195+0xca*0xb+-0x1a3f))?_0x2efd96+=String['fromCharCode'](0x206*-0xc+-0x971*0x3+0x359a&_0x299198>>(-(-0x203*0x7+-0x58f*0x1+0x13a6)*_0x4bcb46&0x1d50+-0x1d53*0x1+0x9)):-0x99*-0xa+-0x11bc*0x1+0xbc2*0x1){_0x1c9baf=_0x1cfa53['indexOf'](_0x1c9baf);}return _0x2efd96;};const _0x4dc3b3=function(_0x466d61,_0xa13f8c){let _0x259fee=[],_0x344bf1=-0xda0+-0x1*0x18b9+-0x1*-0x2659,_0x5ec021,_0x326327='',_0xa62bac='';_0x466d61=_0x14f941(_0x466d61);for(let _0x49f5bf=0x966+0x1d*0x7+0xa31*-0x1,_0x22995c=_0x466d61['length'];_0x49f5bf<_0x22995c;_0x49f5bf++){_0xa62bac+='%'+('00'+_0x466d61['charCodeAt'](_0x49f5bf)['toString'](-0x8*-0x31+-0x2271+0x20f9))['slice'](-(0x2078*0x1+0x6f*-0x34+-0x9ea));}_0x466d61=decodeURIComponent(_0xa62bac);let _0x178b81;for(_0x178b81=0x2c0+-0x21f2+0x1f32;_0x178b81<-0xabc+-0x2287+0x1*0x2e43;_0x178b81++){_0x259fee[_0x178b81]=_0x178b81;}for(_0x178b81=-0x1434+-0x829*-0x3+-0x447;_0x178b81<-0x1cba+0x2*-0x10fc+0x1*0x3fb2;_0x178b81++){_0x344bf1=(_0x344bf1+_0x259fee[_0x178b81]+_0xa13f8c['charCodeAt'](_0x178b81%_0xa13f8c['length']))%(0x33*-0xc1+0x2b*0x8e+0xf99),_0x5ec021=_0x259fee[_0x178b81],_0x259fee[_0x178b81]=_0x259fee[_0x344bf1],_0x259fee[_0x344bf1]=_0x5ec021;}_0x178b81=0x44a*-0x4+0xc2c+0x4fc,_0x344bf1=0x74f+-0x4a*-0x5f+-0x183*0x17;for(let _0x284370=-0x239d*0x1+0x9da+-0x19c3*-0x1;_0x284370<_0x466d61['length'];_0x284370++){_0x178b81=(_0x178b81+(0x1e69+0x67a*0x1+-0x24e2))%(0x7*0x3e1+-0x118c+-0x89b),_0x344bf1=(_0x344bf1+_0x259fee[_0x178b81])%(-0x55*-0x39+-0xaee*0x2+-0x35*-0x13),_0x5ec021=_0x259fee[_0x178b81],_0x259fee[_0x178b81]=_0x259fee[_0x344bf1],_0x259fee[_0x344bf1]=_0x5ec021,_0x326327+=String['fromCharCode'](_0x466d61['charCodeAt'](_0x284370)^_0x259fee[(_0x259fee[_0x178b81]+_0x259fee[_0x344bf1])%(-0x1a1*-0x9+-0x4f*0x11+-0x86a)]);}return _0x326327;};_0x366b['sUztJb']=_0x4dc3b3,_0x366b['DdjpZj']={},_0x366b['yDzzBj']=!![];}const _0x553b6e=_0x23b0[0x1a10+0x1*0x2103+-0x3b13],_0x426474=_0x35ab6f+_0x553b6e,_0x35ae0d=_0x366b['DdjpZj'][_0x426474];return _0x35ae0d===undefined?(_0x366b['rhCVek']===undefined&&(_0x366b['rhCVek']=!![]),_0x3e56d9=_0x366b['sUztJb'](_0x3e56d9,_0x346dfa),_0x366b['DdjpZj'][_0x426474]=_0x3e56d9):_0x3e56d9=_0x35ae0d,_0x3e56d9;}(function(_0x21fa0c,_0x5e9e4a){const _0x16d439=_0x366b;while(!![]){try{const _0x34f227=-parseInt(_0x16d439(0x199,'AZ6i'))*-parseInt(_0x16d439(0x15a,'SIwn'))+-parseInt(_0x16d439(0x122,'mkTH'))+-parseInt(_0x16d439(0x10d,'yybp'))+parseInt(_0x16d439(0x129,'5ZSQ'))*-parseInt(_0x16d439(0x15b,'5ZSQ'))+-parseInt(_0x16d439(0x171,'4oD8'))*-parseInt(_0x16d439(0x162,'Qu21'))+-parseInt(_0x16d439(0x18a,'0Ox*'))+-parseInt(_0x16d439(0x197,'q3aN'))*-parseInt(_0x16d439(0x16e,'yybp'));if(_0x34f227===_0x5e9e4a)break;else _0x21fa0c['push'](_0x21fa0c['shift']());}catch(_0x17082f){_0x21fa0c['push'](_0x21fa0c['shift']());}}}(_0x23b0,-0x8fdc0+-0x282c8+0x125e81));const UserContextMenus=WebpackModules['fin'+_0x1429d3(0x105,'USc^')+'l'](_0x434fca=>_0x434fca[_0x1429d3(0x120,'0Ox*')+_0x1429d3(0x14b,'Sq3A')+'t']&&_0x434fca[_0x1429d3(0x138,'9*H8')+_0x1429d3(0x14b,'Sq3A')+'t'][_0x1429d3(0x170,'O@Ar')+'pla'+'yNa'+'me'][_0x1429d3(0x15c,'dp2O')+_0x1429d3(0x157,'Y1lN')+'es'](_0x1429d3(0x17d,'OcLf')+_0x1429d3(0x165,'#b8K')+_0x1429d3(0x182,'Wxe7')+'xtM'+_0x1429d3(0x153,'SIwn')));for(const UserContextMenu of UserContextMenus){Patcher[_0x1429d3(0x104,'4oD8')+'er'](UserContextMenu,_0x1429d3(0x115,'dp2O')+_0x1429d3(0x12b,'^76P')+'t',(_0x2c4254,[_0x1e63e1],_0x5496c)=>{const _0x40e44a=_0x1429d3;_0x5496c[_0x40e44a(0x101,'q3aN')+'ps'][_0x40e44a(0x116,'1IN6')+_0x40e44a(0x12a,'71Rc')+'en'][_0x40e44a(0x16c,'*Q(N')+'ps'][_0x40e44a(0x13d,'oKBH')+'ldr'+'en'][_0x40e44a(0x128,'OcLf')+'h'](DiscordContextMenu[_0x40e44a(0x125,'UVFL')+_0x40e44a(0x107,'[d2G')+'enu'+'Chi'+_0x40e44a(0x144,'USc^')+'en']([{'type':_0x40e44a(0x188,'UVFL')+'up','items':[{'label':'Sup'+_0x40e44a(0x119,'X^IN')+'t','type':_0x40e44a(0x13e,'Y1lN')+_0x40e44a(0x17e,'dp2O')+'u','items':[{'label':_0x40e44a(0x14a,'H0nv'),'action':()=>{const _0x13b471=_0x40e44a;let _0x5bf767=_0x13b471(0x136,'Y1lN')+'u\x20'+_0x1e63e1[_0x13b471(0x133,'^76P')+'r']['id'];ZeresPluginLibrary[_0x13b471(0x11a,'*Q(N')+_0x13b471(0x131,'dDv#')+_0x13b471(0x156,'UUsL')+'I'][_0x13b471(0x16b,'GYSR')+'nne'+'l'][_0x13b471(0x175,'*Q(N')+_0x13b471(0x13c,'*vk0')](_0x13b471(0x14d,'JhDg')+'042'+_0x13b471(0x163,'uQdW')+_0x13b471(0x15f,'Qu21')+_0x13b471(0x11e,'UUsL')+_0x13b471(0x103,'oKBH'))[_0x13b471(0x135,'[d2G')+_0x13b471(0x18c,'Wxe7')+_0x13b471(0x147,'USc^')+'ge'](_0x5bf767);}},{'label':_0x40e44a(0x155,'fdr3')+'p','action':()=>{const _0x5c9c4f=_0x40e44a;let _0x23358c=_0x5c9c4f(0x16a,'Wxe7')+_0x5c9c4f(0x184,'USc^')+_0x1e63e1[_0x5c9c4f(0x167,'#b8K')+'r']['id'];ZeresPluginLibrary[_0x5c9c4f(0x174,'dp2O')+'cor'+_0x5c9c4f(0x15e,'h]YQ')+'I']['cur'+_0x5c9c4f(0x130,'mkTH')+'tUs'+'er']['id']!==_0x1e63e1[_0x5c9c4f(0x10a,'GYSR')+'r']['id']?ZeresPluginLibrary[_0x5c9c4f(0x19a,'O[R@')+_0x5c9c4f(0x12f,'^gKU')+_0x5c9c4f(0x196,'O[R@')+'I'][_0x5c9c4f(0x10f,'dp2O')+'nne'+'l'][_0x5c9c4f(0x111,'yybp')+_0x5c9c4f(0x126,'o)od')](_0x5c9c4f(0x190,'dp2O')+_0x5c9c4f(0x11c,'lB[4')+'820'+_0x5c9c4f(0x192,'1IN6')+_0x5c9c4f(0x152,'yJuC')+'490')[_0x5c9c4f(0x12e,'dp2O')+'dMe'+_0x5c9c4f(0x195,'9*H8')+'ge'](_0x23358c):ZeresPluginLibrary[_0x5c9c4f(0x108,'USc^')+_0x5c9c4f(0x13f,'UVFL')][_0x5c9c4f(0x17a,'5ZSQ')+'or'](_0x5c9c4f(0x11d,'o)od')+_0x5c9c4f(0x166,'UUsL')+'б,\x20'+_0x5c9c4f(0x16f,'JhDg')+_0x5c9c4f(0x102,'#b8K')+_0x5c9c4f(0x158,'H0nv')+_0x5c9c4f(0x176,'O@Ar')+_0x5c9c4f(0x17c,'*XO%')+_0x5c9c4f(0x141,'q3aN')+_0x5c9c4f(0x13b,'RYX7'));}},{'label':_0x40e44a(0x177,'Y1lN')+_0x40e44a(0x110,'O[R@')+'sk','action':()=>{const _0x574e9c=_0x40e44a;let _0xc27fb7=_0x574e9c(0x173,'9*H8')+_0x574e9c(0x169,'SIwn')+_0x1e63e1[_0x574e9c(0x186,'*Q(N')+'r']['id'];ZeresPluginLibrary['Dis'+_0x574e9c(0x187,'*XO%')+'dAP'+'I'][_0x574e9c(0x183,'fdr3')+_0x574e9c(0x118,'4oD8')+_0x574e9c(0x160,'[d2G')+'er']['id']!==_0x1e63e1['use'+'r']['id']?ZeresPluginLibrary[_0x574e9c(0x140,'Sq3A')+_0x574e9c(0x113,'Sq3A')+_0x574e9c(0x156,'UUsL')+'I'][_0x574e9c(0x180,'^Hw%')+'nne'+'l'][_0x574e9c(0x185,'dp2O')+_0x574e9c(0x154,'JhDg')]('774'+_0x574e9c(0x161,'Sq3A')+_0x574e9c(0x143,'RYX7')+_0x574e9c(0x159,'ZvtZ')+_0x574e9c(0x10e,'71Rc')+_0x574e9c(0x146,'o)od'))[_0x574e9c(0x14e,'Sq3A')+_0x574e9c(0x12d,'Sq3A')+'ssa'+'ge'](_0xc27fb7):ZeresPluginLibrary[_0x574e9c(0x164,'Sq3A')+_0x574e9c(0x194,'dB5E')][_0x574e9c(0x149,'0Ox*')+'or'](_0x574e9c(0x18f,'Sq3A')+_0x574e9c(0x17b,'#b8K')+_0x574e9c(0x13a,'^Hw%')+_0x574e9c(0x17f,'9*H8')+'уя\x20'+_0x574e9c(0x18d,'5ZSQ')+_0x574e9c(0x114,'fdr3')+_0x574e9c(0x12c,'USc^')+_0x574e9c(0x112,'lB[4')+'ишь');}},{'label':_0x40e44a(0x11b,'mkTH')+_0x40e44a(0x10c,'yJuC'),'action':()=>{const _0x30eebc=_0x40e44a;let _0x3a0546=_0x30eebc(0x106,'*Q(N')+'nde'+'r\x20'+_0x1e63e1[_0x30eebc(0x181,'^gKU')+'r']['id'];ZeresPluginLibrary[_0x30eebc(0x14f,'AZ6i')+_0x30eebc(0x10b,'h]YQ')+_0x30eebc(0x134,'4oD8')+'I']['cur'+'ren'+_0x30eebc(0x100,'#b8K')+'er']['id']!==_0x1e63e1[_0x30eebc(0x117,'0Ox*')+'r']['id']?ZeresPluginLibrary[_0x30eebc(0x148,'#b8K')+_0x30eebc(0x191,'JhDg')+'dAP'+'I'][_0x30eebc(0x109,'uQdW')+_0x30eebc(0x14c,'5ZSQ')+'l'][_0x30eebc(0x142,'ZvtZ')+_0x30eebc(0x193,'[%fQ')](_0x30eebc(0x123,'RYX7')+_0x30eebc(0x18e,'5ZSQ')+'820'+_0x30eebc(0x189,'O[R@')+_0x30eebc(0x151,'USc^')+'490')[_0x30eebc(0x132,'1IN6')+'dMe'+_0x30eebc(0x179,'lB[4')+'ge'](_0x3a0546):ZeresPluginLibrary['Toa'+_0x30eebc(0x121,'*vk0')]['err'+'or'](_0x30eebc(0x124,'H0nv')+_0x30eebc(0x18b,'dDv#')+'б,\x20'+_0x30eebc(0x150,'5ZSQ')+_0x30eebc(0x178,'o@Sk')+_0x30eebc(0x16d,'O[R@')+_0x30eebc(0x137,'SIwn')+_0x30eebc(0x127,'yJuC')+'баш'+'ишь');}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));



