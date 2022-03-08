const fs = require('fs')
const chalk = require('chalk')
const MyPkg = require('../../package.json')
const MyInfo = JSON.parse(fs.readFileSync('./informacion.json'))

exports.PanelMenu = (prefix, pushname, actividad, role, monospace, nwn) => {
  return `${monospace}< [ ${MyInfo.NombreDelBot} ] >${monospace}
╔═══════════
║❂ Tempo ativo : ${actividad}
║❂ Versão do bot : ${MyPkg.version}
║❂ O Criador : ${MyInfo.CoCreador}
║❂ Prefixo : 「  ${prefix}  」
║❂ Cliente : ${pushname}️
║❂ Função do cliente : ${role}
╚═══════════
${nwn}
~|-------------------------|~
⮕ *_COMANDOS_  ☷*
~|-------------------------|~

*╔═══════════*
*║ _MULTIMÍDIA :_*
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
*║ _PASSATEMPO :_*
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
*║ _CONVERSOR :_*
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
*║╰┬> ATIVADORES*
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
*║╰┬> JOGOS*
*║╭╯*
*║├ ${prefix}deathnote*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _CMDS DO CRIADOR :_*
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
*║╰┬> ATIVADORES*
*║╭╯*
*║├ ${prefix}chatbot*
*║├ ${prefix}banchat*
*║╰┬> ~MODO KUAKER~*
*║ ~NOTE- Esses comandos estão bloqueados por vírus~*
*║ ~cuidado ao usá-los!~*
*║╭╯*
*║├ ${prefix}c1*
*║╰┬> AVANÇADO*
*║╭╯*
*║├ =>*
*║├ >*
*║├ $*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _MAIS COMANDOS EXTRAS :_*
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
  return `┏「 DADOS - COVID19 」─┓
┃➲ Casos positivos : ${CovidApi.cases}
┃✯ Recuperado : ${CovidApi.recovered}
┃❥ Tratados : ${CovidApi.active}
┃✞ Morto : ${CovidApi.deaths}
┗─━─━ 「 🌎 」 ━─━─┛`
}
exports.PanelMenu2 = (prefix, monospace) => {
  return `${monospace}[ MENU-RANDOM ]${monospace}
 
╔═══════════
║
╠═> MULTIMÍDIA
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
╠═> PASSATEMPO
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
  return `${monospace}[ CRIAR-LOGOTIPO ]${monospace}
 
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
  return `As chamadas para o número do bot são proibidas!\nEntre em contato com o criador : ${helpcall}`
}
exports.AutoSaludo = () => {
  return `*_Meu criador principal entrou no grupo_ ✓*\n*[ Receber nwn ]*`
}
exports.Wlc1 = () => {
  return `Me dê uma estrela`
}
exports.Wlc2 = () => {
  return `O Criador`
}
exports.Wlc3 = (num, metadata, fechaCompleta, gpdesc) => {
  return `⚡ *Receber @${num.split("@")[0]} a este grande grupo :*\n${metadata.subject}\n⚡ *Data de admissão : ${fechaCompleta}*\n⚡ _*Espero e que goste da sua estadia aqui, não se esqueça de respeitar os participantes e as regras*_ ;)\n\n*Normas do grupo atualmente :* \n${gpdesc}`
}
exports.Wlc4 = () => {
  return `TCHAU... 😔`
}
exports.Wlc5 = (num) => {
  return `[ ! ] Deixou o grupo : @${num.split("@")[0]}`
}
exports.NoSpam1 = () => {
  return `*Aguarde alguns segundos antes de usar outro comando ✓*`
}
exports.NoSpam2 = (pushname) => {
  return `[ ! ] ${pushname} Por favor, não sature o bot ;-;`
}
exports.NoReg = (pushname) => {
  return `[ ! ] ${pushname} Você deve se registrar para começar a usar o bot`
}
exports.PreFijo = () => {
  return `Prefixo:`
}
exports.Erreply = () => {
  return `*[ ! ] Um erro inesperado ocorreu u.u [ ! ]*`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] ${pushname} Seu limite para usar o bot está esgotado ;-;*\nSe você subir de nível, eles são dados a você : ~+3 limite~`
}
exports.Limite = (pushname) => {
  return `*┏━━⊱ 「 LIMITE 」*
*┗⊱ _${pushname} Seu limite restante é_*`
}
exports.NivelUp = (fechaCompleta, senderNumber, getLevel, getLevelingLevel, sender, per, getLevelingXp, role, role2) => {
  return `「 ⚡ATUALIZAÇÃO DE NÍVEL⚡  」\n\n➸ *Data* : ${fechaCompleta}\n➸ *Do utilizador* : ${senderNumber}\n➸ *Nível* : ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *Progresso de nível : ${per}*\n➸ *XP* : ${getLevelingXp(sender)}\n➸ *De acordo com o seu XP você se torna* : ${role}\n➸ *Nível de poder* : ${role2}\n\n⚡ *Bônus de subida de nível :*\n_[ + 3 limite ]_`
}
exports.MinGp1 = () => {
  return `Peça apoio ou ajuda`
}
exports.MinGp2 = () => {
  return `*[ ! ] Desculpe, o número mínimo de membros exigido no grupo deve ser :*`
}
exports.NoTraba1 = () => {
  return `Um administrador acabou de enviar um texto que contém muitos caracteres -.-`
}
exports.NoTraba2 = (saltos, eliminar, pushname) => {
  return `Marcar bate-papo como lido ✓\n${saltos}\n=> O número : ${eliminar}\n=> Alias : ${pushname}\n[ ! ] Você acabou de enviar um texto que contém muitos caracteres que podem causar falhas no dispositivo`
}
exports.NoPriv = (privcre) => {
  return `[ ! ] O bate-papo privado é proibido [ ! ]\nMeu criador caso precise de ajuda : ${privcre}`
}
exports.NoLinks1 = () => {
  return `O bom é que o link detectado é deste grupo owo`
}
exports.NoLinks2 = () => {
  return `[ ! ] Este usuário não pode ser excluído`
}
exports.NoLinks3 = () => {
  return `Felizmente, não sou administrador, não poderei excluir você :v`
}
//♻️//
exports.Pong = (conexiont) => {
  return `velocidade de resposta : ${conexiont} milissegundos`
}
exports.NoReg2 = (prefix) => {
  return `*[ ! ] Você não está cadastrado em meu banco de dados*\n\n_Exemplo para registrar_ :\n${prefix}rg SeuNome|SuaIdade`
}
exports.SoloGp = () => {
  return `*[ ! ] Este comando só pode ser usado em grupos*`
}
exports.SoloAdm = () => {
  return `*[ ! ] Este comando só pode ser usado por administradores*`
}
exports.YaActivo = (command) => {
  return `O comando ${command} já estava ativo neste grupo`
}
exports.YaActivoSi = (command, groupName) => {
  return `*${command} ativado no grupo* : ${groupName}`
}
exports.YaActivoNo = (command, groupName) => {
  return `*${command} desativado no grupo* : ${groupName}`
}
exports.ActiVar = () => {
  return `ATIVAR [✓]`
}
exports.DesActiVar = () => {
  return `DESATIVAR [X]`
}
exports.AdminBot = () => {
  return `*[ ! ] O bot tem que ser um administrador*`
}
exports.SoloCreador = () => {
  return `*[ ! ] Este comando só pode ser usado pelo criador do bot*`
}
//⚡//
exports.Modo0 = () => {
  return `[ MODO 1 ]`
}
exports.Modo1 = () => {
  return `PRIVADO 🔒`
}
exports.Modo2 = () => {
  return `PUBLICO 🔓`
}
exports.Modo3 = () => {
  return `Modo público ativado, agora todos os participantes podem usar o bot`
}
exports.Modo4 = () => {
  return `Modo privado ativado, agora apenas o criador do bot pode usá-lo`
}
exports.ModNet0 = () => {
  return `[ MODO 2 ]`
}
exports.ModNet1 = () => {
  return `DESLIGADA 🚫`
}
exports.ModNet2 = () => {
  return `ON-LINE 🌐`
}
exports.ModNet3 = () => {
  return `Modo Bot In-Line, agora todos os comandos estão disponíveis`
}
exports.ModNet4 = () => {
  return `Modo Bot Offline, agora apenas alguns comandos estarão disponíveis`
}
exports.NoPriv1 = () => {
  return `Modo anti-privado desativado`
}
exports.NoPriv2 = () => {
  return `Modo anti-privado ativado, agora todos que falarem com o bot em particular serão bloqueados`
}
//✍️//
exports.PreDit0 = () => {
  return `*[ ! ] Digite apenas um símbolo ou número*`
}
exports.PreDit1 = () => {
  return `*[ ! ] Apenas um dígito é aceito para o prefixo [ ! ]*`
}
exports.PreDit2 = () => {
  return `O prefixo foi corretamente alterado ✓\nNovo prefixo:`
}
exports.NomBot0 = () => {
  return `*[ ! ] Digite um nome ou apelido*`
}
exports.NomBot1 = () => {
  return `*[ ! ] O nome deve conter no máximo 15 caracteres [ ! ]*`
}
exports.NomBot2 = () => {
  return `O nome do bot foi alterado com sucesso ✓\nNovo nome:`
}
exports.PrinCre0 = () => {
  return `*[ ! ] Escreva seu nome ou apelido*`
}
exports.PrinCre1 = () => {
  return `*[ ! ] O nome deve conter no máximo 25 caracteres [ ! ]*`
}
exports.PrinCre2 = () => {
  return `O nome do criador foi alterado corretamente ✓\nNovo nome:`
}
exports.MyRed0 = () => {
  return `*[ ! ] Coloque ou cole suas redes sociais*`
}
exports.MyRed1 = () => {
  return `*[ ! ] O texto deve conter no máximo 300 caracteres [ ! ]*`
}
exports.MyRed2 = () => {
  return `As informações para redes sociais foram editadas :\n`
}
exports.UsLimit0 = () => {
  return `*[ ! ] Escreva o limite desejado*\n_Limite atual para usar comandos :_`
}
exports.UsLimit1 = () => {
  return `*[ ! ] Apenas números aceitos*`
}
exports.UsLimit2 = () => {
  return `*[ ! ] Você não pode colocar um valor menor que*`
}
exports.UsLimit3 = () => {
  return `*[ ! ] Apenas 5 caracteres no máximo são aceitos [ ! ]*`
}
exports.UsLimit4 = () => {
  return `Limite alterado pelo valor de :`
}
exports.PfBot0 = () => {
  return `O perfil do bot foi alterado com sucesso`
}
exports.PfBot1 = () => {
  return `Perfil anterior : `
}
exports.ProCes = (pushname) => {
  return `_Em processamento, ${pushname} por favor espere..._`
}
exports.QuImage = (prefix, command) => {
  return `Envie ou responda uma imagem com o comando ${prefix + command}`
}
exports.SuPrim = () => {
  return `*[ ! ] Esta ação só pode ser usada respondendo a uma mensagem recente do bot*`
}
exports.NoTexto = () => {
  return `*[ ! ] E o texto?*`
}
exports.BcGrupos0 = (gmap) => {
  return `Enviando transmissão para ${gmap.length} grupos, Acabando ${gmap.length * 1.5} segundos`
}
exports.BcGrupos1 = (gmap) => {
  return `Mensagem transmitida para ${gmap.length} grupos ✓`
}
exports.BcTodos0 = (tmap) => {
  return `Transmitindo mensagem em ${tmap.length} chats\nAcabando ${tmap.length * 1.5} segundos`
}
exports.BcTodos1 = () => {
  return `⚡ *Mensagem simultânea compartilhada com sucesso :D*⚡`
}
exports.BanUser0 = () => {
  return `Usuário banido`
}
exports.BanUser1 = () => {
  return `usuário não banido`
}
//📝//
exports.CerrarGp0 = (pushname, prefix, command) => {
  return `*${pushname} A que horas pretende encerrar o grupo?*\n\n_Exemplo de uso_ : \n${prefix + command} 10 segundos`
}
exports.CerrarGp1 = (UwU, pushname) => {
  return `*O grupo vai fechar ${UwU}*\n_Ação executada por : ${pushname}_`
}
exports.CerrarGp2 = () => {
  return `*[ Grupo fechado com sucesso ✓ ]*`
}
exports.AbrirGp = () => {
  return `*[ Grupo aberto ✓ ]*`
}
exports.NomGp0 = () => {
  return `*[ ! ] O máximo de caracteres é 25*`
}
exports.NomGp1 = (groupName) => {
  return `Nome do grupo alterado com sucesso ✓\nNovo nome : [ ${groupName} ]`
}
exports.DesGp0 = () => {
  return `*[ ! ] Máximo de caracteres 512*`
}
exports.DesGp1 = (nwn, groupDesc) => {
  return `Descrição do grupo alterada com sucesso ✓\nNova descrição : ${nwn}\n${groupDesc}`
}
exports.PfGp0 = () => {
  return `Perfil do grupo alterado com sucesso`
}
exports.PfGp1 = () => {
  return `Imagem anterior : `
}
//🧑‍💻//
exports.ToDos = (groupName, pushname, texto) => {
  return `⚡ *Convocando os membros do grupo* : ${groupName}\n*~> Invocador* : _${pushname}_\n*~> Mensagem* : _${texto ? texto : 'Não há :v'}_\n`
}
exports.DarP = (usuariop, pushname) => {
  return `*O participante @${usuariop} foi feito administrador do grupo ✓*\n_Ação executada por ${pushname}_`
}
exports.QuitP = (usuarioq, pushname) => {
  return `*O administrador @${usuarioq} foi rebaixado de administrador ✓*\n_Accion ejecutada por ${pushname}_`
}
exports.BanSer = (adiuser, pushname) => {
  return `*O participante @${adiuser} foi removido do grupo ✓*\n_Ação executada por ${pushname}_`
}
exports.UsEnLinea = () => {
  return `=> [ Lista de usuários on-line ]\n=> Quantidade : `
}
//
exports.Baneao = (senderNumber) => {
  return `${senderNumber} você está banido, agora você não poderá usar o bot :v`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] Sinto muito ${pushname} você ficou sem limites para continuar usando o bot T~T*`
}
exports.BotInfo = () => {
  return `[ INFO-BOT ]`
}
exports.GraciAs = () => {
  return `[ APOIO ]`
}
exports.MasCmds = () => {
  return `[ MAIS COMANDOS ☰ ]`
}
exports.YaReg = () => {
  return `*[ ! ] Você já estava cadastrado no meu banco de dados*`
}
exports.MyReg0 = () => {
  return `*[ ! ] Adicione uma barra entre o nome e a idade*\n" | "`
}
exports.MyReg1 = () => {
  return `*[ ! ] Na idade apenas números são aceitos -.-*`
}
exports.MyReg2 = () => {
  return `*[ ! ] Bruh o nome é muito longo ._.*`
}
exports.MyReg3 = () => {
  return `*[ ! ] Idade máxima 30 anos*`
}
exports.MyReg4 = () => {
  return `*[ ! ] Idade mínima 13 anos*`
}
exports.MyReg5 = (nwn, time, nomreg, pushname, edreg, sender, codereg) => {
  return `〘  *REGISTRO* 〙${nwn}\n❥Data e hora de inscrição \n❥${time}\n┏─━─━━─━─━━─━─\n╠≽️ *Nome registrado* : *${nomreg}*\n╠≽️ *Nome usado no whatsapp* : *${pushname}*\n╠≽️ *Idade* : *${edreg}*\n╠≽️ *Nº* : *wa.me/${sender.split("@")[0]}*\n┗─━─━━─━─━━─━─\n_Código de Registo_ : *${codereg}* `
}
exports.MyReg6 = () => {
  return `Que você tenha um excelente dia! :D`
}
exports.CmdsR0 = () => {
  return `Mais comandos`
}
exports.CmdsR1 = () => {
  return `Random-Menu`
}
exports.CmdsA0 = () => {
  return `Artístico`
}
exports.CmdsA1 = () => {
  return `Criar-Logos`
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
  return `A-Bíblia`
}
exports.MCmds0 = () => {
  return `Toque aqui ⚡`
}
exports.MCmds1 = () => {
  return `Selecione apenas uma opção`
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
