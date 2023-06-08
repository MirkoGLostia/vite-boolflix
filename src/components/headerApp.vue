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
    <section>
        <form>
            <input type="text" placeholder="search film" id="searchBarFilm" v-model="store.searchText">
            <button type="submit" @click.prevent="$emit('startSearch')">
                search
            </button>
        </form>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>