import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const BOT_TOKEN = 'MTExNjI2NDc2OTYwMzc3NjU2Mg.GtDB1b.kA3ave7jp0fwFRNdDEtBXGph4fM2nFRnyjAqyg';
// import { BOT_TOKEN } from './constants';

client.on('messageCreate', message => {
    if(message.author.bot) return;
    message.reply({
        content : "Hi From Bot",
    })
});

client.login(BOT_TOKEN);