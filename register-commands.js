require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'currency_conversion',
        description: 'converts currency A to currency B',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.Token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('slash commands were registered successfully')
    } catch (error) {
        console.log('an error occured: ${error}');
    }
})();