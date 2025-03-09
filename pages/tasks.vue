<script setup lang="ts">
const { isGettingTasks } = storeToRefs(useTasksStore());

onMounted(async () => {
    await useTasksStore().dispatchGetTasks()
})
</script>

<template>
    <v-container id="page-container">
        <v-row>
            <v-col>
                <TasksCard />
            </v-col>
        </v-row>
    </v-container>
</template>