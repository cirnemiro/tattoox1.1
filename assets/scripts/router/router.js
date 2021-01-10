import { printGalery } from '../galery/galery.js'
import { filterImg } from '../filter/filter.js'
import { printDataModalGalery,printDataModalGaleryGrid } from '../galery/modalGalery.js'
import { landingPage } from '../landingPage/landingPage.js'
import { printContactForm } from '../contactForm/contactForm.js'


const $LP = document.querySelector('.landingPage-mobile')
const $G = document.querySelector('.galery')
const $MG = document.querySelector('.modalGalery')
const $CF = document.querySelector('.contactForm')

export const initial = ()=>{
    $LP.classList.remove('hidden')
    $G.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    console.log('initial');
    landingPage()
}
export const galery = ()=>{
    $G.classList.remove('hidden')
    $LP.classList.add('hidden')
    $MG.classList.add('hidden')
    $CF.classList.add('hidden')
    console.log('galery');  
    printGalery(filterImg())  
}
export const modalGalery  = (data,allInkers)=>{
    console.log('modalGalery');  
    $MG.classList.remove('hidden')
    $G.classList.add('hidden')
    printDataModalGalery(data)
    printDataModalGaleryGrid(data,allInkers)
}
export const contactForm = ()=>{
    console.log('contactForm');
    $CF.classList.remove('hidden')
    printContactForm()
}
