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
            <span>
                poster not found
            </span>
        </div>
    </section>
</template>
  
<style lang="scss" scoped>
@use './../styles/partials/mixins' as *;

section {
    @include myCardDimension;

    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    // rules for the text
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
}
</style>