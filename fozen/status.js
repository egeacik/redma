exports.run = (client, message, args) => {
  const config = require("../config.json");
  const Discord = require("discord.js");
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);

  let prefix = config.prefix;

  let uptime = `${days} days, ${hours} hours, ${minutes} minutes`;
  let embed = new Discord.MessageEmbed()
    .setColor("#E7A700")
    .setTitle("Meme Creator Bot!")
    .addField("🖥️ • Status", "Online", true)
    .addField("🕐 • Uptime", uptime, true)
    .addField("💠 • Prefix", prefix, true)
    .setFooter("if you want?", message.author.avatarURL());

  return message.channel.send(embed);
};
