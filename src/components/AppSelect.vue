<script>

import { store } from '../store.js';

export default {

    props: {
        pokemonTypeList: Object
    },

    data() {
        return {
            // DICHIARO STORE.JS
            store,
        }
    },
}
</script>

<template lang="">
    <select name="type-select" id="type-select" class="form-select">
        <option v-for="(type, index) in store.pokemonTypeList" :value="type" v-text="type"></option>
    </select>
</template>

<style lang="scss">

@use '../styles/partials/variables' as *;

#type-select {
    width: 150px;
    height: 50px;
}
</style>