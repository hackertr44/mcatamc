const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
message.channel.send(`**Adım 1**
Merhaba Tag Sistemi Kullanımı İçin Birkaç Tüyo Vereceğim
Sunucunuza Girenlere Oto Tag Vermek İçin \`!ototag 🔱| -uye-\`
Kapatmak İçin \`!ototagkapat\`
**Adım 2**
Bu Komut İşe Yarar Ama Beni Tatmin Etmedi :))
Şimdi Eğer Sohbetinizde Şöyle Saçma İsimler Görmekten Bıktıysanız Örn.\`︻芫═──[▬▬▬▬ Mahmut ▬▬▬▬▬]︻芫═──\`
OTO isim Temizleyiciyide Açın \`!isimtemizleyiciaç\`
 Sadece [A-Z 0-9] Arası Kelimeler Kullanılabilir Diğer Herşeyi Siler Yani O Mahmut Yazısının Çıktısı Sadece \`Mahmut\` Olacaktır.
Kapatmak İçin \`!isimtemizleyicikapat\``) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["tag-sistemi"], 
  permLevel: 0
};

exports.help = {
  name: 'tag-sistemi',
  description: 'sayaç', 
  usage: 'sayaç'
};
