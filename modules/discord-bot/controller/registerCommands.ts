import { REST, Routes } from 'discord.js';
import commandsList from './commandsList';

const rest = new REST({ version: '10' }).setToken(useRuntimeConfig().public.DISCORD_TOKEN);

export default async function () {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
        Routes.applicationGuildCommands(
            String(useRuntimeConfig().public.CLIENT_ID),
            String(useRuntimeConfig().public.GUILD_ID)
        ),
        { body: commandsList }
    );

    console.log('Successfully reloaded application (/) commands.');
}