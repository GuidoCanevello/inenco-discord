import type { NDiscordBot } from '../types/ICommand';
import { ping } from './ping.command'
import { createTask } from './createTask.command';
import { getIncompletedTasks } from './getIncompletedTasks.command';
import { getIncidentesByProyecto } from './getIncidentesByProyecto.command';
import { getProyectoInfo } from './getProyectoInfo.command';
import { getIncidente } from './getIncidente.commands';

const commands: NDiscordBot.ICommand[] = [
    ping,
    createTask,
    getIncompletedTasks,
    getIncidentesByProyecto,
    getProyectoInfo,
    getIncidente,
]

export default commands;