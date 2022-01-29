
//test

const {
    default: makeWASocket,
    useSingleFileAuthState,
    DisconnectReason
} = require('@adiwajshing/baileys')
const { 
state,
saveState 
} = useSingleFileAuthState('./session.json')
//
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const moment = require("moment-timezone")
//
const { color } = require('./libreria/color')
const { getGroupAdmins } = require('./libreria/functions')
//
prefix = '.'
//
async function start() {
	const client = makeWASocket({
		printQRInTerminal: true,
		logger: pino({ level: 'silent' }),
		browser: ['Test-MD', 'Chrome', '3.0'],
		auth: state
	})
//
client.ev.on('connection.update', async (conexion) => {
        const { connection, lastDisconnect } = conexion;
        if (connection === 'open') {
            console.log('\nCONECTADO UwUr\n')
            // 
        }
        
        if (connection == 'connecting') {
        	console.log('CONECTANDO... U.U')
        } else if (connection === 'close') {
            console.log(color('[!]','red'), color('Conexion perdida, reconectando... u.u', 'red'))
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
                ? NKstart()
                : console.log(color('[!] Desconectado [!]', 'red'))
                }     
        })
//
client.ev.on('creds.update', saveState)
//
client.ev.on('messages.upsert', async (up) => {
       try {
            if (!up.messages) return
            const mek = up.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const fromMe = mek.key.fromMe
            const content = JSON.stringify(mek.message)
            const from = mek.key.remoteJid
            const type = Object.keys(mek.message)[0]
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && mek.message.templateButtonReplyMessage.selectedId ? mek.message.templateButtonReplyMessage.selectedId : (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : ""
            const body = (type === 'conversation') ? mek.message.conversation : (type == 'imageMessage') ? mek.message.imageMessage.caption : (type == 'videoMessage') ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId || (type == 'listResponseMessage' ? mek.msg.singleSelectReply.selectedRowId : '') || mek.msg.text || mek.msg.caption || mek.msg || '') : ''
            const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
             const time = moment(Date.now()).tz('America/Lima').locale('pe').format('DD/MM/YY HH:mm:ss')
             const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
             const isCmd = body.startsWith(prefix)
             const args = body.trim().split(/ +/).slice(1)
             const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
             const ownerNumber = ["51995386439@s.whatsapp.net"]
             const isGroup = from.endsWith('@g.us')
             const sender = isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
             const isOwner = ownerNumber.includes(sender)
             const pushname =  mek.pushName || "A/Z"
              const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
              const groupId = isGroup ? groupMetadata.id : ""
              const groupOwner = isGroup ? groupMetadata.owner : ""
              const groupDesc = isGroup ? groupMetadata.desc : ""
              const groupName = isGroup ? groupMetadata.subject : ""
              const groupMembers = isGroup ? groupMetadata.participants : ""
              const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
//
          if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEJECUTANDO\x1b[1;37m]', color("<["), chalk.rgb(255,131,0).underline(command), color("]>"), 'Por', color(pushname), 'Chat', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time), color("\n[_>]"))
	  if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;34mRECIVIDO\x1b[1;37m]', color("{"), chalk.rgb(255,131,0).underline(budy || type), color("}"), 'De', color(sender.split('@')[0]), 'Chat', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time))
	  if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEJECUTANDO\x1b[1;37m]', color("<["), chalk.rgb(255,131,0).underline(command), color("]>"), 'Por', color(pushname), 'En el Grupo', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time), color("\n[_>]"))
	  if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;34mRECIVIDO\x1b[1;37m]', color("{"), chalk.rgb(255,131,0).underline(budy || type), color("}"), 'De', color(sender.split('@')[0]), 'En el Grupo', color(isGroup ? groupName : 'Privado'), 'Fecha', color(time))
//

const reply = (texto) => {
            client.sendMessage(from, { text: texto }, {quoted: mek })
        }

//

switch (command) {
        	
case 'test':
case 'menu':
reply(`Hola ${pushname}!`)
break

//
default:
                if (budy.startsWith('=>')) {
                    if (!isOwner && !botNumber) return reply(`*[ ! ] Solo el creador puede usar este comando*`)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner && !botNumber) return reply(`*[ ! ] Solo el creador puede usar este comando*`)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner && !botNumber) return reply(`*[ ! ] Solo el creador puede usar este comando*`)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
}
    } catch (e) {
		e = String(e)
        console.log(color('\n[ERROR]', 'red'), color(e+'\n', 'white'))
}
})
}
start()
