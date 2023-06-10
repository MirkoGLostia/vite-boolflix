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
                    {{ details.title }}
                </span>
                <br>
                <span>
                    {{ details.original_title }}
                </span>
            </div>

            <!-- series -->
            <div v-else>
                <span>
                    {{ details.name }}
                </span>
                <br>
                <span>
                    {{ details.original_name }}
                </span>
            </div>

            <!-- language -->
            <div>
                <span v-if="store.flagImg.includes(details.original_language)">
                    {{ details.original_language }}
                    <img :src="`/img/${details.original_language}.png`" alt="nation of the language">
                </span>
                <span v-else>
                    {{ details.original_language }} flag
                </span>
            </div>

            <!-- vote -->
            <div>
                <span> {{ Math.ceil(details.vote_average / 2) }} of 5 stars </span>
                <br>

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
                <p>
                    {{ details.overview }}
                </p>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
section {
    width: 345px;
    height: 515px;
    background-color: black;
    color: white;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    overflow: hidden;
    overflow-y: auto;
}
</style>