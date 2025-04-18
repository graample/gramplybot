import { SlashCommandBuilder } from 'discord.js';

const create = () => {
  const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

  return command.toJSON();
};

const invoke = async (interaction) => {
  interaction.reply({
    content: 'Pong!',
    withResponse: true,
    ephemeral: true,
  })
  // .then((response) => console.log(`Reply sent with content ${response.resource.message.content}`))
  .catch((error) => {
    console.log('Error replying to Pong');
    console.error(error);
  });
};

export { create, invoke };