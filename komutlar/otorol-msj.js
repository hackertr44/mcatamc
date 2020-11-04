const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.has(`premium_${message.guild.id}`) == false) {
    message.channel.send(`<@${message.author.id}> Maalesef Premium Süresi Bitmiştir. Hizmetimizden Memnun Olduysanız Tekrar Alabilirsiniz \`!premium\``)
  } else {
  
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(client.emojis.get("647760202875142154") + ' Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `-oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send(client.emojis.get("647746144155467786") + ' Oto-Rol mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  
    
  }
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['oto-rol-msg'], 
  permLevel: 0
};

exports.help = {
  name: 'otorol-msg',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};