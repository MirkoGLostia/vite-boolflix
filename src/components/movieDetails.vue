<script>
export default {
    name: 'movieDetails',
    props: {
        details: Object
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
            <br>
            <!-- language 1 -->
            <span v-if="src = `/img/${details.original_language}.png` !== null">
                {{ details.original_language }}
                <img :src="`/img/${details.original_language}.png`" alt="flag">
            </span>
            <span v-else>
                {{ details.original_language }} flagger
            </span>

            <!-- language 2 -->
            <!-- <span> <img :src="`/img/${details.original_language}.png`" :alt="`${details.original_language}`"> </span> -->

            <br>
            <!-- vote -->
            <span> {{ Math.ceil(details.vote_average / 2) }} of 5 stars </span>
            <br>

            <span v-if="Math.ceil(details.vote_average / 2) === 5">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
            </span>

            <span v-else-if="Math.ceil(details.vote_average / 2) === 4">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
            </span>

            <span v-else-if="Math.ceil(details.vote_average / 2) === 3">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
            </span>

            <span v-else-if="Math.ceil(details.vote_average / 2) === 2">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
            </span>

            <span v-else-if="Math.ceil(details.vote_average / 2) === 1">
                <img src="./../../public/img/full-star.png" alt="full star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
            </span>

            <span v-else-if="Math.ceil(details.vote_average / 2) === 0">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
                <img src="./../../public/img/empty-star.png" alt="empty star">
            </span>
        </div>
    </section>
</template>
  
<style scoped>
section {
    padding: 50px;
}
</style>