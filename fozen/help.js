exports.run = (client, message, args) => {
const Discord = require("discord.js");

	let help = new Discord.MessageEmbed()
	.setColor("#E7A700")
	.setTitle("Meme Creator Bot Commands!")
	.addField('Default prefix!', '+ (changeable is coming soon!)')
	.addField('Send random meme!', '+meme')
	.addField('Show`s bot status!', '+status')

	return message.channel.send(help);

}