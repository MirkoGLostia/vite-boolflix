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

      let myUrl = store.apiURL;

      if (store.searchText !== '') {
        myUrl += `query=${store.searchText}`
      }

      axios.get(myUrl)
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
  <headerApp @startSearch="getFilmInfo" />

  <mainFilmShow />
</template>

<style lang="scss" scoped>
@use './styles/partials/variables' as *;
@use './styles/general.scss' as *;
</style>
