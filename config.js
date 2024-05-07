const fs = require('fs')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

global.d = new Date()
global.calender = d.toLocaleDateString('id')

    //General Settings 
global.apikey = 'ptlc_qFF9UdwAkMplbf6mDmpKGT7TvCLqmjpL6ZTSQaiqbhJ' //Ganti pake apikey panel lu
global.capikey = 'ptlc_qFF9UdwAkMplbf6mDmpKGT7TvCLqmjpL6ZTSQaiqbhJ' //Ganti Pake Capikey Panel Lu
global.domain = 'https://order.jasavirtex.pro'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu
global.prefa = ['','!','.',',','🐤','🗿']
global.Contributor = '254795363396','','',
global.NamaOwner = 'mwas' //gausah diganti 
global.sessionName = 'ryokunsession'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𝕾𝖕𝖎𝖉𝖊𝖗-𝕸𝕯' //ganti aj klo mau
global.author = '𝕾𝖕𝖎𝖉𝖊𝖗' //ganti aj klo mau
global.packname = 'mwas' //ganti aj klo mau
global.yt = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk' //gausah diganti
global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`

global.country = `254`

global.system = {
    gmail: `samuelcircute@gmail.com`,
}

   //Respon
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})