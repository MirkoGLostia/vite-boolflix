<script>
export default {
    name: 'headerApp',
}
</script>

<template>
    <section>
        <div>
            <input type="text" placeholder="search film">
            <button>
                search
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables' as v;
@use './../styles/partials/mixins' as *;
</style>