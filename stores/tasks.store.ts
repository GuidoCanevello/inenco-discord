import { defineStore } from 'pinia';
import { useUsersStore } from './users.store';

interface ITasksStoreState {
    tasks: ITask[]

    //* State Booleans
    isGettingTasks: boolean
}

interface ITaskTable extends ITask {
    username: string | undefined
    discordUsername: string | undefined
}

export const useTasksStore = defineStore('tasksStore', {
    state: (): ITasksStoreState => ({
        tasks: [],

        isGettingTasks: false
    }),

    getters: {
        tasksTableData(): ITaskTable[] {
            return this.tasks.map(task => {
                const username = useUsersStore().users.find(user => user._id === task.userId)?.username;
                const discordUsername = useUsersStore().users.find(user => user._id === task.userId)?.discordUsername;

                return {
                    ...task,
                    username,
                    discordUsername
                }
            })
        }
    },

    actions: {
        async dispatchGetTasks() {
            this.isGettingTasks = true

            try {
                this.tasks = await $fetch("/api/tasks", { method: 'get' });

                if (useUsersStore().users.length === 0) {
                    await useUsersStore().dispatchGetUsers();
                }
            } catch (error: any) {
                switch (error.statusCode) {
                    default:
                        console.log(error)
                        break;
                }
            } finally {
                this.isGettingTasks = false
            }
        },
    }
})