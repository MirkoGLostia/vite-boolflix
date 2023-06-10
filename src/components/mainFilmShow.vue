<script>
import { store } from './../store';
import movieDetails from './movieDetails.vue'
import posterImage from './posterImage.vue';

export default {
    name: 'mainFilmShow',
    components: {
        movieDetails,
        posterImage,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section id="main-container-sections">
        <h2>MOVIES</h2>
        <section>
            <div v-for="video in store.movieData" :key="video.id" class="card-container">
                <div class="image">
                    <posterImage :details="video" />
                    <div class="info">
                        <movieDetails :details="video" />
                    </div>
                </div>
            </div>
        </section>

        <h2>TV SERIES</h2>
        <section>
            <div v-for="video in store.seriesData" :key="video.id" class="card-container">
                <div class="image">
                    <posterImage :details="video" />
                    <div class="info">
                        <movieDetails :details="video" />
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;

#main-container-sections {
    background-color: v.$myblack;
    height: calc(100vh - 70px);
    overflow: hidden;
    overflow-y: auto;

    h2 {
        padding: 20px;
    }

    section {
        display: flex;
        flex-wrap: wrap;
        padding: 0 auto;

        .card-container {
            width: 340px;
            height: 500px;
            margin: 50px;
            position: relative;

            .info {
                display: none;
            }

            .image:hover .info {
                display: block;
            }
        }

    }
}
</style>