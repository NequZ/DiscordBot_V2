const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NDk4OTE1OTMzNjY3MTk2OTUx.Xll1Ww.HTheA_vLK6_tP3JIR7DRM7Q8CPk';

const PREFIX = '!';

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
            name: 'Am Schlafen',
            type: "STREAMING",
            url: "https://www.twitch.tv/the_ravish"
         
        }
    });
});


//bot.on('message', msg=>{
  //  if (msg.content == "Hallo"){
     //    msg.reply('Hey wie gehts dir');
    //}
//})

bot.login(token);
