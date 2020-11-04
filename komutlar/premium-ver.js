const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  if (!args[0]) {
    return message.channel.send("Lütfen bir id yazın!")
  }
  message.channel.send("Pre aktif edildi amk!")
  return db.set(`premium_${args[0]}`, "aktif")
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prever"],
  permLevel: 0
};

module.exports.help = {
  name: 'premiumver',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
