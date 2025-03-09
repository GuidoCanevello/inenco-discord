import type { NDiscordBot } from "../types/ICommand";

export const ping: NDiscordBot.ICommand = {
    name: "ping",
    description: "Responde con Pong",
    async execute(interaction) {
        interaction.reply('pong')
    },
}