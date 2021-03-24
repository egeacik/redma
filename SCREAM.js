const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get('http://boost-aktif.glitch.me/');
    }, 3000);
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

const scream = new Discord.Client();


scream.on('message', async msg => {
  if (msg.content.toLowerCase() === "gir") {
      const streamOptions = { seek: 0, volume: 50 };
      var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ('https://www.youtube.com/channel/UCmM8y7IUSzWF1Lt4po_drzg?view_as=subscriber', { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        })
  }
})


scream.login("Token");