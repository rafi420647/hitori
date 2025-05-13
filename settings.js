const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/
/////////////////////// WELCOME SETTINGS ///////////////
global.wlcmimg = 'https://img2.teletype.in/files/1b/5f/1b5f0a94-4daf-4354-8239-53006bab1b80.jpeg'
global.leftimg = 'https://img1.teletype.in/files/80/37/8037ce95-98c9-41fc-90d6-23d0cc166dec.jpeg'
global.wlcm = true //UNTUK AUTO WELCOMENYA
global.textwlcm = `

𝐖𝐄𝐋𝐂𝐎𝐌𝐄!! 

𝐉𝐨𝐢𝐧 𝐒𝐪𝐮𝐚𝐝 𝐌𝐋 𝐲𝐚𝐚?? 𝐈𝐬𝐢 𝐟𝐨𝐫𝐦𝐚𝐭 𝐝𝐢 𝐛𝐚𝐰𝐚𝐡 𝐲𝐚𝐚𝐚!

- 𝐍𝐚𝐦𝐚: 
- 𝐔𝐦𝐮𝐫:
- 𝐀𝐬𝐤𝐨𝐭:
- 𝐓𝐮𝐣𝐮𝐚𝐧 𝐌𝐚𝐬𝐮𝐤 𝐒𝐐: 

𝐊𝐚𝐥𝐨 𝐬𝐮𝐝𝐚𝐡 𝐤𝐢𝐫𝐢𝐦 𝐬𝐬 𝐚𝐤𝐮𝐧 𝐦𝐥, 𝐚𝐤𝐮𝐧 𝐭𝐢𝐤𝐭𝐨𝐤, 𝐝𝐚𝐧 𝐟𝐨𝐭𝐨 𝐦𝐮𝐤𝐚 𝐧𝐲𝐚 𝐝𝐢𝐬𝐢𝐧𝐢 

𝐔𝐧𝐭𝐮𝐤 𝐂𝐍 𝐝𝐚𝐧 𝐁𝐢𝐨 𝐧𝐲𝐚 𝐝𝐢 𝐛𝐚𝐰𝐚𝐡 𝐢𝐧𝐢⬇️

𝟒𝟏𝟏 (nama) 𝐀𝐑𝐂𝐓𝐈𝐂

𝑷𝑨𝑹𝑻 𝑶𝑭 𝑨𝑹𝑪𝑻𝑰𝑪 𝑾𝑯𝑰𝑻𝑬 𝑾𝑶𝑳𝑽𝑬𝑺 

𝐁𝐚𝐜𝐚 𝐫𝐮𝐥𝐞𝐬 𝐲𝐚𝐧𝐠 𝐚𝐝𝐚 𝐝𝐢 𝐝𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐝𝐚𝐧 𝐭𝐨𝐥𝐨𝐧𝐠 𝐩𝐚𝐭𝐮𝐡𝐢 𝐫𝐮𝐥𝐞𝐬 𝐧𝐲𝐚 𝐲𝐚𝐚𝐚 𝐭𝐞𝐦𝐚𝐧²!! 

𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐃𝐚𝐭𝐚𝐧𝐠 𝐝𝐢 𝐀𝐫𝐜𝐭𝐢𝐜 𝐖𝐡𝐢𝐭𝐞 𝐖𝐨𝐥𝐯𝐞𝐬 𝐝𝐚𝐧 𝐬𝐞𝐦𝐨𝐠𝐚 𝐤𝐚𝐥𝐢𝐚𝐧 𝐛𝐞𝐭𝐚𝐡 𝐲𝐚𝐚 ヾ(＾-＾)ノ

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6282113821188'] //['628','628'] 2 owner
global.packname = 'Bot WhatsApp'
global.author = 'Nazedev'
global.botname = 'Naze Bot'
global.listprefix = ['+','!','.']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/Nazedev',
	gh: 'https://github.com/nazedev',
	gc: 'https://chat.whatsapp.com/B5qJIwZHm4VEYZJQE6iMwy',
	ch: '120363250409960161@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Privat Chat!',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}

// Lainnya

global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte']


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
