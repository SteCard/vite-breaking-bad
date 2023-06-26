import { reactive } from "vue";

export const store = reactive({

    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons',
    typeApiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1',

    pokemonList: [],

    pokemonTypeList: [],
    typeSelected: 'All',

});