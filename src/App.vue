<template>
  <v-app>
    <div>
      <v-card color="grey lighten-4" flat height="200px">
        <v-toolbar dark>
          <router-link to="/home" tag="button">
            <v-toolbar-title class="link">Conta</v-toolbar-title>
          </router-link>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <router-link to="/cidades" tag="button">
              <v-btn class="link" text>Cidades</v-btn>
            </router-link>
            <router-link to="/agencias" tag="button">
              <v-btn class="link" text>Agencias</v-btn>
            </router-link>
            <router-link to="/clientes" tag="button">
              <v-btn class="link" text>Clientes</v-btn>
            </router-link>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<style scoped>
</style>
