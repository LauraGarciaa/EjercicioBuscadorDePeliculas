const API_KEY = "2d8f14a702a43689ec9f6d07fc05a17b";
const API_URL = 'https://api.themoviedb.org/3/search/movie'
const peliculasContainer = document.getElementById("peliculas");
const formSearch = document.getElementById("form");
const buscarInput = document.getElementById("buscarInput");

axios.get(`${API_URL}?api_key=${API_KEY}&query=A`).then((resultados) => console.log('resultados', resultados));

const showPeliculas = (movies) => {
  peliculasContainer.innerHTML = "";
  movies.forEach((movie) => {
    let imageUrl = '';
    if (movie.poster_path) {
      imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }
    peliculasContainer.innerHTML += `
        <div class="card mr-1 col-lg-3 col-xs-12 col-md-6">
            <img src="${imageUrl}" alt="${movie.original_title}">
            <div class="card-body">
                <h5 class="card-header">${movie.original_title}</h5>
                <span class="card-title">${movie.overview}</span>
            </div>
        </div> `;
  });
};

const searchPeliculas = async (e) => {
  e.preventDefault()
  try { 
      const valorDelInput = buscarInput.value
      const res = await axios.get(`${API_URL}?api_key=${API_KEY}&query=${valorDelInput}`)
      const peliculas = res.data.results
      showPeliculas(peliculas) 
  } catch (error) {
    console.error(error)
  }
}
formSearch.addEventListener('submit', searchPeliculas)