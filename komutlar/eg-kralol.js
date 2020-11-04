const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
  Jimp.read(`https://cdn.discordapp.com/attachments/647388568419041283/649242896939089930/kralbenimm.png`, (err, image) => {
    image.resize(500, 200)

    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(86, 85)
        image.composite(avatar, 160, 55).write(`./resimler/kralol/kralol-${message.author.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./resimler/kralol/kralol-${message.author.id}.png`));
        }, 1000);
      });
    });

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kralol'], 
  permLevel: 0
};

exports.help = {
  name: 'kral-ol',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};