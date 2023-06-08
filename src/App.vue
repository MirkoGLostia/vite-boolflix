<script>
import { store } from './store';
import axios from 'axios';
import headerApp from './components/headerApp.vue';
import mainFilmShow from './components/mainFilmShow.vue';

export default {
  components: {
    headerApp,
    mainFilmShow
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilmInfo() {
      axios.get(store.apiURL)
        .then(res => {
          store.filmData = res.data.results;
          console.log(store.filmData);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getFilmInfo();
  }
}
</script>

<template>
  <headerApp />

  <mainFilmShow />
</template>

<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;
</style>
