<script>
import { store } from './../store';
import movieDetails from './movieDetails.vue'

export default {
    name: 'mainFilmShow',
    components: {
        movieDetails,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section>
        <div v-for="element in store.filmData" :key="element.id">
            <movieDetails :details="element" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>