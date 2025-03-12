import type { CacheType, ChatInputCommandInteraction, TextChannel } from "discord.js";

/**
 * Retrieves the name of the text channel from a Discord interaction.
 * 
 * @param interaction The Discord interaction
 * @returns The name of the channel or undefined if the channel is not a text channel
 */
export default function (interaction: ChatInputCommandInteraction<CacheType>): string | undefined {
    if (interaction.channel == null || !interaction.channel.isTextBased()) {
        return;
    }

    return (interaction.channel as TextChannel).name;
}