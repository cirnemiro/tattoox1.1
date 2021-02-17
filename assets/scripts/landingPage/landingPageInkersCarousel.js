import { allInkers } from "../firebase.js"
import { printInkerProfile } from "../inkers/inkersProfile.js"
import { inkersProfile } from "../router/router.js"

export const printLandingPageInkersCarousel  = ()=>{
    const landingPageTatuadores = document.querySelector('.landingPage_tatuadores__carousel')
    landingPageTatuadores.innerHTML = ''
    allInkers.forEach(e=>{
        console.log(e);
        const element = document.createElement('div')
        const wallpaperDiv = document.createElement('div')
        const profileDiv = document.createElement('div')
        profileDiv.classList.add('landingPage_tatuadores_carousel_element__photo')
        profileDiv.style.backgroundImage = `url(${e.profile.profilePhoto})`
        wallpaperDiv.classList.add('landingPage_tatuadores_carousel__element')
        wallpaperDiv.style.backgroundImage = `url(${e.profile.profileWallpaper})`
        element.dataset.url = e.profile.name
        element.addEventListener('click',()=>{
            inkersProfile(e.profile.name)
        })
        wallpaperDiv.innerHTML = `
        
            <div class="landingPage_tatuadores_carousel_element__name">
                    ${e.profile.name}
            </div>
            <div class="landingPage_tatuadores_carousel_element__photo" ">
            </div>
        
        `
        wallpaperDiv.appendChild(profileDiv)
        element.appendChild(wallpaperDiv)
        landingPageTatuadores.appendChild(element)
        
    })

}