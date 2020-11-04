const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
  Jimp.read(`https://cdn.discordapp.com/attachments/647388568419041283/649244236402655255/maymunbenimm.png`, (err, image) => {
    image.resize(500, 200)

    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(112, 112)
        image.composite(avatar, 115, 44).write(`./resimler/maymunol/maymunol-${message.author.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./resimler/maymunol/maymunol-${message.author.id}.png`));
        }, 1000);
      });
    });

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['maymunol'], 
  permLevel: 0
};

exports.help = {
  name: 'maymun-ol',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};