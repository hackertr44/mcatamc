const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

 
    const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("EŞŞEK-AT", client.user.avatarURL)
.setColor("BLUE")
.setTitle("EŞŞEK-AT BOT")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")
.setDescription("Botun gelişmesinde bize en değerli desteği verebilirsin ve destek sunucusunda özel rol kazanabilirsin :)")
 .addField("Buradan oy verebilirsin;", "https://goo.gl/C9t1zv")
 .setFooter("© Mcadventuretime.com", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oy-ver"],
  permLevel: 0
};

module.exports.help = {
  name: "oyver",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
