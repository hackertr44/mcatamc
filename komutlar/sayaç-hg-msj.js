const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. `Örnek: -sayac-hg-msg -server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send(client.emojis.get("647746144155467786") + ' Sayaç Hoşgeldin mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`sayacHG_${message.guild.id}`, mesaj)  
    
  }
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sayac-hg-msg'], 
  permLevel: 0
};

exports.help = {
  name: 'sayac-hg-msg',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};