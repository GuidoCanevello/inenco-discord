import type { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js"

export namespace NDiscordBot {
    interface ICommand {
        name: string // Name of command, 1-32 characters
        description: string // Description for CHAT_INPUT commands, 1 - 100 characters. Empty string for USER and MESSAGE commands
        options?: {
            name: string,
            description: string,
            type: ApplicationCommandOptionType,
            required?: boolean
        }[]
        execute(interaction: ChatInputCommandInteraction): Promise<any>
    }
}