import 'dotenv/config';
import fs from 'node:fs';
import { REST, Routes } from 'discord.js';

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  commands.push(command.create());
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.TEST_GUILD_ID), { body: commands })
  .then(() => {
    console.log('Successfully registered application commands.')
  })
  .catch(console.error);