<script>
import { store } from '../store';

export default {
    name: 'movieDetails',
    props: {
        details: Object
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section>
        <div>
            <!-- movie -->
            <div v-if="details.title">
                <span>
                    <h4>Titolo: </h4>
                    {{ details.title }}
                </span>
                <br>
                <span>
                    <h4>Titolo originale: </h4>
                    {{ details.original_title }}
                </span>
            </div>

            <!-- series -->
            <div v-else>
                <span>
                    <h4>Titolo: </h4>
                    {{ details.name }}
                </span>
                <br>
                <span>
                    <h4>Titolo originale: </h4>
                    {{ details.original_name }}
                </span>
            </div>

            <!-- language -->
            <div>
                <h4>Lingua: </h4>
                <span v-if="store.flagImg.includes(details.original_language)">
                    <img :src="`/img/${details.original_language}.png`" alt="nation of the language">
                </span>
                <span v-else>
                    {{ details.original_language }} flag
                </span>
            </div>

            <!-- vote -->
            <div>
                <h4>Voto: </h4>
                <!-- <span> {{ Math.ceil(details.vote_average / 2) }} of 5 stars </span> <br> -->

                <span v-if="Math.ceil(details.vote_average / 2) === 5">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                </span>

                <span v-else-if="Math.ceil(details.vote_average / 2) === 4">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/empty-star.png" alt="empty star">
                </span>

                <span v-else-if="Math.ceil(details.vote_average / 2) === 3">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                </span>

                <span v-else-if="Math.ceil(details.vote_average / 2) === 2">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                </span>

                <span v-else-if="Math.ceil(details.vote_average / 2) === 1">
                    <img src="/img/full-star.png" alt="full star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                </span>

                <span v-else-if="Math.ceil(details.vote_average / 2) === 0">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                    <img src="/img/empty-star.png" alt="empty star">
                </span>
            </div>

            <!-- overview -->
            <div>
                <h4>Overview: </h4>
                <p>
                    {{ details.overview }}
                </p>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
@use './../styles/partials/mixins' as *;

section {
    @include myCardDimension;

    border: 1px solid white;
    background-color: rgb(19, 10, 141);
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    overflow: hidden;
    overflow-y: auto;

    h4 {
        margin-bottom: 3px;
        margin-top: 5px;
    }
}
</style>