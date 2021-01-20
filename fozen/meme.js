exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const request = require("request");

  return request(
    "https://meme-api.herokuapp.com/gimme/memes",
    (err, response, body) => {
      if (err) throw err;
      var data = JSON.parse(body);

      let meme = new Discord.MessageEmbed()
        .setColor("#E7A700")
        .setTitle(data.title)
        .setURL(data.postLink)
        .setImage(data.url)
        .setFooter(message.author.tag + ` Tarafından İstendi`, message.author.avatarURL());

      message.channel.send(meme);

      /*let postLink = new Discord.MessageEmbed()
        .setColor("#E7A700")
        .addField("Post link", data.postLink);

      message.channel.send(postLink);//sa as merhabalar aq*/
    }
  );
};
