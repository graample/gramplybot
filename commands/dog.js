import axios from 'axios'
import { SlashCommandBuilder } from 'discord.js';

const create = () => {
  const command = new SlashCommandBuilder()
    .setName('dog')
    .setDescription('finds a random dog image');

  return command.toJSON();
};

const invoke = async (interaction) => {
  axios('https://dog.ceo/api/breeds/image/random')
  .then(imgResult => {
    interaction.reply({
      content: imgResult.data.message,
    })
  })
  .catch((error) => {
    console.log('Error replying to Dog');
    console.error(error);
  });
};

export { create, invoke };