import { EmbedBuilder } from "discord.js";
import type { NDiscordBot } from "../types/ICommand";
import inencoFetch from "../utils/inencoFetch";
import generateIncidenteEmbed from "../utils/generateIncidenteEmbed";
import generateCambiosEmbed from "../utils/generateCambiosEmbed";

const testIncidente: NIncidentes.IIncidente = {
    nombre: 'Inc 80-100',
    descripcion: 'Incidente de prueba',
    estadoActual: 'En Proceso',
    usuarioAsignado: 'usuario',
    prioridad: 'Alta',
    tiempoInsumido: 2.40,
    fechaAlta: new Date(),
    cambios: [
        {
            id: 1,
            fecha: new Date(),
            usuarioModificador: "usuario",
            usuarioAsignado: "usuario",
            tipo: "tipo",
            estado: "estado",
            tiempoInsumido: 2.40,
            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 2,
            fecha: new Date(),
            usuarioModificador: "usuario",
            usuarioAsignado: "usuario",
            tipo: "tipo",
            estado: "estado",
            tiempoInsumido: 3.40,
            comentario: 'comentario',
        },
        {
            id: 3,
            fecha: new Date(),
            usuarioModificador: "usuario",
            usuarioAsignado: "usuario",
            tipo: "tipo",
            estado: "estado",
            tiempoInsumido: 1.40,
            comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    ]
}

export const getIncidente: NDiscordBot.ICommand = {
    name: "ver_incidente",
    description: "Obtiene la información de un Incidente",
    async execute(interaction) {
        const embed = generateIncidenteEmbed(testIncidente);

        if (testIncidente.cambios && testIncidente.cambios.length > 0) {
            const embedCambios = generateCambiosEmbed(testIncidente.cambios);

            interaction.reply({ embeds: [embed, embedCambios] });
        }else {
            interaction.reply({ embeds: [embed] });
        }
    },
}