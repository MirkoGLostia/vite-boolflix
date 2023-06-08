import { reactive } from 'vue'

export const store = reactive({
    apiURLMovie: 'https://api.themoviedb.org/3/search/movie?api_key=906a74ec9667d99e434c6e12b8d36c54&language=it-IT&',
    apiURLTv: 'https://api.themoviedb.org/3/search/tv?api_key=906a74ec9667d99e434c6e12b8d36c54&language=it_IT&',
    startLinkPoster: 'https://image.tmdb.org/t/p/w342',
    movieData: [],
    seriesData: [],
    searchText: ''
})