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
    }
}
</script>

<template lang="">
    <div class="col">
        <select name="type-select" id="type-select" class="form-select" v-model="store.typeSelected" @change="$emit('filter')">
            <option value="All" selected>All</option>
            <option v-for="(type, index) in store.pokemonTypeList" :value="type" v-text="type"></option>
        </select>
    </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

.col {
    display: flex;
    justify-content: flex-end;
    #type-select {
        width: 150px;
        height: 50px;
    }
}
</style>