import { EmbedBuilder } from "discord.js";

export default function (cambios: NIncidentes.ICambio[]): EmbedBuilder {
    return new EmbedBuilder({
        title: "Cambios",
        description: cambios?.map(cambio => {
            let value = `- *Id*: ${cambio.id}\n`
            value += `- *Fecha*: ${cambio.fecha.toLocaleDateString('es-ES')}\n`
            value += `- *Asignado*: ${cambio.usuarioAsignado}\n`
            value += `- *Modificador*: ${cambio.usuarioModificador}\n`
            value += `- *Tipo*: ${cambio.tipo}\n`
            value += `- *Estado*: **${cambio.estado}**\n`
            value += `- *Tiempo Insumido*: ${cambio.tiempoInsumido}\n`
            value += `- *Comentario*: ${cambio.comentario}\n`
            value += `-----------------------------------------------\n`

            return value
        }).join('\n'),
    })
}