declare namespace NIncidentes {
    interface IIncidente {
        nombre: string
        descripcion: string
        estadoActual: string
        usuarioAsignado: string
        prioridad: string
        tiempoInsumido: float
        fechaAlta: Date
        cambios?: ICambio[]
    }

    interface ICambio {
        id: number
        fecha: Date
        usuarioModificador: string
        usuarioAsignado: string
        tipo: string
        estado: string
        tiempoInsumido: float
        comentario: string
    }
}