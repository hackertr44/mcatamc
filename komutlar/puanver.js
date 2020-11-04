const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (client, message, args) => {
  if (!args[0]) {
    return message.channel.send("Lütfen bir id yazın!")
  }
  message.channel.send("Pre aktif edildi amk!")
  return db.set(`goldpuan_${message.author.id}`, args[0])
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ss"],
  permLevel: 4
};

module.exports.help = {
  name: 'test',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'tste'
};
