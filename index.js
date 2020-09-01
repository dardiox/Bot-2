const fs = require("fs");
const { Client, Collection } = require('discord.js');
const TOKEN = 'NzUwMzI5ODEyOTA3OTgyODY4.X049Fw.T3vdGXQUHNtgEk_IiWeJ0HBx03c';
const PREFIX = ':';

const client = new Client();

client.login(TOKEN);

client.on('ready', () => {
  let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0 - 11)
  client.user.setActivity(`AdopteUnePub® : ${membersCount} membres`);
  console.log(`${client.user.tag} est prêt !`);
});