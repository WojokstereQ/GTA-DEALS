const _0x33b75b=_0x4dfa;(function(_0x5f45fe,_0x355c6d){const _0x5cd6b7=_0x4dfa,_0xbdec6c=_0x5f45fe();while(!![]){try{const _0x3027d8=-parseInt(_0x5cd6b7(0x207))/0x1*(-parseInt(_0x5cd6b7(0x202))/0x2)+-parseInt(_0x5cd6b7(0x1f6))/0x3*(-parseInt(_0x5cd6b7(0x1fb))/0x4)+-parseInt(_0x5cd6b7(0x1fc))/0x5*(-parseInt(_0x5cd6b7(0x1f5))/0x6)+parseInt(_0x5cd6b7(0x1ef))/0x7*(parseInt(_0x5cd6b7(0x1f3))/0x8)+-parseInt(_0x5cd6b7(0x201))/0x9*(-parseInt(_0x5cd6b7(0x1fd))/0xa)+-parseInt(_0x5cd6b7(0x1f8))/0xb+parseInt(_0x5cd6b7(0x1fe))/0xc*(-parseInt(_0x5cd6b7(0x1ec))/0xd);if(_0x3027d8===_0x355c6d)break;else _0xbdec6c['push'](_0xbdec6c['shift']());}catch(_0x94b69e){_0xbdec6c['push'](_0xbdec6c['shift']());}}}(_0x5286,0x9d570));function _0x4dfa(_0x4ff805,_0x129da2){const _0x528622=_0x5286();return _0x4dfa=function(_0x4dfa72,_0x4aea78){_0x4dfa72=_0x4dfa72-0x1e9;let _0x1afb4a=_0x528622[_0x4dfa72];return _0x1afb4a;},_0x4dfa(_0x4ff805,_0x129da2);}function _0x5286(){const _0x5c3537=['38619dEkWHk','Guilds','init','GuildMembers','1608DOacEG','An\x20invalid\x20token\x20was\x20provided.','511194CxLCvE','3CHYKtF','Collection','12046144fCheKD','Client','GatewayIntentBits','2235984KCnteQ','25TCwBPt','320fZIiIm','12JLpvSB','then','Privileged\x20intent\x20provided\x20is\x20not\x20enabled\x20or\x20whitelisted.','355599aANqnw','2181262ECxxND','exit','exports','login','error','1AWBWcx','applicationConfig','MessageContent','./config.js','catch','Wprowadzony\x20token\x20jest\x20nieprawidłowy,\x20upewnij\x20się\x20że\x20jest\x20dobry\x20lub\x20wygeneruj\x20nowy.','35221199LJVkml','commands','message'];_0x5286=function(){return _0x5c3537;};return _0x5286();}const discord=require('discord.js'),config=require(_0x33b75b(0x1e9)),logger=require('./utils/consoleLogger.js'),discordClient=new discord[(_0x33b75b(0x1f9))]({'intents':[discord[_0x33b75b(0x1fa)][_0x33b75b(0x1f0)],discord[_0x33b75b(0x1fa)]['GuildMessages'],discord[_0x33b75b(0x1fa)][_0x33b75b(0x1f2)],discord[_0x33b75b(0x1fa)][_0x33b75b(0x209)]]});module[_0x33b75b(0x204)]=discordClient,discordClient[_0x33b75b(0x1ed)]=new discord[(_0x33b75b(0x1f7))](),discordClient[_0x33b75b(0x205)](config[_0x33b75b(0x208)]['botToken'])[_0x33b75b(0x1ea)](_0x51af71=>{const _0x111446=_0x33b75b;if(_0x51af71[_0x111446(0x1ee)]==_0x111446(0x1f4))logger['error'](_0x111446(0x1eb)),process[_0x111446(0x203)](0x1);else _0x51af71['message']==_0x111446(0x200)?(logger[_0x111446(0x206)]('Przywilejowane\x20intenty\x20nie\x20zostały\x20aktywowane.\x20Aby\x20to\x20zrobić,\x20przejdź\x20na\x20stronę\x20https://discord.com/developers/applications\x20i\x20włącz\x20wszystkie\x20intenty\x20w\x20zakładce\x20\x22Privileged\x20Gateway\x20Intents\x22.'),process[_0x111446(0x203)](0x1)):(logger['error'](_0x51af71[_0x111446(0x1ee)]),process['exit'](0x1));;})[_0x33b75b(0x1ff)](require('./handlers/commandHandler.js')[_0x33b75b(0x1f1)](discordClient),require('./handlers/eventHandler.js')[_0x33b75b(0x1f1)](discordClient));