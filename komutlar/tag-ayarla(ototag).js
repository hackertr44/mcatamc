const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  let mesaj = args.slice(0).join(' ');

  if (!args[0]) {
return message.channel.send(`ototag Kullanımı Örnek \`!ototag 🔱| -uye-\``) 
}

db.set(`ototag_${message.guild.id}`, mesaj)
  message.channel.send(`
Oto Tag Sistemi Ayarlanmıştır.
Unutmayın Sunucuya Yeni Katılan Kullanıcılar içindir. Kapatmak İçin \`!ototagkapat\``)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ototag"], 
  permLevel: 0
};

exports.help = {
  name: 'oto-tag',
  description: 'sayaç', 
  usage: 'sayaç'
};
