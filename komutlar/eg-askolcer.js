const Discord = require('discord.js');

exports.run = (client, message, args) => {
    
  //if(message.author.id !== "486817385051979786") return message.reply("Bu komut şuanda güncellenmektedir!")
  
  const db = require('quick.db');
  
 
 
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Lütfen bir üyeyi etiketleyiniz')
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
  var yorum = "Sizi evlendirelim <3"
        if(anasonuc < 99) {
                var yorum = "Sizi Birlikte Güzelsiniz <3"
        }
        if(anasonuc < 69) {
                var yorum = "Seviyoruz :black_heart:"
        }
        if(anasonuc < 45) {
                var yorum = "Terazi Değilim Ama Karşı Tarafta Bir Ağırlık Var Gibi."
        }
        if(anasonuc < 27) {
                var yorum =  "Püü Çirkin Unut Gitsin."
        }
  
        const embed = new Discord.RichEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`AŞK Yüzde: **${anasonuc}**! \n${kalp}${akalp} \n\n${yorum}`)
                .setColor("RANDOM")
        .setTimestamp()
        message.channel.send({embed})
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["aşk"],
  permLevel: 0,
};

exports.help = {
  name: 'aşk-ölçer',
  description: 'İki kullanıcı arasındaki aşkı ölçer.',
  usage: 'aşk-ölçer <@kullanıcı> veya aşk-ölçer <@kullanıcı> <@kullanıcı>',
};