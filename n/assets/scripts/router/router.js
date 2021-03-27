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
const $CFu = document.querySelectorAll('.como-funciona')[0]


let scrolling = 0

export const scroollCounter = () => {
    window.onscroll = () =>{
        scrolling = window.scrollY
        console.log(scrolling);
    }
}


export const initial = ()=>{
    scroollCounter()
    $LP.classList.remove('hidden')
    $G.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    $IP.classList.add('hidden')
    $CFu.classList.remove('hidden')
    console.log('initial');
    window.scrollTo(0,0)
    status.pagination = []
    landingPage()
    printLandingPageInkersCarousel()

}
export const galery = (param)=>{
    console.log('scrollpatch',status.scrollPatch);
    window.scrollTo(0,status.scrollPatch)
    scroollCounter()
    document.querySelector('.galery_header_search_input__element').value = ''
    $G.classList.remove('hidden')
    $LP.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    $IP.classList.add('hidden')
    $CFu.classList.add('hidden')
    console.log('galery');  
    $arrow.classList.add('hidden')
    $menu.classList.remove('hidden')
    
   
    
    printGalery(filterImg(param))  
}
export const modalGalery  = (data)=>{
    scroollCounter()
    console.log('modalGalery');  
    $MG.classList.remove('hidden')
    $G.classList.add('hidden')
    $IP.classList.add('hidden')
    $CFu.classList.add('hidden')
    // status.pagination.push(
    //     {
    //         action: 'modalGalery',
    //         dat: data
    //     }
    // )
    $arrow.classList.remove('hidden')
    $menu.classList.add('hidden')
    
    printDataModalGalery(data)
    printDataModalGaleryGrid(data)
}
export const contactForm = (data)=>{
    scroollCounter()
    console.log('contactForm');
    $CF.classList.remove('hidden')
    // $IP.classList.add('hidden')
    $arrow.classList.remove('hidden')
    $CFu.classList.add('hidden')
    $menu.classList.add('hidden')
    
    printContactForm(data)
}
export const inkers = ()=>{
    scroollCounter()
    console.log('inkers galery');
    $LP.classList.add('hidden')
    $G.classList.add('hidden')
    $GI.classList.remove('hidden')
    $CFu.classList.add('hidden')
    $IP.classList.add('hidden')
    status.pagination.push(
        {
            action: 'inkers',
            dat: '',
            scroll : scrolling
        }
    )
   
    printInkers()
}
export const inkersProfile = (e)=>{
    scroollCounter()
    console.log('inker profile');
   // document.getElementsByTagName('body')[0].style.overflow='default'
    $IP.classList.remove('hidden')
    $LP.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $CFu.classList.add('hidden')
    $GI.classList.add('hidden')
    window.scrollTo(0,0)
    status.pagination.push(
        {
            action: 'inkersProfile',
            dat: e,
            scroll : 0
        }
    )
    $arrow.classList.add('hidden')
    $menu.classList.remove('hidden')
    
    printInkerProfile(e)
    window.scrollTo(0,0)
}
