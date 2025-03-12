import { ApplicationCommandOptionType } from "discord.js";
import type { NDiscordBot } from "../types/ICommand";
import internalFetch from "../utils/internalFetch";

const DESCRIPTION_OPTION_NAME = "descripcion";

export const createTask: NDiscordBot.ICommand = {
    name: "crear_tarea",
    description: "Crea una Tarea nueva",
    options: [
        {
            name: DESCRIPTION_OPTION_NAME,
            description: "Descripción de la Tarea",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    async execute(interaction) {
        const description = interaction.options.get(DESCRIPTION_OPTION_NAME)?.value;
        if (!description) {
            interaction.reply('No se ha proporcionado una descripción')
            return;
        }

        const discordUsername = interaction.user.username;

        const user = await internalFetch('/users', {
            method: "get",
            query: {
                discordUsername
            }
        });

        if (user) {
            try {
                await internalFetch('/tasks', {
                    method: "post",
                    body: {
                        userId: user._id,
                        description: description
                    }
                })

                interaction.reply('Tarea creada correctamente');
            } catch (error) {
                interaction.reply('Error al crear la tarea');
            }
        } else {
            interaction.reply('Usuario no encontrado');
        }
    },
}