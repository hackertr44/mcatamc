const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
  Jimp.read(`https://cdn.discordapp.com/attachments/647388568419041283/649246759134167069/kedibenimm.png`, (err, image) => {
    image.resize(500, 375)

    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(92, 92)
        image.composite(avatar, 280, 4).write(`./resimler/kediol/kediol-${message.author.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./resimler/kediol/kediol-${message.author.id}.png`));
        }, 1000);
      });
    });

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kediol'], 
  permLevel: 0
};

exports.help = {
  name: 'kedi-ol',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};