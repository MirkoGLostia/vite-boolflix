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
        <h2>MOVIES</h2>
        <div v-for="video in store.movieData" :key="video.id">
            <movieDetails :details="video" />
        </div>

        <h2>TV SERIES</h2>
        <div v-for="video in store.seriesData" :key="video.id">
            <movieDetails :details="video" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>