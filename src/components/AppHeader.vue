<script>

import AppSelect from './AppSelect.vue';

export default {

    components: {
        AppSelect
    }
}
</script>

<template lang="">
    <header>
        <div class="container my-5">
            <div class="row">
                <div class="col header-col">
                    <div class="circle big-circle circle-blue"></div>
                    <div class="circle small-circle circle-red"></div>
                    <div class="circle small-circle circle-yellow"></div>
                    <div class="circle small-circle circle-green"></div>
                </div>
                <div class="col select-col">
                    <AppSelect/>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    .header-col {
    display: flex;
    * {
        margin: 0 15px;
    }
    .circle {
        border-radius: 50%;
        border-style: solid;
        border-color: #fff;
    }
    .small-circle {
        width: 50px;
        height: 50px;
        border-width: 3px;
    }

    .big-circle {
        width: 100px;
        height: 100px;
        border-width: 6px;
    }
    .circle-blue {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, rgba(73, 73, 255, 1) 50%);
    }

    .circle-red {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #FF3E3E 50%);
    }
    .circle-yellow {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #FFFF47 50%);
    }
    .circle-green {
        background: linear-gradient(120deg, rgba(255, 255, 255, 1) 0%, #3D9E3D 50%);
    }
}

.select-col {
    display: flex;
    justify-content: flex-end;
}
</style>