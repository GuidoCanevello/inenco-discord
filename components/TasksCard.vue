<script setup lang="ts">
const { tasksTableData } = storeToRefs(useTasksStore());

const tableHeaders: any = [
    {
        title: "Usuario",
        align: 'start',
        key: "username",
        sortable: true,
    },
    {
        title: "Nombre de Discord",
        align: "start",
        key: "discordUsername",
        sortable: false,
    },
    {
        title: "Descripción",
        align: "start",
        key: "description",
        sortable: false,
    },
    {
        title: "Fecha de Creación",
        align: "end",
        key: "createdAt",
        sortable: true,
    },
    {
        title: "Completado",
        align: "end",
        key: "isCompleted",
        sortable: false,
    }
];
</script>

<template>
    <v-card>
        <v-card-title>
            Listado de Tareas
        </v-card-title>

        <v-card-text>
            <v-data-table :headers="tableHeaders" :items="tasksTableData">
                <template v-slot:[`item.isCompleted`]="{ item }">
                    <v-icon>{{ item.isCompleted ? "mdi-check-circle" : "mdi-close" }}</v-icon>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>