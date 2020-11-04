const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
 const tag = db.fetch(`ototag_${message.guild.id}`)  
 if(!tag) return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`)
 
 
  message.reply(`Bu özellik **başarıyla kapatıldı.** ${client.emojis.get("647760202875142154")}`)

 
  db.delete(`ototag_${message.guild.id}`)  
  db.delete(`isimtemizleyici_${message.guild.id}`) 
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ototag-kapat", "ototagkapat"], 
  permLevel: 0
};

exports.help = {
  name: 'oto-tag-kapat',
  description: 'taslak', 
  usage: 'Ototag-ayarla'
};
