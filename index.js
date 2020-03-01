////////////////////////////////////////////////
///                Written by                ///
///              Niclas Friedrich           ///
///              Moritz Behne               ///
///              Copyright (c) 2020         ///
///////////////////////////////////////////////


const Discord = require('discord.js');

const bot = new Discord.Client();

const ytdl = require("ytdl-core");
const queue = new Map();


const config = require("./config.json");
const {
	prefix,
	token,
} = require('./config.json');




bot.login(token);

bot.on('ready', () => {
    console.log('Bot ist Online');
})

bot.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
    if (message.content.startsWith(config.prefix + "forum")) {
      message.channel.send("https://millenium-games.de!");
    } else
    if (message.content.startsWith(config.prefix + "launcher")) {
      message.channel.send("https://mega.nz/#!lFVTUQ6b!xnItnBMEjdA9W36scMs5Bj3h4XCSqClHDhsQHXdo2yU!");
    }
        console.log('Eine Nachricht wurde gesendet')
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





