import views from '../views/movie.html'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

export default async () => {
    let divElement = '';
    divElement = document.createElement('div');
    divElement.innerHTML = views

    let id = window.location.hash.split('/')[1]

    const getInfo = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);
        return response.json();
    }

    const info = await getInfo();
    console.log(info)

    const synopsis = divElement.querySelector('#synopsis');
    const genre = divElement.querySelector('#genre');
    const year = divElement.querySelector('#year');
    const qualification = divElement.querySelector('#qualification');

    synopsis.innerHTML = info.overview;
    year.innerHTML = info.first_air_date
    .split('-')[0];
    qualification.innerHTML = info.vote_average + "/10";

    for (let i = 0; i < info.genres.length; i++) {
        genre.innerHTML += info.genres[i].name;
        if (i + 1 !== info.genres.length) {
            genre.innerHTML += ", "
        }
    }

    const getCredit = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=c4ded25acda802a0e1f075a5f5eab9db&language=es`);
        return response.json();
    }

    const castElement = divElement.querySelector('#cast');
    const credits = await getCredit();

    let castLength = 0;

    if (credits.cast.length > 20 ){
        castLength = 12;
    }else{
        castLength = credits.cast.length;
    }

    for (let i = 0; i < castLength; i++) {
        let img;
        if(credits.cast[i].profile_path === null){
            img = 'https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsImNvbXBpbGVkX3RoZW1lX2Fzc2V0cy9FTElHTyBSRUNSVUlUTUVOVC9wbmcvdXNlci1wcm9maWxlLWRlZmF1bHQucG5nIl1d';
        }else{
            img = IMG_URL + credits.cast[i].profile_path;
        }
        
        
        castElement.innerHTML += `
        <div class="card">
            <img src="${img}">
            <div class="card-container">
                <p class="actor">${credits.cast[i].name}</p>
                <p class="character">${credits.cast[i].character}</p>
            </div>
        </div>
        `
    }




    return divElement;
}