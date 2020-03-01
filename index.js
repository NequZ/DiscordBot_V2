const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NDk4OTE1OTMzNjY3MTk2OTUx.XluvJg.70CZzeTRNwXztI_eAbf4uW7LTNM'; // Löschen beim Push
const PREFIX = '!';




bot.login(token);

bot.on('ready', () => {
    console.log('Bot ist Online');
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case'commands':
        message.channel.sendMessage('Folgende Commands können genutzt werden: !forum; !launcher; !info; !dev');
        break;
    }

    switch(args[0]){
        case'forum':
        message.channel.sendMessage('https://millenium-games.de');
        break;
    }
    switch(args[0]){
        case'launcher':
        message.channel.sendMessage('https://mega.nz/#!lFVTUQ6b!xnItnBMEjdA9W36scMs5Bj3h4XCSqClHDhsQHXdo2yU');
        break;
    }
    switch(args[0]){
        case'info':
        message.channel.sendMessage('Death World befindet sich momentan in der Version 0.04');
        break;
    }
    switch(args[0]){
        case'dev':
        message.channel.sendMessage('');
        break;
    }

})



bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Schaut über seine User',                 // Set Bot Status
            type: ""
            
         
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

    member.addRole(role)                                                            // Give Member a Role in this Case for my Discord a specific Role
    console.log('Rolle erfolgreich vergeben')

    

    bot.channels.get('683304150905389099').send(member.user + "Hallo");

  
    
})