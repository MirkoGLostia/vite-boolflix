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
            <span>
                {{ details.original_language }}
                <img :src="`/img/${details.original_language}.png`" alt="flag">
            </span>

            <!-- language 2 -->
            <!-- <span> <img :src="`/img/${details.original_language}.png`" :alt="`${details.original_language}`"> </span> -->

            <br>
            <!-- vote -->
            <span>
                {{ Math.ceil(details.vote_average / 2) }} of 5 stars
            </span>
        </div>
    </section>
</template>
  
<style scoped>
section {
    padding: 50px;
}
</style>