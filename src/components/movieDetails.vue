<script>
export default {
    name: 'movieDetails',
    props: {
        details: Object
    }
}
</script>

<template>
    <section>
        <div>
            <!-- title search -->
            <span>
                {{ details.title }}
                {{ details.name }}
            </span>
            <br>
            <!-- original title -->
            <span>
                {{ details.original_title }}
                {{ details.original_name }}
        </span>
        <br>
        <!-- language 1 -->
            <span>
                {{ details.original_language }}
                <img :src="`/img/${details.original_language}.png`" alt="flag">
            </span>

            <!-- language 2
                <span>
                    <img :src="`/img/${details.original_language}.png`" :alt="`${details.original_language}`">
                </span> -->

            <br>
            <!-- vote -->
            <span>
                {{ details.vote_average }}
            </span>
        </div>
    </section>
</template>
  
<style scoped>
section {
    padding: 50px;
}
</style>