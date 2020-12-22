const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

const summarize = async (message, args) => {
  try{
    let embed = new Discord.MessageEmbed()
    .setAuthor('Brad');
    let payLoad = await fetch(`http://api.smmry.com/?SM_API_KEY=${process.env.SMMRY_KEY}&SM_URL=${args[0]}`);
    let paySon = await payLoad.json();
   
    let desc = paySon.sm_api_content;
    console.log(JSON.stringify(desc));

    embed.setDescription(desc)
    .setTitle("Article Summary")
    .setFooter('coded by Brad Ganley, ruined by society')
    .setColor(0x91EE60);

    message.reply(embed);
  } catch(err){ 
    console.log(err)
    message.reply("We hit an error. Everything is fucked and the server is burning down. Why would you do this to us? All we wanted was to help you. We just wanted the best for everyone but now you've gone and burned the whole thing down. We're fucked and it's all because of you.")
  }
}

module.exports = {
    name: 'sum',
	description: 'Summarizes articles from the web for easier reading',
    execute(message, args) {
      summarize(message, args);
	}
}