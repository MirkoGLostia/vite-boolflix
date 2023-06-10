<script>
import { store } from './../store';

export default {
    name: 'headerApp',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <!-- logo -->
        <div>
            <h1>
                BOOLFLIX
            </h1>
        </div>

        <!-- search bar -->
        <div>
            <form>
                <input type="text" placeholder="search film" id="searchBarFilm" v-model="store.searchText"
                    @keypress.enter.prevent="$emit('startSearch')">
            </form>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;

header {
    background-color: black;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    h1 {
        color: v.$myred;
    }

    input {
        width: 300px;
        padding: 2px;
        font-size: 18px;
    }
}
</style>