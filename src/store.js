import { reactive } from 'vue'

export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=906a74ec9667d99e434c6e12b8d36c54&language=it-IT&',
    filmData: [],
    searchText: ''
})