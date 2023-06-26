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
    axios.get(store.apiUrl).then((result) => {
      // INSERISCO ARRAY IN STORE.JS
      store.pokemonList = result.data.docs;

      axios.get(store.typeApiUrl).then((result) => {
        
        store.pokemonTypeList = result.data;

        store.pokemonTypeList.unshift('All');
        
      });
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