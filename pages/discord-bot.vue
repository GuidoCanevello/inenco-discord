<script setup lang="ts">
// const { dispatchRegisterCommands } = storeToRefs(useDiscordStore());

const commands: Ref<{
    name: string
    description: string
}[]> = ref([])
const isLoadingRegisterCommands = ref(false);

onMounted(async () => {
    await useDiscordStore().dispatchGetCommands()
    commands.value = useDiscordStore().commands
})

async function handleRegisterCommands() {
    isLoadingRegisterCommands.value = true
    await useDiscordStore().dispatchRegisterCommands()
    isLoadingRegisterCommands.value = false
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-container grid-list-xs>
                        <h1>Discord Bot</h1>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        Commands
                    </v-card-title>

                    <v-card-text>
                        <v-list v-for="command in commands" :key="command.name">
                            <v-list-item>
                                <v-list-item-title>
                                    /{{ command.name }}
                                </v-list-item-title>

                                <v-list-item-subtitle>
                                    {{ command.description }}
                                </v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn variant="outlined" color="success" block :loading="isLoadingRegisterCommands"
                            @click="handleRegisterCommands">Register Commands</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
