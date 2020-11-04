const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 const embed = new Discord.RichEmbed()
 .setDescription(`** ${message.author.username}! Buyur Kardeşim Tokenin**`)
 .setColor("BLUE")
 .setImage("https://www.muratkim.com/wp-content/uploads/2019/04/ek%C5%9Fi-s%C3%B6zl%C3%BCk-yazar%C4%B1y%C4%B1m-buradakiler-beni-ele%C5%9Ftiremez_836814.gif")
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
  name: 'token',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};