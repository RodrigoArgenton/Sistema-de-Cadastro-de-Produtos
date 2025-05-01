<script setup lang="ts">

  const pages = [
    ['Home', '/'],
    ['Produtos', '/products'],
    ['Criar produto', '/productform']
  ]
</script>

<template>
  <v-app-bar>
    <v-container
    class="d-flex justify-center w-50"
    >
      <v-row
      >
        <v-col
        v-for="([title, path], i) in pages"
        >
          <v-list-item
            :key="i"
            :title="title"
            :value="title"
            :to="path"
            class="text-center"
            rounded
          >
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
  
  