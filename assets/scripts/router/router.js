import { printGalery } from '../galery/galery.js'
import { filterImg,filterInkers } from '../filter/filter.js'
import { printDataModalGalery,printDataModalGaleryGrid } from '../galery/modalGalery.js'
import { landingPage } from '../landingPage/landingPage.js'
import { printContactForm } from '../contactForm/contactForm.js'
import { printInkers } from '../inkers/inkersGalery.js'
import { printLandingPageInkersCarousel } from '../landingPage/landingPageInkersCarousel.js'
import { printInkerProfile } from '../inkers/inkersProfile.js'

const $LP = document.querySelector('.landingPage-mobile')
const $G = document.querySelector('.galery')
const $MG = document.querySelector('.modalGalery')
const $CF = document.querySelector('.contactForm')
const $IP = document.querySelector('.inkersProfile')
const $GI = document.querySelector('.galeryInkers')


export const initial = ()=>{
    $LP.classList.remove('hidden')
    $G.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    $IP.classList.add('hidden')
    // $IP.classList.add('hidden')
    console.log('initial');
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
    printGalery(filterImg(param))  
}
export const modalGalery  = (data)=>{
    console.log(data);
    console.log('modalGalery');  
    $MG.classList.remove('hidden')
    $G.classList.add('hidden')
    $IP.classList.add('hidden')
    printDataModalGalery(data)
    printDataModalGaleryGrid(data)
}
export const contactForm = (data)=>{
    console.log('contactForm');
    $CF.classList.remove('hidden')
    $IP.classList.add('hidden')
    printContactForm(data)
}
export const inkers = ()=>{
    console.log('inkers galery');
    $LP.classList.add('hidden')
    $G.classList.add('hidden')
    $GI.classList.remove('hidden')
    $IP.classList.add('hidden')
    printInkers()
}
export const inkersProfile = (e)=>{
    $IP.classList.remove('hidden')
    $LP.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    $GI.classList.add('hidden')
    printInkerProfile(e)
}
