const fs = require('fs')
const chalk = require('chalk')
const MyPkg = require('../../package.json')
const MyInfo = JSON.parse(fs.readFileSync('./informacion.json'))

exports.PanelMenu = (prefix, pushname, actividad, role, monospace, nwn) => {
  return `${monospace}< [ ${MyInfo.NombreDelBot} ] >${monospace}
╔═══════════
║❂ Waktu aktif : ${actividad}
║❂ Versi bot : ${MyPkg.version}
║❂ Pencipta : ${MyInfo.CoCreador}
║❂ Awalan : 「  ${prefix}  」
║❂ Klien : ${pushname}️
║❂ Peran Klien : ${role}
╚═══════════
${nwn}
~|-------------------------|~
⮕ *_PERINTAH_  ☷*
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
*║ _KONVERTER :_*
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
*║╰┬> AKTIVATOR*
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
*║╰┬> PERMAINAN*
*║╭╯*
*║├ ${prefix}deathnote*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _CMDS PENCIPTA :_*
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
*║╰┬> AKTIVATOR*
*║╭╯*
*║├ ${prefix}chatbot*
*║├ ${prefix}banchat*
*║╰┬> ~MODE KUAKER~*
*║ ~NOTE- Perintah-perintah ini dikunci oleh virus~*
*║ ~hati-hati saat menggunakannya!~*
*║╭╯*
*║├ ${prefix}c1*
*║╰┬> CANGGIH*
*║╭╯*
*║├ =>*
*║├ >*
*║├ $*
*║╰——————————*
*╚═══════════*
*╔═══════════*
*║ _LEBIH BANYAK PERINTAH TAMBAHAN :_*
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
┃➲ Kasus positif : ${CovidApi.cases}
┃✯ Pulih : ${CovidApi.recovered}
┃❥ Perjanjian : ${CovidApi.active}
┃✞ Almarhum : ${CovidApi.deaths}
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
╠═> PENGUNDUH
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
  return `${monospace}[ BUAT-LOGO ]${monospace}
 
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
  return `Panggilan ke nomor bot dilarang!\nHubungi pencipta : ${helpcall}`
}
exports.AutoSaludo = () => {
  return `*_Pencipta utama saya bergabung dengan grup_ ✓*\n*[ Selamat datang nwn ]*`
}
exports.Wlc1 = () => {
  return `Beri aku bintang`
}
exports.Wlc2 = () => {
  return `Pencipta`
}
exports.Wlc3 = (num, metadata, fechaCompleta, gpdesc) => {
  return `⚡ *Selamat datang @${num.split("@")[0]} ke grup hebat ini :*\n${metadata.subject}\n⚡ *Tanggal penerimaan : ${fechaCompleta}*\n⚡ _*Saya harap dan Anda suka tinggal di sini, jangan lupa untuk menghormati peserta dan aturannya*_ ;)\n\n*Norma kelompok saat ini :* \n${gpdesc}`
}
exports.Wlc4 = () => {
  return `SELAMAT TINGGAL... 😔`
}
exports.Wlc5 = (num) => {
  return `[ ! ] Meninggalkan grup : @${num.split("@")[0]}`
}
exports.NoSpam1 = () => {
  return `*Tunggu beberapa detik sebelum menggunakan perintah lain ✓*`
}
exports.NoSpam2 = (pushname) => {
  return `[ ! ] ${pushname} Tolong jangan menjenuhkan bot ;-;`
}
exports.NoReg = (pushname) => {
  return `[ ! ] ${pushname} Anda harus mendaftar untuk mulai menggunakan bot`
}
exports.PreFijo = () => {
  return `Awalan:`
}
exports.Erreply = () => {
  return `*[ ! ] Terjadi kesalahan tak terduga u.u [ ! ]*`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] ${pushname} Batas Anda untuk menggunakan bot habis ;-;*\nJika Anda naik level, mereka diberikan kepada Anda : ~+3 batas~`
}
exports.Limite = (pushname) => {
  return `*┏━━⊱ 「 MEMBATASI 」*
*┗⊱ _${pushname} Batas Anda yang tersisa adalah_*`
}
exports.NivelUp = (fechaCompleta, senderNumber, getLevel, getLevelingLevel, sender, per, getLevelingXp, role, role2) => {
  return `「 ⚡PENINGKATAN TINGKAT⚡  」\n\n➸ *Tanggal* : ${fechaCompleta}\n➸ *Pengguna* : ${senderNumber}\n➸ *Tingkat* : ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *Kemajuan tingkat : ${per}*\n➸ *XP* : ${getLevelingXp(sender)}\n➸ *Menurut XP Anda, Anda menjadi* : ${role}\n➸ *Tingkat kekuatan* : ${role2}\n\n⚡ *Bonus Naik Level :*\n_[ + 3 batas ]_`
}
exports.MinGp1 = () => {
  return `Minta dukungan atau bantuannya`
}
exports.MinGp2 = () => {
  return `*[ ! ] Maaf, jumlah minimum anggota yang diperlukan dalam grup harus :*`
}
exports.NoTraba1 = () => {
  return `Seorang administrator baru saja mengirim teks yang berisi banyak karakter -.-`
}
exports.NoTraba2 = (saltos, eliminar, pushname) => {
  return `Tandai obrolan sebagai telah dibaca ✓\n${saltos}\n=> Nomor : ${eliminar}\n=> Alias : ${pushname}\n[ ! ] Anda baru saja mengirim teks yang berisi banyak karakter yang dapat menyebabkan perangkat mogok`
}
exports.NoPriv = (privcre) => {
  return `[ ! ] Obrolan pribadi dilarang [ ! ]\nPencipta saya jika Anda membutuhkan bantuan : ${privcre}`
}
exports.NoLinks1 = () => {
  return `Untung tautan yang terdeteksi berasal dari grup ini owo`
}
exports.NoLinks2 = () => {
  return `[ ! ] Pengguna ini tidak dapat dihapus`
}
exports.NoLinks3 = () => {
  return `Untungnya saya bukan administrator, saya tidak akan dapat menghapus Anda :v`
}
//♻️//
exports.Pong = (conexiont) => {
  return `kecepatan respon : ${conexiont} milidetik`
}
exports.NoReg2 = (prefix) => {
  return `*[ ! ] Anda tidak terdaftar di database saya*\n\n_Contoh untuk mendaftar_ :\n${prefix}rg NamaAnda|UsiaAnda`
}
exports.SoloGp = () => {
  return `*[ ! ] Perintah ini hanya dapat digunakan dalam grup*`
}
exports.SoloAdm = () => {
  return `*[ ! ] Perintah ini hanya dapat digunakan oleh administrator*`
}
exports.YaActivo = (command) => {
  return `Perintah ${command} sudah aktif di grup ini`
}
exports.YaActivoSi = (command, groupName) => {
  return `*${command} diaktifkan di grup* : ${groupName}`
}
exports.YaActivoNo = (command, groupName) => {
  return `*${command} dinonaktifkan di grup* : ${groupName}`
}
exports.ActiVar = () => {
  return `MENGAKTIFKAN [✓]`
}
exports.DesActiVar = () => {
  return `MENONAKTIFKAN [X]`
}
exports.AdminBot = () => {
  return `*[ ! ] Bot harus menjadi administrator*`
}
exports.SoloCreador = () => {
  return `*[ ! ] Perintah ini hanya dapat digunakan oleh pembuat bot*`
}
//⚡//
exports.Modo0 = () => {
  return `[ MODE 1 ]`
}
exports.Modo1 = () => {
  return `PRIBADI 🔒`
}
exports.Modo2 = () => {
  return `PUBLIK 🔓`
}
exports.Modo3 = () => {
  return `Mode publik diaktifkan, sekarang semua peserta dapat menggunakan bot`
}
exports.Modo4 = () => {
  return `Mode pribadi diaktifkan, sekarang hanya pembuat bot yang dapat menggunakannya`
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
  return `Mode Bot In-Line, sekarang semua perintah tersedia`
}
exports.ModNet4 = () => {
  return `Mode Bot Off-line, sekarang hanya beberapa perintah yang tersedia`
}
exports.NoPriv1 = () => {
  return `Mode Anti-Pribadi dinonaktifkan`
}
exports.NoPriv2 = () => {
  return `Mode Anti-Pribadi diaktifkan, sekarang semua orang yang berbicara dengan bot secara pribadi akan diblokir`
}
//✍️//
exports.PreDit0 = () => {
  return `*[ ! ] Ketik hanya simbol atau angka*`
}
exports.PreDit1 = () => {
  return `*[ ! ] Hanya satu digit yang diterima untuk awalan [ ! ]*`
}
exports.PreDit2 = () => {
  return `Awalan diubah dengan benar ✓\nAwalan baru:`
}
exports.NomBot0 = () => {
  return `*[ ! ] Ketik nama atau nama panggilan*`
}
exports.NomBot1 = () => {
  return `*[ ! ] Nama harus berisi maksimal 15 karakter [ ! ]*`
}
exports.NomBot2 = () => {
  return `Nama bot berhasil diubah ✓\nNama baru:`
}
exports.PrinCre0 = () => {
  return `*[ ! ] Tulis nama atau nama panggilan Anda*`
}
exports.PrinCre1 = () => {
  return `*[ ! ] Nama harus berisi maksimal 25 karakter [ ! ]*`
}
exports.PrinCre2 = () => {
  return `Nama pencipta diubah dengan benar ✓\nNama baru:`
}
exports.MyRed0 = () => {
  return `*[ ! ] Tempatkan atau tempel jejaring sosial Anda*`
}
exports.MyRed1 = () => {
  return `*[ ! ] Teks harus berisi maksimal 300 karakter [ ! ]*`
}
exports.MyRed2 = () => {
  return `Informasi untuk jejaring sosial telah diedit :\n`
}
exports.UsLimit0 = () => {
  return `*[ ! ] Tulis batas yang Anda inginkan*\n_Batas saat ini untuk menggunakan perintah :_`
}
exports.UsLimit1 = () => {
  return `*[ ! ] Hanya nomor yang diterima*`
}
exports.UsLimit2 = () => {
  return `*[ ! ] Anda tidak dapat memberi nilai lebih rendah dari*`
}
exports.UsLimit3 = () => {
  return `*[ ! ] Hanya maksimal 5 karakter yang diterima [ ! ]*`
}
exports.UsLimit4 = () => {
  return `Batas diubah oleh nilai :`
}
exports.PfBot0 = () => {
  return `Profil bot berhasil diubah`
}
exports.PfBot1 = () => {
  return `Profil sebelumnya : `
}
exports.ProCes = (pushname) => {
  return `_Pengolahan, ${pushname} Harap tunggu..._`
}
exports.QuImage = (prefix, command) => {
  return `Kirim atau Balas gambar dengan perintah ${prefix + command}`
}
exports.SuPrim = () => {
  return `*[ ! ] Tindakan ini hanya dapat digunakan dengan membalas pesan terbaru dari bot*`
}
exports.NoTexto = () => {
  return `*[ ! ] Dan teksnya?*`
}
exports.BcGrupos0 = (gmap) => {
  return `Mengirimkan transmisi ke ${gmap.length} kelompok, Berakhir di ${gmap.length * 1.5} detik`
}
exports.BcGrupos1 = (gmap) => {
  return `Pesan dikirim ke ${gmap.length} kelompok ✓`
}
exports.BcTodos0 = (tmap) => {
  return `Mengirimkan pesan dalam ${tmap.length} chats\nBerakhir di ${tmap.length * 1.5} detik`
}
exports.BcTodos1 = () => {
  return `⚡ *Pesan simultan berhasil dibagikan :D*⚡`
}
exports.BanUser0 = () => {
  return `Pengguna yang diblokir`
}
exports.BanUser1 = () => {
  return `Pengguna yang tidak diblokir`
}
//📝//
exports.CerrarGp0 = (pushname, prefix, command) => {
  return `*${pushname} Jam berapa Anda ingin menutup grup?*\n\n_contoh penggunaan_ : \n${prefix + command} 10 detik`
}
exports.CerrarGp1 = (UwU, pushname) => {
  return `*Grup akan ditutup ${UwU}*\n_Tindakan yang dilakukan oleh : ${pushname}_`
}
exports.CerrarGp2 = () => {
  return `*[ Grup berhasil ditutup ✓ ]*`
}
exports.AbrirGp = () => {
  return `*[ Grup terbuka ✓ ]*`
}
exports.NomGp0 = () => {
  return `*[ ! ] Marakter maksimum adalah 25*`
}
exports.NomGp1 = (groupName) => {
  return `Nama grup berhasil diubah ✓\nNama baru : [ ${groupName} ]`
}
exports.DesGp0 = () => {
  return `*[ ! ] Karakter maksimum 512*`
}
exports.DesGp1 = (nwn, groupDesc) => {
  return `Deskripsi grup berhasil diubah ✓\nDeskripsi baru : ${nwn}\n${groupDesc}`
}
exports.PfGp0 = () => {
  return `Profil grup berhasil diubah`
}
exports.PfGp1 = () => {
  return `Gambar sebelumnya : `
}
//🧑‍💻//
exports.ToDos = (groupName, pushname, texto) => {
  return `⚡ *Memanggil anggota grup* : ${groupName}\n*~> Pemanggil* : _${pushname}_\n*~> Pesan* : _${texto ? texto : 'Tidak ada :v'}_\n`
}
exports.DarP = (usuariop, pushname) => {
  return `*Peserta @${usuariop} dijadikan admin grup ✓*\n_Tindakan yang dilakukan oleh ${pushname}_`
}
exports.QuitP = (usuarioq, pushname) => {
  return `*Administrator @${usuarioq} diturunkan dari admin ✓*\n_Tindakan yang dilakukan oleh ${pushname}_`
}
exports.BanSer = (adiuser, pushname) => {
  return `*Peserta @${adiuser} telah dikeluarkan dari grup ✓*\n_Tindakan yang dilakukan oleh ${pushname}_`
}
exports.UsEnLinea = () => {
  return `=> [ Daftar Pengguna Online ]\n=> Kuantitas : `
}
//
exports.Baneao = (senderNumber) => {
  return `${senderNumber} Anda dilarang, sekarang Anda tidak akan dapat menggunakan bot :v`
}
exports.SinLimite = (pushname) => {
  return `*[ ! ] Maaf ${pushname} Anda kehabisan batas untuk terus menggunakan bot T~T*`
}
exports.BotInfo = () => {
  return `[ INFO-BOT ]`
}
exports.GraciAs = () => {
  return `[ MENDUKUNG ]`
}
exports.MasCmds = () => {
  return `[ PERINTAH LEBIH BANYAK ☰ ]`
}
exports.YaReg = () => {
  return `*[ ! ] Anda sudah terdaftar di database saya*`
}
exports.MyReg0 = () => {
  return `*[ ! ] Tolong tambahkan garis miring antara nama dan usia*\n" | "`
}
exports.MyReg1 = () => {
  return `*[ ! ] Di usia hanya angka yang diterima -.-*`
}
exports.MyReg2 = () => {
  return `*[ ! ] Bru namanya terlalu panjang ._.*`
}
exports.MyReg3 = () => {
  return `*[ ! ] Usia maksimal 30 tahun*`
}
exports.MyReg4 = () => {
  return `*[ ! ] Usia minimal 13 tahun*`
}
exports.MyReg5 = (nwn, time, nomreg, pushname, edreg, sender, codereg) => {
  return `〘  *REGISTRO* 〙${nwn}\n❥Tanggal dan waktu pendaftaran \n❥${time}\n┏─━─━━─━─━━─━─\n╠≽️ *Nama terdaftar* : *${nomreg}*\n╠≽️ *Nama yang digunakan di whatsapp* : *${pushname}*\n╠≽️ *Usia* : *${edreg}*\n╠≽️ *Nº* : *wa.me/${sender.split("@")[0]}*\n┗─━─━━─━─━━─━─\n_Kode registrasi_ : *${codereg}* `
}
exports.MyReg6 = () => {
  return `Semoga harimu menyenangkan! :D`
}
exports.CmdsR0 = () => {
  return `Lebih banyak perintah`
}
exports.CmdsR1 = () => {
  return `Random-Menu`
}
exports.CmdsA0 = () => {
  return `Artistik`
}
exports.CmdsA1 = () => {
  return `Buat-Logo`
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
  return `La-Biblia`
}
exports.MCmds0 = () => {
  return `Ketuk di sini ⚡`
}
exports.MCmds1 = () => {
  return `Pilih hanya satu pilihan`
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
