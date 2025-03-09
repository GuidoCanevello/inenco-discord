import type { NDiscordBot } from '../types/ICommand';
import { ping } from './ping.command'
import { createTask } from './createTask.command';
import { getIncompletedTasks } from './getIncompletedTasks.command';

const commands: NDiscordBot.ICommand[] = [
    ping,
    createTask,
    getIncompletedTasks,
]

export default commands;