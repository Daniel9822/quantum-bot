const fetch = require('node-fetch')
const chalk = require('chalk')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const Crypto = require('crypto')
const fs = require('fs')
const util = require('util')
const { fromBuffer } = require('file-type');

const spinner = { 
  "interval": 120,
  "frames": [
    "=           [NeKosmic ✓] 🕛",
    "===         [NeKosmic ✓] 🕐",
    "=====       [NeKosmic ✓] 🕑",
    "=======     [NeKosmic ✓] 🕒",
    "=====       [NeKosmic ✓] 🕓",
    "===         [NeKosmic ✓] 🕔",
    "=           [NeKosmic ✓] 🕕",
    "===         [NeKosmic ✓] 🕖",
    "=====       [NeKosmic ✓] 🕗",
    "=======     [NeKosmic ✓] 🕙",
    "=====       [NeKosmic ✓] 🕚",
    "===         [NeKosmic ✓] 🕛"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
	       }
	
        const success = (id, text) => {
	       spins.succeed(id, {text: text})
	       }
	
	    const close = (id, text) => {
	       spins.fail(id, {text: text})
           }

function format(...args) {
	return util.format(...args)
}

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Dia " : " Dias ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hora " : " Horas ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minuto " : " Minutos ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Segundo " : " Segundos ") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

const getTime = (format, date) => {
	if (date) {
		return moment(date).locale('pe').format(format)
	} else {
		return moment.tz('America/Lima').locale('pe').format(format)
	}
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const clockString = function(seconds) {
    let h = isNaN(seconds) ? '--' : Math.floor(seconds % (3600 * 24) / 3600)
    let m = isNaN(seconds) ? '--' : Math.floor(seconds % 3600 / 60)
    let s = isNaN(seconds) ? '--' : Math.floor(seconds % 60)
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		return e
	}
}

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

const logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('La entrada y la salida deben tener la misma longitud') //traducido :v
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

module.exports = { start, success, close, format, runtime, formatp, getTime, sleep, clockString, fetchJson, getBuffer, jsonformat, logic, parseMention, getRandom }

//============Auto Actualización :v=======================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.cyan(`\n\n${__filename} :\n[!] Fue actualizado con exito ✓\n\n`))
	delete require.cache[file]
	require(file)
})

