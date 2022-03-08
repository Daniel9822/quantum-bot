const fs = require('fs')
const chalk = require('chalk')
const MyPkg = require('../../package.json')
const MyInfo = JSON.parse(fs.readFileSync('./informacion.json'))

exports.PanelMenu = (prefix, pushname, actividad, role, monospace, nwn) => {
  return `${monospace}< [ ${MyInfo.NombreDelBot} ] >${monospace}
╔═══════════
║❂ Active time : ${actividad}
║❂ Bot version : ${MyPkg.version}
║❂ Creator : ${MyInfo.CoCreador}
║❂ Prefix : 「  ${prefix}  」
║❂ Client : ${pushname}️
║❂ Client Role : ${role}
╚═══════════
${nwn}
~|-------------------------|~
⮕ *_COMMANDS_  ☷*
~|-------------------------|~

*╔═══════════*
*║ _MULTIMEDIA :_*
*║╭——————————*
*║├ ${prefix}informacion*
*║├ ${prefix}apoyo*
*║├ ${prefix}wame*
*║├ ${prefix}milimite*
*║├ ${prefix}minivel*
*║├ ${prefix}estadobot*
*║├ ${prefix}creador*
*║├ ${prefix}gpinfo*
*║├ ${prefix}admins*
*║├ ${prefix}gplink*
*║├ ${prefix}tienda*
*║├ ${prefix}horario*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _PASTIME :_*
*║╭——————————*
*║├ ${prefix}quien*
*║├ ${prefix}ruleta*
*║├ ${prefix}tragamoneda*
*║├ ${prefix}calumnia*
*║├ ${prefix}dados*
*║├ ${prefix}dado*
*║├ ${prefix}emparejar*
*║├ ${prefix}top5*
*║├ ${prefix}testgay*
*║├ ${prefix}votacion*
*║├ ${prefix}sivotar*
*║├ ${prefix}novotar*
*║├ ${prefix}vervotos*
*║├ ${prefix}reiniciarvotos*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _CONVERTERS :_*
*║╭——————————*
*║├ ${prefix}sticker*
*║├ ${prefix}stickergif*
*║├ ${prefix}rescom*
*║├ ${prefix}aimg*
*║├ ${prefix}reversavid*
*║├ ${prefix}lentovid*
*║├ ${prefix}acelerarvid*
*║├ ${prefix}amp3*
*║├ ${prefix}aumentarbajo*
*║├ ${prefix}distorsionado*
*║├ ${prefix}lento*
*║├ ${prefix}demonio*
*║├ ${prefix}superveloz*
*║├ ${prefix}ardilla*
*║├ ${prefix}nightcore*
*║├ ${prefix}inframundo*
*║├ ${prefix}tiendaimg*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _CMDS ADMINS :_*
*║╭——————————*
*║├ ${prefix}cgpen*
*║├ ${prefix}agp*
*║├ ${prefix}nombregp*
*║├ ${prefix}editdesgp*
*║├ ${prefix}fotogrupo*
*║├ ${prefix}invocar*
*║├ ${prefix}darpoder*
*║├ ${prefix}quitarpoder*
*║├ ${prefix}ban*
*║├ ${prefix}enlinea*
*║├ ${prefix}lenguaje*
*║╰┬> ACTIVATORS*
*║╭╯*
*║├ ${prefix}modofull*
*║├ ${prefix}modoanime*
*║├ ${prefix}hmodo*
*║├ ${prefix}nivelear*
*║├ ${prefix}antilink*
*║├ ${prefix}antilink2*
*║├ ${prefix}antitraba*
*║├ ${prefix}antifakes*
*║├ ${prefix}antiextranjeros*
*║├ ${prefix}wlc*
*║╰┬> GAMES*
*║╭╯*
*║├ ${prefix}deathnote*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _CMDS CREATOR :_*
*║╭——————————*
*║├ ${prefix}modo1*
*║├ ${prefix}publico*
*║├ ${prefix}privado*
*║├ ${prefix}modo2*
*║├ ${prefix}enlinea*
*║├ ${prefix}sinlinea*
*║├ ${prefix}noprivado*
*║├ ${prefix}siprivado*
*║├ ${prefix}predit*
*║├ ${prefix}nombrebot*
*║├ ${prefix}mycreador*
*║├ ${prefix}misredes*
*║├ ${prefix}editarlimite*
*║├ ${prefix}perfilbot*
*║├ ${prefix}suprimir*
*║├ ${prefix}bcgc*
*║├ ${prefix}bc*
*║├ ${prefix}banear*
*║├ ${prefix}quitarbaneo*
*║├ ${prefix}.*
*║╰┬> ACTIVATORS*
*║╭╯*
*║├ ${prefix}chatbot*
*║├ ${prefix}banchat*
*║╰┬> ~MODE KUAKER~*
*║ ~NOTE- These commands are virus locked~*
*║ ~be careful when using them!~*
*║╭╯*
*║├ ${prefix}c1*
*║╰┬> ADVANCED*
*║╭╯*
*║├ =>*
*║├ >*
*║├ $*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _MORE EXTRA COMMANDS :_*
*║╭——————————*
*║├ ${prefix}mascmds*
*║├ ${prefix}randmenu*
*║├ ${prefix}crealogos*
*║├ ${prefix}mianime*
*║├ ${prefix}labiblia*
*║╰——————————*
*╚═══════════*
`
}
exports.FooterPM = (CovidApi) => {
  return `┏「 DATA - COVID19 」─┓
┃➲ Positive cases : ${CovidApi.cases}
┃✯ Recovered : ${CovidApi.recovered}
┃❥ Treaties : ${CovidApi.active}
┃✞ Deceased : ${CovidApi.deaths}
┗─━─━ 「 🌎 」 ━─━─┛`
}
exports.PanelMenu2 = (prefix, monospace) => {
  return `${monospace}[ RANDOM-MENU ]${monospace}
 
╔═══════════
║
╠═> MULTIMEDIA
║➣ ${prefix}miperfil
║➣ ${prefix}gruposwa
║➣ ${prefix}voz
║➣ ${prefix}covid19
║➣ ${prefix}clima
║➣ ${prefix}github
║➣ ${prefix}traductor
║➣ ${prefix}pinterest
║➣ ${prefix}imagen
║➣ ${prefix}google
║➣ ${prefix}wikipedia
║➣ ${prefix}playstore
║➣ ${prefix}letra
║➣ ${prefix}wallpaper
║➣ ${prefix}tiktok
║
╠═> DOWNLOADER
║➣ ${prefix}mediafire
║➣ ${prefix}play
║➣ ${prefix}play2
║➣ ${prefix}fbdl
║➣ ${prefix}tiktokdl
║
╠═> PASTIME
║➣ ${prefix}simi
║➣ ${prefix}minidatos
║➣ ${prefix}minombre
║➣ ${prefix}frasesamor
║➣ ${prefix}top10
║➣ ${prefix}preguntame
║➣ ${prefix}v_o_f
║➣ ${prefix}notificacion
║➣ ${prefix}tumama
║➣ ${prefix}comediante
║➣ ${prefix}consejo
║➣ ${prefix}randimg
║➣ ${prefix}djbot
║➣ ${prefix}xd
║➣ ${prefix}perros
║➣ ${prefix}gatos
║➣ ${prefix}patos
╚═══════════
`
}
exports.MenuArte = (prefix, monospace) => {
  return `${monospace}[ CREATE-LOGOS ]${monospace}
 
╔═══════════
║☞ ${prefix}attp
║☞ ${prefix}halloween
║☞ ${prefix}lava
║☞ ${prefix}toxico
║☞ ${prefix}metalrojo
║☞ ${prefix}tormenta
║☞ ${prefix}gneon
║☞ ${prefix}neontxt
║☞ ${prefix}arcoiris
║☞ ${prefix}hielo
║☞ ${prefix}lapiz
║☞ ${prefix}gameover
║☞ ${prefix}roca3d
║☞ ${prefix}ficcion
║☞ ${prefix}romper
║☞ ${prefix}sangre
║☞ ${prefix}pornhub
╚═══════════
`
}
exports.AniMenu = (prefix, monospace) => {
  return `${monospace}[ ANIME-MENU ]${monospace}
 
╔═══════════
║圆 ${prefix}himnootaku
║圆 ${prefix}reconime
║圆 ${prefix}name?
║圆 ${prefix}anifrase
║圆 ${prefix}waifu
║圆 ${prefix}waifuhd
║圆 ${prefix}facehd
║圆 ${prefix}aniwpp
║圆 ${prefix}neko
║圆 ${prefix}neko2
║圆 ${prefix}neko3
║圆 ${prefix}snime
║圆 ${prefix}otakutest
╚═══════════
`
}
exports.MenuH = (prefix, monospace) => {
  return `${monospace}[ MENU +18 ]${monospace}
 
╔═══════════
║㋡ ${prefix}stickerh
║㋡ ${prefix}hentai
║㋡ ${prefix}hentai2
║㋡ ${prefix}hwaifu
║㋡ ${prefix}hneko
║㋡ ${prefix}traph
║㋡ ${prefix}lewd
║㋡ ${prefix}lewdk
║㋡ ${prefix}cum_jpg
║㋡ ${prefix}pussy_jpg
║㋡ ${prefix}feet
║㋡ ${prefix}lewdkemo
║㋡ ${prefix}solo
║㋡ ${prefix}avatar
║㋡ ${prefix}nsfw_avatar
║㋡ ${prefix}erokemo
║㋡ ${prefix}ero
║㋡ ${prefix}hololewd
║㋡ ${prefix}tits
║㋡ ${prefix}eroyuri
║㋡ ${prefix}yuri
║㋡ ${prefix}keta
║㋡ ${prefix}eron
║㋡ ${prefix}erok
║㋡ ${prefix}erofeet
║㋡ ${prefix}femdom
║㋡ ${prefix}futanari
╚═══════════
`
}
exports.BanCall = (helpcall) => {
  return `The calls to the Bot number are forbidden!\nContact the creator : ${helpcall}`
}
exports.AutoSaludo = () => {
  return `*_My main creator joined the group_ ✓*\n*[ Welcome nwn ]*`
}
exports.Wlc1 = () => {
  return `Give me a star`
}
exports.Wlc2 = () => {
  return `Creator`
}
exports.Wlc3 = (num, metadata, fechaCompleta, gpdesc) => {
  return `⚡ *Welcome @${num.split("@")[0]} to this great group :*\n${metadata.subject}\n⚡ *Date of admission : ${fechaCompleta}*\n⚡ _*I hope and you like your stay here, do not forget to respect the participants and the rules*_ ;)\n\n*Group norms currently :* \n${gpdesc}`
}
exports.Wlc4 = () => {
  return `BYE BYE... 😔`
}
exports.Wlc5 = (num) => {
  return `[ ! ] Left the group : @${num.split("@")[0]}`
}
exports.NoSpam1 = () => {
  return `*Wait a few seconds before using another command ✓*`
}
exports.NoSpam2 = (pushname) => {
  return `[ ! ] ${pushname} Please don't saturate the bot ;-;`
}
exports.NoReg = (pushname) => {
  return `[ ! ] ${pushname} You must register to start using the bot`
}
exports.PreFijo = () => {
  return `Prefix:`
}
exports.Erreply = () => {
  return `*[ ! ] An unexpected error occurred u.u [ ! ]*`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] ${pushname} Your limit to use the bot is exhausted ;-;*\nIf you level up they are given to you : ~+3 limit~`
}
exports.Limite = (pushname) => {
  return `*┏━━⊱ 「 LIMIT 」*
*┗⊱ _${pushname} Your remaining limit is_*`
}
exports.NivelUp = (fechaCompleta, senderNumber, getLevel, getLevelingLevel, sender, per, getLevelingXp, role, role2) => {
  return `「 ⚡LEVEL UPGRADE⚡  」\n\n➸ *Date* : ${fechaCompleta}\n➸ *User* : ${senderNumber}\n➸ *Level* : ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *Level progress : ${per}*\n➸ *XP* : ${getLevelingXp(sender)}\n➸ *According to your XP you become* : ${role}\n➸ *Power level* : ${role2}\n\n⚡ *Level Up Bonus :*\n_[ + 3 limit ]_`
}
exports.MinGp1 = () => {
  return `Ask for support or help`
}
exports.MinGp2 = () => {
  return `*[ ! ] Sorry, minimum number of members required in the group must be :*`
}
exports.NoTraba1 = () => {
  return `An administrator has just sent text that contains many characters -.-`
}
exports.NoTraba2 = (saltos, eliminar, pushname) => {
  return `Mark chat as read ✓\n${saltos}\n=> The number : ${eliminar}\n=> Alias : ${pushname}\n[ ! ] You have just sent a text that contains many characters which can cause device crashes`
}
exports.NoPriv = (privcre) => {
  return `[ ! ] Private chat is prohibited [ ! ]\nMy creator in case you need help : ${privcre}`
}
exports.NoLinks1 = () => {
  return `The good thing is that the link detected is from this group`
}
exports.NoLinks2 = () => {
  return `[ ! ] This user cannot be deleted`
}
exports.NoLinks3 = () => {
  return `Luckily I am not an administrator, I will not be able to delete you :v`
}
//♻️//
exports.Pong = (conexiont) => {
  return `Response speed : ${conexiont} milliseconds`
}
exports.NoReg2 = (prefix) => {
  return `*[ ! ] You are not registered in my database*\n\n_Example to register_ :\n${prefix}rg YourName|YourAge`
}
exports.SoloGp = () => {
  return `*[ ! ] This command can only be used in groups*`
}
exports.SoloAdm = () => {
  return `*[ ! ] This command can only be used by administrators*`
}
exports.YaActivo = (command) => {
  return `The command ${command} was already active in this group`
}
exports.YaActivoSi = (command, groupName) => {
  return `*${command} activated in the group* : ${groupName}`
}
exports.YaActivoNo = (command, groupName) => {
  return `*${command} deactivated in the group* : ${groupName}`
}
exports.ActiVar = () => {
  return `ACTIVATE [✓]`
}
exports.DesActiVar = () => {
  return `DEACTIVATE [X]`
}
exports.AdminBot = () => {
  return `*[ ! ] The bot has to be an administrator*`
}
exports.SoloCreador = () => {
  return `*[ ! ] This command can only be used by the creator of the bot*`
}
//⚡//
exports.Modo0 = () => {
  return `[ MODE 1 ]`
}
exports.Modo1 = () => {
  return `PRIVATE 🔒`
}
exports.Modo2 = () => {
  return `Public 🔓`
}
exports.Modo3 = () => {
  return `Activated public mode, now all participants can use the BOT`
}
exports.Modo4 = () => {
  return `Private mode activated, now only the creator of the bot can use it`
}
exports.ModNet0 = () => {
  return `[ MODE 2 ]`
}
exports.ModNet1 = () => {
  return `OFF-LINE 🚫`
}
exports.ModNet2 = () => {
  return `ON-LINE 🌐`
}
exports.ModNet3 = () => {
  return `Bot On-line mode, now all commands are available`
}
exports.ModNet4 = () => {
  return `Bot Off-line mode, now only some commands will be available`
}
exports.NoPriv1 = () => {
  return `Anti-Private mode disabled`
}
exports.NoPriv2 = () => {
  return `Anti-Private mode activated, now everyone who talks to the bot in private will be blocked`
}
//✍️//
exports.PreDit0 = () => {
  return `*[ ! ] Type only a symbol or number*`
}
exports.PreDit1 = () => {
  return `*[ ! ] Only one digit is accepted for the prefix [ ! ]*`
}
exports.PreDit2 = () => {
  return `The prefix was correctly altered ✓\nNew prefix:`
}
exports.NomBot0 = () => {
  return `*[ ! ] Type a name or nickname*`
}
exports.NomBot1 = () => {
  return `*[ ! ] The name must contain 15 characters maximum [ ! ]*`
}
exports.NomBot2 = () => {
  return `The bot name was successfully altered ✓\nNew name:`
}
exports.PrinCre0 = () => {
  return `*[ ! ] Write your name or nickname*`
}
exports.PrinCre1 = () => {
  return `*[ ! ] The name must contain 25 characters maximum [ ! ]*`
}
exports.PrinCre2 = () => {
  return `The creator's name was correctly altered ✓\nNew name:`
}
exports.MyRed0 = () => {
  return `*[ ! ] Place or paste your social networks*`
}
exports.MyRed1 = () => {
  return `*[ ! ] The text must contain 300 characters maximum [ ! ]*`
}
exports.MyRed2 = () => {
  return `The information for social networks has been edited :\n`
}
exports.UsLimit0 = () => {
  return `*[ ! ] Write the limit you want*\n_Current limit to use commands :_`
}
exports.UsLimit1 = () => {
  return `*[ ! ] only numbers accepted*`
}
exports.UsLimit2 = () => {
  return `*[ ! ] You cannot put a value lower than*`
}
exports.UsLimit3 = () => {
  return `*[ ! ] Only 5 characters maximum are accepted [ ! ]*`
}
exports.UsLimit4 = () => {
  return `Limit changed by the value of :`
}
exports.PfBot0 = () => {
  return `The bot profile was changed successfully`
}
exports.PfBot1 = () => {
  return `Previous profile : `
}
exports.ProCes = (pushname) => {
  return `_Processing, ${pushname} please wait..._`
}
exports.QuImage = (prefix, command) => {
  return `Send or Reply an image with the command ${prefix + command}`
}
exports.SuPrim = () => {
  return `*[ ! ] This action can only be used by replying to a recent message from the bot*`
}
exports.NoTexto = () => {
  return `*[ ! ] And the text?*`
}
exports.BcGrupos0 = (gmap) => {
  return `sending transmission to ${gmap.length} groups, ending in ${gmap.length * 1.5} seconds`
}
exports.BcGrupos1 = (gmap) => {
  return `Message transmitted to ${gmap.length} groups ✓`
}
exports.BcTodos0 = (tmap) => {
  return `Transmitting message in ${tmap.length} chats\nending in ${tmap.length * 1.5} seconds`
}
exports.BcTodos1 = () => {
  return `⚡ *Simultaneous message shared successfully :D*⚡`
}
exports.BanUser0 = () => {
  return `Banned user`
}
exports.BanUser1 = () => {
  return `Unbanned user`
}
//📝//
exports.CerrarGp0 = (pushname, prefix, command) => {
  return `*${pushname} At what time do you want to close the group?*\n\n_Usage example_ : \n${prefix + command} 10 seconds`
}
exports.CerrarGp1 = (UwU, pushname) => {
  return `*The group will close ${UwU}*\n_Action executed by : ${pushname}_`
}
exports.CerrarGp2 = () => {
  return `*[ Group closed successfully ✓ ]*`
}
exports.AbrirGp = () => {
  return `*[ Open group ✓ ]*`
}
exports.NomGp0 = () => {
  return `*[ ! ] Maximum characters is 25*`
}
exports.NomGp1 = (groupName) => {
  return `Group name changed successfully ✓\nNew name : [ ${groupName} ]`
}
exports.DesGp0 = () => {
  return `*[ ! ] Maximum characters 512*`
}
exports.DesGp1 = (nwn, groupDesc) => {
  return `Group description changed successfully ✓\nNew description : ${nwn}\n${groupDesc}`
}
exports.PfGp0 = () => {
  return `Group profile changed successfully`
}
exports.PfGp1 = () => {
  return `Previous image : `
}
//🧑‍💻//
exports.ToDos = (groupName, pushname, texto) => {
  return `⚡ *Summoning the members of the group* : ${groupName}\n*~> summoner* : _${pushname}_\n*~> Message* : _${texto ? texto : 'There is no :v'}_\n`
}
exports.DarP = (usuariop, pushname) => {
  return `*The participant @${usuariop} was made admin of the group ✓*\n_Action executed by ${pushname}_`
}
exports.QuitP = (usuarioq, pushname) => {
  return `*The administrator @${usuarioq} was demoted from being admin ✓*\n_Action executed by ${pushname}_`
}
exports.BanSer = (adiuser, pushname) => {
  return `*The participant @${adiuser} was removed from the group ✓*\n_Action executed by ${pushname}_`
}
exports.UsEnLinea = () => {
  return `=> [ Online User List ]\n=> Quantity : `
}
//
exports.Baneao = (senderNumber) => {
  return `${senderNumber} you are banned, now you will not be able to use the bot :v`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] Sorry ${pushname} you ran out of limits to continue using the bot T~T*`
}
exports.BotInfo = () => {
  return `[ INFO-BOT ]`
}
exports.GraciAs = () => {
  return `[ SUPPORT ]`
}
exports.MasCmds = () => {
  return `[ MORE COMMANDS ☰ ]`
}
exports.YaReg = () => {
  return `*[ ! ] You were already registered in my database*`
}
exports.MyReg0 = () => {
  return `*[ ! ] Please add a slash between name and age*\n" | "`
}
exports.MyReg1 = () => {
  return `*[ ! ] In age only numbers are accepted -.-*`
}
exports.MyReg2 = () => {
  return `*[ ! ] Bruh the name is too long ._.*`
}
exports.MyReg3 = () => {
  return `*[ ! ] Maximum age 30 years*`
}
exports.MyReg4 = () => {
  return `*[ ! ] Minimum age 13 years*`
}
exports.MyReg5 = (nwn, time, nomreg, pushname, edreg, sender, codereg) => {
  return `〘  *REGISTRO* 〙${nwn}\n❥Registration date and time \n❥${time}\n┏─━─━━─━─━━─━─\n╠≽️ *Registered Name* : *${nomreg}*\n╠≽️ *Name used in whatsapp* : *${pushname}*\n╠≽️ *Age* : *${edreg}*\n╠≽️ *Nº* : *wa.me/${sender.split("@")[0]}*\n┗─━─━━─━─━━─━─\n_Registration code_ : *${codereg}* `
}
exports.MyReg6 = () => {
  return `Have a great day! :D`
}
exports.CmdsR0 = () => {
  return `More commands`
}
exports.CmdsR1 = () => {
  return `Random-Menu`
}
exports.CmdsA0 = () => {
  return `Artistic`
}
exports.CmdsA1 = () => {
  return `Create-Logos`
}
exports.CmdsO0 = () => {
  return `Otaku/Anime`
}
exports.CmdsO1 = () => {
  return `Random-Anime`
}
exports.CmdsH0 = () => {
  return `Hentai/Anime`
}
exports.CmdsH1 = () => {
  return `The-Bible`
}
exports.MCmds0 = () => {
  return `Tap here ⚡`
}
exports.MCmds1 = () => {
  return `Select only one option`
}


/*
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
*/
