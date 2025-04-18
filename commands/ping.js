import { MessageFlags, SlashCommandBuilder } from 'discord.js';

const create = () => {
  const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

  return command.toJSON();
};

const invoke = async (interaction) => {
  interaction.reply({
    content: 'Pong!',
    flags: MessageFlags.Ephemeral,
  })
  .then(() => interaction.followUp({
    content: 'Pong again!',
    flags: MessageFlags.Ephemeral,
  }))
  .then(() => interaction.deleteReply())
  // .then((response) => console.log(`Reply sent with content ${response.resource.message.content}`))
  .catch((error) => {
    console.log('Error replying to Pong');
    console.error(error);
  });
};

export { create, invoke };