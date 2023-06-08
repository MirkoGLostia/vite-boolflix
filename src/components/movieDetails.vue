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
            <span>
                {{ details.title }}
            </span>
            <br>
            <span>
                {{ details.original_title }}
            </span>
            <br>
            <span>
                {{ details.original_language }}
            </span>
            <br>
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