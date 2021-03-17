import { galery, initial, inkers } from '../router/router.js'

export const header = ()=>{
    // NAV VISIBILITY
    const $navMobileHamburger = document.querySelector('.header_nav-mobile_bar__hamburger')
    const $navMobileContent = document.querySelector('.header_nav-mobile__content')
    const $navMobileContentClose = document.querySelector('.header_nav-mobile_content__close')
    $navMobileHamburger.addEventListener('click',()=>{
        $navMobileContent.classList.toggle('hidden')
    })
    $navMobileContentClose.addEventListener('click',()=>{
        $navMobileContent.classList.toggle('hidden')
    })
    // NAV LINKS ROUTES
    const $navMobileContentHome = document.querySelector('.home')
    $navMobileContentHome.addEventListener('click',()=>{
        initial()
        $navMobileContent.classList.add('hidden')        
    })
    const $navMobileContentGalery = document.querySelector('.tatuajes')
    $navMobileContentGalery.addEventListener('click',()=>{
        galery()        
        $navMobileContent.classList.add('hidden')
    })
    const $navMobileContentInkers = document.querySelector('.tatuadores')
    $navMobileContentInkers.addEventListener('click',()=>{
        inkers()        
        $navMobileContent.classList.add('hidden')
    })
    const $LPverTatuajes = document.querySelector('.landingPage_estilos__verTatuajes')
    $LPverTatuajes.addEventListener('click',()=>{
        galery()        
        $navMobileContent.classList.add('hidden')
    })
    const $LPverTatuadores = document.querySelector('.landingPage_tatuadores__verTatuajes')
    $LPverTatuadores.addEventListener('click',()=>{
        inkers()        
        $navMobileContent.classList.add('hidden')
    })
}

