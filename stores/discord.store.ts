import { defineStore } from 'pinia';

interface IDiscordStoreState {
    commands: any[]

    //* State Booleans
    isRegisteringCommands: boolean
    isGettingCommands: boolean
}

export const useDiscordStore = defineStore('discordStore', {
    state: (): IDiscordStoreState => ({
        commands: [],
        
        isRegisteringCommands: false,
        isGettingCommands: false
    }),
  
    actions: {
        async dispatchGetCommands() {
            this.isGettingCommands = true

            try {
                this.commands = await $fetch("/api/discord-bot/commands", { method: 'get' });
            } catch (error: any) {
                switch (error.statusCode) {
                    default:
                        console.log(error)
                        break;
                }
            } finally {
                this.isGettingCommands = false
            }
        },

        async dispatchRegisterCommands() {
            this.isRegisteringCommands = true

            try {
                await $fetch("/api/discord-bot/register-commands", { method: 'post' });
            } catch (error: any) {
                switch (error.statusCode) {
                    case 500:
                        throw { mensaje: "Couldn't register commands on Discord." }
                    default:
                        console.log(error)
                        break;
                }
            } finally {
                this.isRegisteringCommands = false
            }
        }
    }
})