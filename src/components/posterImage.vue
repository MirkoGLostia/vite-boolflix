<script>
import { store } from './../store';

export default {
    name: 'posterImage',
    props: {
        details: Object
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
        <div v-if="details.poster_path !== null">
            <img :src="`${store.startLinkPoster}${details.poster_path}`" alt="poster not found">
        </div>
        <div v-else>
            non poster
        </div>
    </section>
</template>
  
<style scoped>
section {
    padding: 20px;
}
</style>