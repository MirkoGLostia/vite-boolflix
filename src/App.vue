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
    getVideoInfo() {
      // movie search
      let myMovieUrl = store.apiURLMovie;

      // series search
      let mySeriesURL = store.apiURLTv;



      if (store.searchText !== '') {
        // movie
        myMovieUrl += `query=${store.searchText}`

        //series
        mySeriesURL += `query=${store.searchText}`
      }


      // movie call
      axios.get(myMovieUrl)
        .then(res => {
          store.movieData = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })

      // series call
      axios.get(mySeriesURL)
        .then(res => {
          store.seriesData = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })

      // reset
      store.searchText = ''
    }
  },
  created() {
    this.getVideoInfo();
  }
}
</script>

<template>
  <headerApp @startSearch="getVideoInfo" />

  <mainFilmShow />
</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss';
</style>
