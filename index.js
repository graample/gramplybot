import 'dotenv/config';
import fs from 'node:fs';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// Event handling
const events = fs
  .readdirSync('./events')
  .filter(file => file.endsWith('.js'));

for (let event of events) {
  const eventFile = await import(`./events/${event}`);

  if (eventFile.once) {
    client.once(eventFile.name, (...args) => eventFile.invoke(...args));
  }
  else {
    client.on(eventFile.name, (...args) => eventFile.invoke(...args));
  }
}

client.login(process.env.DISCORD_TOKEN);