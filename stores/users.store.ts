import { defineStore } from 'pinia';

interface IUsersStoreState {
    users: IUser[]

    //* State Booleans
    isGettingUsers: boolean
}

export const useUsersStore = defineStore('usersStore', {
    state: (): IUsersStoreState => ({
        users: [],

        isGettingUsers: false
    }),

    actions: {
        async dispatchGetUsers() {
            this.isGettingUsers = true

            try {
                this.users = await $fetch("/api/users", { method: 'get' });
            } catch (error: any) {
                switch (error.statusCode) {
                    default:
                        console.log(error)
                        break;
                }
            } finally {
                this.isGettingUsers = false
            }
        },
    }
})