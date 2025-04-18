import 'dotenv/config';
import fs from 'node:fs';
import { REST, Routes } from 'discord.js';

const commands = [];

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.TEST_GUILD_ID), { body: commands })
  .then(() => {
    console.log('Successfully deleted all test guild application commands.')
  })
  .catch(console.error);

rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
  .then(() => {
    console.log('Successfully deleted all application commands.')
  })
  .catch(console.error);