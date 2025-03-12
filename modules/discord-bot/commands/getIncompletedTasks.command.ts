import type { NDiscordBot } from "../types/ICommand";
import internalFetch from "../utils/internalFetch";

export const getIncompletedTasks: NDiscordBot.ICommand = {
    name: "ver_tareas_incompletas",
    description: "Obtiene las Tareas del Usuario",
    async execute(interaction) {
        const discordUsername = interaction.user.username;

        const user = await internalFetch('/users', {
            method: "get",
            query: {
                discordUsername
            }
        });

        if (user) {
            try {
                const tasks: ITask[] = await internalFetch('/tasks', {
                    method: "get",
                    params: {
                        userId: user._id,
                    }
                })

                const taskDescriptions = tasks.map(task => {
                    const createdAt = new Date(String(task.createdAt));
                    const formattedDate = `${createdAt.getFullYear()}/${(createdAt.getMonth() + 1).toString().padStart(2, '0')}/${createdAt.getDate().toString().padStart(2, '0')} - ${createdAt.getHours().toString().padStart(2, '0')}:${createdAt.getMinutes().toString().padStart(2, '0')}`;
                    return `- ${task.description} - creada el: ${formattedDate}`;
                }).join('\n');

                interaction.reply(`Las Tareas sin completar del Usuario son:\n${taskDescriptions}`);
            } catch (error) {
                interaction.reply('Error al obtener las tareas');
            }
        } else {
            interaction.reply('Usuario no encontrado');
        }
    },
}