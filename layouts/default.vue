<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';

const { mdAndUp } = useDisplay();

interface ITabItem {
  title: string,
  value: string,
  icon: string,
  route: string,
  enabled: boolean,
  isAdmin?: boolean,
  isForLogged?: boolean
}

const tabItems: ITabItem[] = [
  {
    title: "Inicio",
    value: "tab-0",
    icon: "mdi-alpha-i-box",
    enabled: true,
    route: "/",
  },
  {
    title: "Discord Bot",
    value: "tab-1",
    icon: "mdi-robot",
    enabled: true,
    route: "/discord-bot",
  },
  {
    title: "Tareas",
    value: "tab-2",
    icon: "mdi-format-list-checkbox",
    enabled: true,
    route: "/tasks",
  },
]

const currentTab = ref();

const theme = useTheme();
const onChangeTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";

  theme.global.name.value = newTheme;
}

onNuxtReady(async () => {
  theme.global.name.value = localStorage.getItem('prodeChosenTheme') ?? "light";
})

</script>

<template>
  <v-app>
    <header>
      <v-card color="primary" rounded="0">
        <v-row>
          <!-- Agrego una columna fija para acomodar el Titulo -->
          <v-col v-if="mdAndUp" cols="auto" />

          <v-col class="title-col">
            <h1>Project Inencord</h1>
          </v-col>

          <v-col class="pr-0" cols="auto">
            <v-container class="px-2 py-1">
              <v-card class="change-theme-card" variant="outlined" @click="onChangeTheme">
                <v-avatar color="secondary">
                  <v-icon>mdi-theme-light-dark</v-icon>
                </v-avatar>
              </v-card>
            </v-container>
          </v-col>
        </v-row>

        <v-tabs v-model="currentTab" align-tabs="title">
          <template v-for="item in tabItems.filter(i => i.enabled)" :key="item.title">
            <v-tab :value="item.value" :text="item.title" :prepend-icon="item.icon" :to="item.route" router>
              {{ item.title }}
            </v-tab>
          </template>
        </v-tabs>
      </v-card>
    </header>

    <v-main id="main-app">
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
.change-theme-card {
  height: 66px;
  width: 66px;
  padding: 12px;
  border-color: rgb(var(--v-theme-primary-darken-1));
}

.title-col {
  text-align: center;
}

@media (max-width: 960px) {
  .title-col {
    text-align: left;
    padding-left: 24px;
  }
}
</style>
