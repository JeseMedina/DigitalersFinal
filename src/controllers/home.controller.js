import views from '../views/home.html';
import { calculateProgressBar, onHandleClick, throttle } from '../js/carousel'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export default async () => {
  let divElement = '';
  divElement = document.createElement('div');
  divElement.innerHTML = views

  // Trending
  const getTrending = async () => {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');
    return response.json();
  }

  const trendingElement = divElement.querySelector('#trending');
  const trending = await getTrending();
  trending.results.forEach(movie => {
    let img = IMG_URL + movie.backdrop_path;
    let type;
    if (movie.media_type === 'movie') {
      type = '/#movie/'
    } else {
      type = '/#tv/'
    }
    trendingElement.innerHTML += `
    <img src="${img}" onclick="document.location=this.id+'${type}${movie.id}'" alt="${movie.name}">`;
  });

  // Movies
  const getMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es');
    return response.json();
  }
  const moviesElement = divElement.querySelector('#movies');
  const movies = await getMovies();
  movies.results.forEach(movie => {
    let img = IMG_URL + movie.backdrop_path;
    moviesElement.innerHTML += `
    <img src="${img}" onclick="document.location=this.id+'/#movie/${movie.id}'" alt="${movie.name}">
    `;
  })

  // TV
  const getTv = async () => {
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=c4ded25acda802a0e1f075a5f5eab9db');
    return response.json();
  }
  const tvElement = divElement.querySelector('#tv');
  const tv = await getTv();
  tv.results.forEach(movie => {
    let img = IMG_URL + movie.backdrop_path;
    tvElement.innerHTML += `
    <img src="${img}" onclick="document.location=this.id+'/#tv/${movie.id}'" alt="${movie.name}">
    `;
  })


  document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  })

  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  }, 250)

  window.addEventListener("resize", throttleProgressBar)

  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

  return divElement;
};