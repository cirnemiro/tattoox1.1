import { allInkers } from "../firebase.js"
import { printInkerProfile } from "../inkers/inkersProfile.js"
import { inkersProfile } from "../router/router.js"

export const printLandingPageInkersCarousel  = ()=>{
    const landingPageTatuadores = document.querySelector('.landingPage_tatuadores__carousel')
    landingPageTatuadores.innerHTML = ''
    allInkers.forEach(e=>{
        const element = document.createElement('div')
        element.dataset.url = e.profile.name
        element.addEventListener('click',()=>{
            inkersProfile(e.profile.name)
        })
        element.innerHTML = `
        <div class="landingPage_tatuadores_carousel__element">
            <div class="landingPage_tatuadores_carousel_element__name">
                    ${e.profile.name}
            </div>
            <div class="landingPage_tatuadores_carousel_element__photo">
            </div>
        </div>
        `
        landingPageTatuadores.appendChild(element)
    })

}