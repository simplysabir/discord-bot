import { REST, Routes } from 'discord.js';
// const BOT_TOKEN='MTExNjI2NDc2OTYwMzc3NjU2Mg.GIjyUK.4QYphorFbi3PHYQrVKLjHfYElcKb4XDQ1qdVZ8'
// const CLIENT_ID = '1116264769603776562'

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);


( async () => {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();