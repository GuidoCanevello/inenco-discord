import { EmbedBuilder } from "discord.js";

/**
 * Generates an embed object for an incidente
 * 
 * @param incidente A incidente object
 * @returns The embed object
 */
export default function (incidente: NIncidentes.IIncidente): EmbedBuilder {
    return new EmbedBuilder({
        title: incidente.nombre,
        description: incidente.descripcion,
        fields: [
            {
                name: 'Estado Actual',
                value: incidente.estadoActual,
                inline: true,
            },
            {
                name: 'Usuario Asignado',
                value: incidente.usuarioAsignado,
                inline: true,
            },
            {
                name: 'Prioridad',
                value: incidente.prioridad,
                inline: true,
            },
            {
                name: 'Tiempo Insumido',
                value: incidente.tiempoInsumido.toString(),
                inline: true,
            },
            {
                name: 'Fecha de Alta',
                value: incidente.fechaAlta.toLocaleString(),
                inline: true,
            },
        ],
    })
}