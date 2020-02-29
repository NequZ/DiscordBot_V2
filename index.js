const Discord = require('discord.js');

const bot = new Discord.Client();

const token = ''; // Löschen beim Push
const PREFIX = '!';




bot.login(token);

bot.on('ready', () => {
    console.log('Bot ist Online');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case'forum':
        message.channel.sendMessage('https://millenium-games.de');
        break;
    }

   
})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Schaut über seine User',
            type: "WATCHING"
            
         
        }
    });
});


//bot.on('message', msg=>{
  //  if (msg.content == "Hallo"){
     //    msg.reply('Hey wie gehts dir');
    //}
//})


bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user + 'ist dem Server beigetreten')

    var role = member.guild.roles.find('name', '» Tester');

    member.addRole(role)
    console.log('Rolle erfolgreich vergeben')

    

    bot.channels.get('683304150905389099').send(member.user + "Hallo");

  
    
})


