<script>

import AppPokemonCard from './AppPokemonCard.vue';

import { store } from '../store.js';

export default {
    components: {
        AppPokemonCard
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <main>
        <div class="container main-container">
            <div class="row main-row">
                <div class="main-col" v-for="(pokemon, index) in store.pokemonList" :key="index" :class=" pokemon.type1 === 'Grass' ? 'bg-grass' : pokemon.type1 === 'Fire' ? 'bg-fire' : pokemon.type1 === 'Water' ? 'bg-water' : '' ">
                    <AppPokemonCard :pokemon="pokemon"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;  

.main-container {
    background-color: #DEDEDE;
    padding: 50px 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .main-row {
        background-color: #4B5156;
        width: 100%;
        height: 100%;
        overflow-y: scroll;

        .main-col {
            width: calc(100% / 5 - 20px);
            margin: 20px 10px;
            border-radius: 15px;
        }

        .bg-grass {
            background-color: $GrassColor;
        }
        .bg-fire {
            background-color: $FireColor;
        }
        .bg-water {
            background-color: $WaterColor;
        }
    }
}
</style>