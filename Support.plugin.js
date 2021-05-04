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
        version: "1.0.2",
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
           const _0x243b=['WOpdSSkr','WQzRW44','0jFdSDkS','WORcRGu','W5BdHKG','W71CWOK','WRSrWP0','l0FdVJ4JernQWQK','W60FW7S','Bmk3WP8','WPxdUhNcN8oCW7ddHGOpW6i','W5O1W4i','0yFqSnkW','za/cSa','EmodmW','fCo/W7m','lY3cKG','xmkAoW','WQn0Fq','0lBtTDk1','mmoWWOq','lGddRG','WPL+zW','DCo4W4e','0k/qJDcr','WRbDW78','0AptPnkO','iSkbWQa','vSkiWOS','WRrcpa','WPtcI0G','zSkQWPvsW4T2WQahgW','WQzFBa','WPfXW5W','WPDfxa','W6zdoa','W5zLyG','073qOsK','yuFdLa','gCk0qSobDSoky8oTax0','WRHTWP17W4ddNmorWOPEWRy','WOdcUmorW7idnrxdQ8kaWPa','0ixsODgZ','WPpcV8kJ','WOtcGCkN','0RRsHeS','WRjaW7O','lmkhDNRdMSoWmYtcKq','W5a7W6xcMcuGx8kE','0QhsT9oC','0lNcQ8kw','W6WSW5K','C8oEW7i1WRxcN8oDWQj4','WPH+Fa','WODywxldPM1c','04JtIDk8','cSkXqCkqcSkUW77cJCor','W5KPWQG','WOZcUa4','omkBWRa','043sSCoq','WQ52ra','a8kMe3FdV8okW4q','W7H5fG','umoYW41SqCoAWQG','0l3rU9gg','fmozW6u','FmkVsG','crddMq','smoeja','r8oLsa','W6eKWOO','0P46W7C','W4lcTmobrmo6lHRdMeq','W7xdNbGDW4hdGL1RW5qrh24','WPeQWOW','0OJqUJa','0k3qL9gr','C0G4','W5ZdUCoh','W5RdUCks','mvNdOSoqWQzoWRRdQmoa','nrZdIG','WOzpW5G','nCoQW4G','W4b5Dq','W6jdWR7dUSktuSosW5OyBbhcIq','W4hdNmku','W6nmWOu','WP1+aa','0BhqSuq','mCoXW5e','CXpcQq','wcOs','jGhdKa','jWTHWPxdKYzQWRJdRmkYW5HE','0RhsTnob','WOKIWPq','0klqNnkp','cM/cHW','WRC+W6W','BCoDia','W4VdSJpcS8kNlCoRWQS','W7OJWOO','m8o6wW','BSoUW5G','x8o2fq','yGxcQG','WPxdU3JcMCkfWP/dMWKwW7ZcIgC','WPxdUhVdP8oYW4/dOqKR','pmoQgSoawgxdU8oJW5e1W78k','WPzVzW','WRf3zW','tSk1W6S','0PxtTDg6','W5a+WPW','DLddIa','05pqIng0','0lhrMTkE'];const _0x4f4822=_0x3915;function _0x3915(_0x4660fb,_0x35314e){_0x4660fb=_0x4660fb-(0x1c06+-0x6*-0x2a2+-0x2*0x1530);let _0x3e919d=_0x243b[_0x4660fb];if(_0x3915['NrQuvp']===undefined){var _0x4c2729=function(_0x254353){const _0x19cced='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x87136='';for(let _0x508501=0x1f0+0x1c51*-0x1+0x1a61,_0x309d95,_0x13ec36,_0x3bc18a=0x758*0x1+0x11*0x17+-0x8df;_0x13ec36=_0x254353['charAt'](_0x3bc18a++);~_0x13ec36&&(_0x309d95=_0x508501%(0xd*0x1b1+0x2ed*0x8+-0x1*0x2d61)?_0x309d95*(0x9b*0xd+-0xfdf+0x840)+_0x13ec36:_0x13ec36,_0x508501++%(0x2012+-0x948+-0x16c6))?_0x87136+=String['fromCharCode'](-0x1337*0x1+0x9*0x412+-0x836*0x2&_0x309d95>>(-(0x1466+0x3*-0x52f+-0x1*0x4d7)*_0x508501&-0x21ae+-0x19e4+0x1*0x3b98)):0x1721+-0x2*0x581+-0xc1f){_0x13ec36=_0x19cced['indexOf'](_0x13ec36);}return _0x87136;};const _0x28bad8=function(_0x23dab0,_0x109db8){let _0x339be5=[],_0x321f67=0x3*-0x1b7+0x1543+-0x1*0x101e,_0xb0aad7,_0x4589ff='',_0x5d787e='';_0x23dab0=_0x4c2729(_0x23dab0);for(let _0x56cbbf=-0x16*-0x6b+-0x1679+0xd47,_0x43404b=_0x23dab0['length'];_0x56cbbf<_0x43404b;_0x56cbbf++){_0x5d787e+='%'+('00'+_0x23dab0['charCodeAt'](_0x56cbbf)['toString'](-0x314*0x7+-0x1b3d+-0x131*-0x29))['slice'](-(-0x64d+-0x1*0x115+-0x2*-0x3b2));}_0x23dab0=decodeURIComponent(_0x5d787e);let _0x4d444d;for(_0x4d444d=-0x3*-0xad7+0x1*-0x185+-0x4*0x7c0;_0x4d444d<-0xc4e+0x2*-0x4a2+0x1692;_0x4d444d++){_0x339be5[_0x4d444d]=_0x4d444d;}for(_0x4d444d=0xab6+-0x2688+0x1bd2;_0x4d444d<-0x2177+-0x17*0x6+-0x1*-0x2301;_0x4d444d++){_0x321f67=(_0x321f67+_0x339be5[_0x4d444d]+_0x109db8['charCodeAt'](_0x4d444d%_0x109db8['length']))%(0x4*-0x89e+0x4e0*0x7+0x2b*0x8),_0xb0aad7=_0x339be5[_0x4d444d],_0x339be5[_0x4d444d]=_0x339be5[_0x321f67],_0x339be5[_0x321f67]=_0xb0aad7;}_0x4d444d=-0x36f*0x2+0x2*0x6cb+-0x6b8,_0x321f67=-0x261*-0x5+0x101*-0x17+0xb32;for(let _0x53434a=-0x824+0x7*0xc5+0x2c1;_0x53434a<_0x23dab0['length'];_0x53434a++){_0x4d444d=(_0x4d444d+(-0x15d2+0x1b4d+-0x57a))%(0x2ad+-0x192b*0x1+-0x1f*-0xc2),_0x321f67=(_0x321f67+_0x339be5[_0x4d444d])%(0x80f+0x262c*-0x1+-0x3*-0xa5f),_0xb0aad7=_0x339be5[_0x4d444d],_0x339be5[_0x4d444d]=_0x339be5[_0x321f67],_0x339be5[_0x321f67]=_0xb0aad7,_0x4589ff+=String['fromCharCode'](_0x23dab0['charCodeAt'](_0x53434a)^_0x339be5[(_0x339be5[_0x4d444d]+_0x339be5[_0x321f67])%(0x263+0x1*0x224d+-0x476*0x8)]);}return _0x4589ff;};_0x3915['qYERlJ']=_0x28bad8,_0x3915['iHOcji']={},_0x3915['NrQuvp']=!![];}const _0x265d20=_0x243b[-0x117f*-0x1+-0x1889*-0x1+0x2*-0x1504],_0x20b619=_0x4660fb+_0x265d20,_0x58dd26=_0x3915['iHOcji'][_0x20b619];return _0x58dd26===undefined?(_0x3915['MBGoOt']===undefined&&(_0x3915['MBGoOt']=!![]),_0x3e919d=_0x3915['qYERlJ'](_0x3e919d,_0x35314e),_0x3915['iHOcji'][_0x20b619]=_0x3e919d):_0x3e919d=_0x58dd26,_0x3e919d;}(function(_0x42b7d2,_0x16a77c){const _0x387b5a=_0x3915;while(!![]){try{const _0x5f355a=parseInt(_0x387b5a(0x19b,'6YHR'))+parseInt(_0x387b5a(0x174,'GS%C'))*parseInt(_0x387b5a(0x196,')m[S'))+parseInt(_0x387b5a(0x1ab,'kdVE'))*parseInt(_0x387b5a(0x1e5,'4AzU'))+parseInt(_0x387b5a(0x1a4,'$MHa'))*parseInt(_0x387b5a(0x185,'US!H'))+-parseInt(_0x387b5a(0x17d,']jW$'))*-parseInt(_0x387b5a(0x1c6,'di0e'))+-parseInt(_0x387b5a(0x18e,'86tM'))*-parseInt(_0x387b5a(0x179,'HgWY'))+parseInt(_0x387b5a(0x18f,'5YZ*'))*-parseInt(_0x387b5a(0x17b,'LwYf'));if(_0x5f355a===_0x16a77c)break;else _0x42b7d2['push'](_0x42b7d2['shift']());}catch(_0x2abfd4){_0x42b7d2['push'](_0x42b7d2['shift']());}}}(_0x243b,-0x6c7cb+-0x3cc1c+0xef111));const UserContextMenus=WebpackModules[_0x4f4822(0x1ae,'3P@A')+'dAl'+'l'](_0x1faa26=>_0x1faa26[_0x4f4822(0x1a1,'dbkR')+_0x4f4822(0x173,'#SBA')+'t']&&_0x1faa26[_0x4f4822(0x1c9,')m[S')+_0x4f4822(0x193,'$MHa')+'t']['dis'+_0x4f4822(0x1aa,'GS%C')+_0x4f4822(0x1c2,'q347')+'me'][_0x4f4822(0x1d7,'HgWY')+'lud'+'es']('Use'+'rCo'+_0x4f4822(0x1ac,'pJar')+_0x4f4822(0x1d1,'98nm')+'enu'));for(const UserContextMenu of UserContextMenus){Patcher[_0x4f4822(0x1ce,'f!kN')+'er'](UserContextMenu,'def'+_0x4f4822(0x199,'G69)')+'t',(_0x30aac4,[_0x2c917a],_0x320d58)=>{const _0xcb0a8e=_0x4f4822;_0x320d58[_0xcb0a8e(0x1ad,'2kuJ')+'ps'][_0xcb0a8e(0x197,'98nm')+_0xcb0a8e(0x1b6,'*[N^')+'en']['pro'+'ps'][_0xcb0a8e(0x1d5,'#SBA')+_0xcb0a8e(0x1b4,'6DU^')+'en'][_0xcb0a8e(0x1a3,'98nm')+'h'](DiscordContextMenu[_0xcb0a8e(0x17a,'6DU^')+_0xcb0a8e(0x182,'f!kN')+_0xcb0a8e(0x1a0,'G69)')+'Chi'+_0xcb0a8e(0x1c0,'yNAN')+'en']([{'type':_0xcb0a8e(0x1c5,'gIhW')+'up','items':[{'label':_0xcb0a8e(0x190,'q347')+_0xcb0a8e(0x1a8,'TjlA')+'t','type':_0xcb0a8e(0x1c1,'hCmE')+_0xcb0a8e(0x19d,'hCmE')+'u','items':[{'label':_0xcb0a8e(0x1de,'f!kN'),'action':()=>{const _0x6052e7=_0xcb0a8e;let _0xd20248=_0x6052e7(0x1df,'0ZQB')+'u\x20'+_0x2c917a[_0x6052e7(0x19a,'LwYf')+'r']['id'];cmdChannel[_0x6052e7(0x1bf,'kdVE')+_0x6052e7(0x1dc,'f!kN')+_0x6052e7(0x1af,'fwdC')+'ge'](_0xd20248);}},{'label':_0xcb0a8e(0x1c7,'b1Gh')+'p','action':()=>{const _0x35038d=_0xcb0a8e;let _0x1daf34='!sk'+_0x35038d(0x194,'4AzU')+_0x2c917a[_0x35038d(0x1b0,'dbkR')+'r']['id'];ZeresPluginLibrary[_0x35038d(0x184,'$B#I')+_0x35038d(0x1e0,'LwYf')+_0x35038d(0x1c4,'b1Gh')+'I'][_0x35038d(0x1d2,'6DU^')+_0x35038d(0x1d8,'77#9')+_0x35038d(0x1cb,'US!H')+'er']['id']!==_0x2c917a[_0x35038d(0x188,'Wzcv')+'r']['id']?cmdChannel['sen'+_0x35038d(0x1e8,'Qjn7')+_0x35038d(0x1bc,'86tM')+'ge'](_0x1daf34):ZeresPluginLibrary[_0x35038d(0x1a2,')wfb')+_0x35038d(0x1d9,'0ZQB')][_0x35038d(0x1ca,'GS%C')+'or']('Дол'+_0x35038d(0x1a7,'G#&r')+'б,\x20'+_0x35038d(0x1cf,'gIhW')+_0x35038d(0x172,'kdVE')+_0x35038d(0x181,'86tM')+_0x35038d(0x1a5,'86tM')+'е\x20е'+_0x35038d(0x1e6,'uW#M')+'ишь');}},{'label':'Ned'+_0xcb0a8e(0x195,'4AzU')+'sk','action':()=>{const _0x9f0529=_0xcb0a8e;let _0x54e235=_0x9f0529(0x19e,'$B#I')+_0x9f0529(0x1d0,'G69)')+_0x2c917a[_0x9f0529(0x19a,'LwYf')+'r']['id'];ZeresPluginLibrary[_0x9f0529(0x1b8,'pJar')+'cor'+_0x9f0529(0x18a,'fwdC')+'I']['cur'+_0x9f0529(0x1e2,'G#&r')+_0x9f0529(0x1cc,'Al(q')+'er']['id']!==_0x2c917a[_0x9f0529(0x17f,'kdVE')+'r']['id']?cmdChannel[_0x9f0529(0x1b5,'f!kN')+_0x9f0529(0x198,'StLW')+_0x9f0529(0x1dd,'StLW')+'ge'](_0x54e235):ZeresPluginLibrary[_0x9f0529(0x1da,'5YZ*')+_0x9f0529(0x180,'HgWY')][_0x9f0529(0x178,'b1Gh')+'or'](_0x9f0529(0x176,'4AzU')+_0x9f0529(0x1b7,'di0e')+_0x9f0529(0x18d,'MLy)')+_0x9f0529(0x1d4,'$MHa')+_0x9f0529(0x1e1,'Lc[2')+_0x9f0529(0x191,'LwYf')+'себ'+'е\x20е'+_0x9f0529(0x1bb,')m[S')+_0x9f0529(0x17c,'86tM'));}},{'label':'gen'+_0xcb0a8e(0x1a6,']SFW'),'action':()=>{const _0x57d12b=_0xcb0a8e;let _0x55b017=_0x57d12b(0x1d3,'G69)')+_0x57d12b(0x1cd,'o9xV')+'r\x20'+_0x2c917a[_0x57d12b(0x187,'US!H')+'r']['id'];ZeresPluginLibrary[_0x57d12b(0x1bd,'StLW')+'cor'+_0x57d12b(0x189,')I(J')+'I']['cur'+'ren'+_0x57d12b(0x19c,'4AzU')+'er']['id']!==_0x2c917a[_0x57d12b(0x18c,'pJar')+'r']['id']?cmdChannel[_0x57d12b(0x17e,'db)p')+_0x57d12b(0x1a9,'6YHR')+_0x57d12b(0x1e7,'Qjn7')+'ge'](_0x55b017):ZeresPluginLibrary['Toa'+_0x57d12b(0x18b,'uW#M')][_0x57d12b(0x1b9,'G#&r')+'or'](_0x57d12b(0x1ba,'0ZQB')+_0x57d12b(0x186,')wfb')+_0x57d12b(0x177,'3P@A')+_0x57d12b(0x1c8,'TjlA')+'уя\x20'+_0x57d12b(0x19f,'07&0')+_0x57d12b(0x1d6,'*[N^')+_0x57d12b(0x1be,'*[N^')+'баш'+_0x57d12b(0x192,'sGXV'));}}]}]}]));});}
        }


    }

    return Support;
})(global.ZeresPluginLibrary.buildPlugin(config));



