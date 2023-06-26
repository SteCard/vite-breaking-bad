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

    methods: {
        changeBackgroundCard(pokemon) {
            let classCard;

            // FILTRO DIVERSO DA "ALL"
            if (store.typeSelected === 'All') {
                switch (pokemon.type1) {
                    case 'Grass':
                        classCard = 'bg-grass';
                        break;
                    case 'Fire':
                        classCard = 'bg-fire';
                        break;
                    case 'Water':
                        classCard = 'bg-water';
                        break;
                }
            
            } else {  // FILTRO DIVERSO DA "ALL"
                switch (store.typeSelected) {
                    case 'Grass':
                        classCard = 'bg-grass';
                        break;
                    case 'Fire':
                        classCard = 'bg-fire';
                        break;
                    case 'Water':
                        classCard = 'bg-water';
                        break;
                    case 'Bug':
                        classCard = 'bg-bug';
                        break;
                    case 'Dark':
                        classCard = 'bg-dark';
                        break;
                    case 'Dragon':
                        classCard = 'bg-dragon';
                        break;
                    case 'Electric':
                        classCard = 'bg-electric';
                        break;
                    case 'Fairy':
                        classCard = 'bg-fairy';
                        break;
                    case 'Fighting':
                        classCard = 'bg-fighting';
                        break;
                    case 'Flying':
                        classCard = 'bg-flying';
                        break;
                    case 'Ghost':
                        classCard = 'bg-ghost';
                        break;
                    case 'Ground':
                        classCard = 'bg-ground';
                        break;
                    case 'Ice':
                        classCard = 'bg-ice';
                        break;
                    case 'Normal':
                        classCard = 'bg-normal';
                        break;
                    case 'Poison':
                        classCard = 'bg-poison';
                        break;
                    case 'Psychic':
                        classCard = 'bg-psychic';
                        break;
                    case 'Rock':
                        classCard = 'bg-rock';
                        break;
                    case 'Steel':
                        classCard = 'bg-steel';
                        break;
                }
            }
            return classCard;
        }
    }
}
</script>

<template lang="">
    <main>
        <div class="container main-container">
            <div class="row main-row">
                <div class="main-col" v-for="(pokemon, index) in store.pokemonList" :key="index" :class="changeBackgroundCard(pokemon)">
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

        .bg-bug {
            background-color: $BugColor;
        }
        .bg-dark {
            background-color: $DarkColor;
            color: #fff;
        }
        .bg-dragon {
            background-color: $DragonColor;
            color: #fff;
        }
        .bg-electric {
            background-color: $ElectricColor;
        }
        .bg-fairy {
            background-color: $FairyColor;
        }
        .bg-fighting {
            background-color: $FightingColor;
            color: #fff;
        }
        .bg-flying {
            background-color: $FlyingColor;
        }
        .bg-ghost {
            background-color: $GhostColor;
        }
        .bg-ground {
            background-color: $GroundColor;
        }
        .bg-ice {
            background-color: $IceColor;
        }
        .bg-normal {
            background-color: $NormalColor;
        }
        .bg-poison {
            background-color: $PoisonColor;
            color: #fff;
        }
        .bg-psychic {
            background-color: $PsychicColor;
        }
        .bg-rock {
            background-color: $RockColor;
        }
        .bg-steel {
            background-color: $SteelColor;
        }
    }
}
</style>