import { allInkers } from "../firebase.js"

export const printLandingPageInkersCarousel  = ()=>{
    const landingPageTatuadores = document.querySelector('.landingPage_tatuadores__carousel')
    landingPageTatuadores.innerHTML = ''
    allInkers.forEach(e=>{
        const element = document.createElement('div')
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