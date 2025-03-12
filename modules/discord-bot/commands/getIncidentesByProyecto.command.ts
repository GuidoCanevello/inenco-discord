import type { NDiscordBot } from "../types/ICommand";
import inencoFetch from "../utils/inencoFetch";
import getChannelName from "../utils/getChannelName";

export const getIncidentesByProyecto: NDiscordBot.ICommand = {
    name: "incidentes_x_proyecto",
    description: "Obtiene los Incidentes del Proyecto desde el cual se llama el comando",
    async execute(interaction) {
        const channelName = getChannelName(interaction);
        if (!channelName) {
            interaction.reply('Canal erroneo');
            return;
        }

        // TODO implementar get the Incidentes con el nombre del proyecto y darle formato
        //     try {
        //         const tasks: ITask[] = await inencoFetch('/tasks', {
        //             method: "get",
        //             params: {
        //                 userId: user._id,
        //             }
        //         })

        //         const taskDescriptions = tasks.map(task => {
        //             const createdAt = new Date(String(task.createdAt));
        //             const formattedDate = `${createdAt.getFullYear()}/${(createdAt.getMonth() + 1).toString().padStart(2, '0')}/${createdAt.getDate().toString().padStart(2, '0')} - ${createdAt.getHours().toString().padStart(2, '0')}:${createdAt.getMinutes().toString().padStart(2, '0')}`;
        //             return `- ${task.description} - creada el: ${formattedDate}`;
        //         }).join('\n');

        //         interaction.reply(`Las Tareas sin completar del Usuario son:\n${taskDescriptions}`);
        //     } catch (error) {
        //         interaction.reply('Error al obtener las tareas');
        //     }
    },
}