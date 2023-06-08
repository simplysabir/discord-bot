import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// const BOT_TOKEN='MTExNjI2NDc2OTYwMzc3NjU2Mg.GIjyUK.4QYphorFbi3PHYQrVKLjHfYElcKb4XDQ1qdVZ8'

client.on('messageCreate', message => {
    if(message.author.bot) return;
    message.reply({
        content : "Hi From Bot",
    })
});

client.on('interactionCreate', interaction => {
    interaction.reply(' Pong !');
})

client.login(BOT_TOKEN);