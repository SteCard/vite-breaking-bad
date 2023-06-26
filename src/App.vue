<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSelect from './components/AppSelect.vue';

import { store } from './store.js';

export default {

  components: {
    AppHeader,
    AppMain,
    AppSelect,
  },

  data() {
    return {
      store,
    }
  },

  created() {
    // CHIAMATA API POKEMONS TYPE
    axios.get(store.typeApiUrl).then((result) => {
      // INSERISCO L'ARRAY DI OGGETTI DENTRO STORE.JS
      store.pokemonTypeList = result.data;
    });

    this.getPokemon();
  },

  methods: {
    getPokemon() {
      // URL CHIAMATA API
      let myUrl = store.apiUrl;

      if (store.typeSelected !== 'All') {
        myUrl += `?eq[type1]=${store.typeSelected}`;
      }
      // CHIAMATA API POKEMONS
      axios.get(myUrl).then((result) => {
        store.pokemonList = result.data.docs;
        store.loading = false;
      })
    }
  }
}
</script>

<template lang="">
    <header>
        <div class="container my-5">
            <div class="row">
                <AppHeader/>
                <AppSelect @filter="getPokemon"/>
            </div>
        </div>  
    </header>
    <AppMain/>
</template>

<style lang="scss">
  @use './styles/generals.scss' as *;
</style>