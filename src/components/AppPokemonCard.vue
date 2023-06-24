<script>
export default {

    props: {
        pokemon: Object
    }
    
}
</script>

<template lang="">
    <div class="main-card py-3">
        <div class="card-image" :style="`background-image: url('${pokemon.imageUrl}')`"></div>
        <div class="card-number my-2">
            <span v-text="pokemon.number"></span>
        </div>
        <div class="card-name">
            <h1 v-text="pokemon.name" class="fs-5 fw-bold"></h1>
        </div>
        <div class="card-type">
            <span v-text="pokemon.type1" class="fs-5 fst-italic"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    .main-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    .card-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>