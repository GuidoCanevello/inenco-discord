import { defineNuxtModule } from '@nuxt/kit'
import { Client, GatewayIntentBits } from 'discord.js';
import commandIndex from './commands/commandIndex';

export default defineNuxtModule((options, nuxt) => {
    // Create and configure the Discord bot client
    const client = new Client({
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
    });

    client.once('ready', () => {
        console.log(`🤖 Bot is online as ${client.user?.tag}`);
    });

    client.on('interactionCreate', (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        // Check if the command exists, and execute it
        const commandHandler = commandIndex.find(c => c.name == interaction.commandName)?.execute

        if (commandHandler) {
            return commandHandler(interaction);
        } else {
            throw new Error(`Command handler not found for ${interaction.commandName}`);
        }
    });

    // Login the bot when the server starts
    client.login(process.env.DISCORD_TOKEN).catch(console.error);
})




