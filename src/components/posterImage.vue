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
            <img :src="`${store.startLinkPoster}${details.poster_path}`" alt="poster of video">
        </div>
        <div v-else>
            poster not found
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
section {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>