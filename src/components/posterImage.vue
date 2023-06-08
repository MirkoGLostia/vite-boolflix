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
        <div>
            <img :src="`${store.startLinkPoster}${details.poster_path}`" alt="poster not found">
        </div>
    </section>
</template>
  
<style scoped>
section {
    padding: 20px;
}
</style>