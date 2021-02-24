import { printGalery } from '../galery/galery.js'
import { filterImg,filterInkers } from '../filter/filter.js'
import { printDataModalGalery,printDataModalGaleryGrid } from '../galery/modalGalery.js'
import { landingPage } from '../landingPage/landingPage.js'
import { printContactForm } from '../contactForm/contactForm.js'
import { printInkers } from '../inkers/inkersGalery.js'
import { printLandingPageInkersCarousel } from '../landingPage/landingPageInkersCarousel.js'
import { printInkerProfile } from '../inkers/inkersProfile.js'
import { status } from '../state.js'

const $LP = document.querySelector('.landingPage-mobile')
const $G = document.querySelector('.galery')
const $MG = document.querySelector('.modalGalery')
const $CF = document.querySelector('.contactForm')
const $IP = document.querySelector('.inkersProfile')
const $GI = document.querySelector('.galeryInkers')
const $arrow = document.querySelector('.header_nav-mobile_bar__arrow')
const $menu = document.querySelector('.header_nav-mobile_bar__hamburger')


export const initial = ()=>{
    $LP.classList.remove('hidden')
    $G.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    $IP.classList.add('hidden')
    console.log('initial');
    status.pagination = []
    landingPage()
    printLandingPageInkersCarousel()

}
export const galery = (param)=>{
    $G.classList.remove('hidden')
    $LP.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    $IP.classList.add('hidden')
    console.log('galery');  
    $arrow.classList.add('hidden')
    $menu.classList.remove('hidden')
    
    status.pagination.push(
        {
            action: 'galery',
            dat: param
        }
    )
    console.log(status.pagination);
    printGalery(filterImg(param))  
}
export const modalGalery  = (data)=>{
    console.log(data);
    console.log('modalGalery');  
    $MG.classList.remove('hidden')
    $G.classList.add('hidden')
    $IP.classList.add('hidden')
    // status.pagination.push(
    //     {
    //         action: 'modalGalery',
    //         dat: data
    //     }
    // )
    $arrow.classList.remove('hidden')
    $menu.classList.add('hidden')
    console.log(status.pagination);
    printDataModalGalery(data)
    printDataModalGaleryGrid(data)
}
export const contactForm = (data)=>{
    console.log('contactForm');
    $CF.classList.remove('hidden')
    $IP.classList.add('hidden')
    status.pagination.push(
        {
            action: 'contactForm',
            dat: data
        }
    )
    $arrow.classList.remove('hidden')
    $menu.classList.add('hidden')
    console.log(status.pagination);
    printContactForm(data)
}
export const inkers = ()=>{
    console.log('inkers galery');
    $LP.classList.add('hidden')
    $G.classList.add('hidden')
    $GI.classList.remove('hidden')
    $IP.classList.add('hidden')
    status.pagination.push(
        {
            action: 'inkers',
            dat: ''
        }
    )
    console.log(status.pagination);
    printInkers()
}
export const inkersProfile = (e)=>{
    $IP.classList.remove('hidden')
    $LP.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    status.pagination.push(
        {
            action: 'inkersProfile',
            dat: e
        }
    )
    $arrow.classList.add('hidden')
    $menu.classList.remove('hidden')
    console.log(status.pagination);
    printInkerProfile(e)
}
