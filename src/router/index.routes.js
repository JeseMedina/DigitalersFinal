import { pages } from '../controllers/index';

let content = document.getElementById('container');
let banner = document.getElementById('banner-movie');


const router = async (route) => {
    content.innerHTML = '';
    banner.innerHTML = '';

    if (route === '' || route === '#'){
        return content.appendChild(await pages.home()) & banner.appendChild(await pages.homeBanner());
    }else if(route.includes('movie')){
        return content.appendChild(await pages.movie()) & banner.appendChild(await pages.movieBanner());
    }else if(route.includes('tv')){
        return content.appendChild(await pages.tv()) & banner.appendChild(await pages.tvBanner());
    }else{
        console.log('404')
    }
}

export { router }