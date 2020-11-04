const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 
const kisi = message.mentions.users.first()
if (!kisi) {
  return message.reply("**Kime Tokat Atcağını Yazmalısın**")
}
 const embed = new Discord.RichEmbed()
 .setDescription(`**${kisi} ${message.author.username} Seni Tokatladı Nasıl Hissediyorsun?**`)
 .setColor("BLUE")
 .setImage("https://www.muratkim.com/wp-content/uploads/2019/04/tenor.gif")
 .setTimestamp()
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};