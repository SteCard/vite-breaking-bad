<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store.js';

export default {

  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store,
    }
  },

  created() {
    // API
    axios.get('https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons').then((result) => {
      // INSERISCO ARRAY IN STORE.JS
      store.pokemonList = result.data.docs;
    })
  },
}
</script>

<template lang="">
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>