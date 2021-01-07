import { printGalery } from '../galery/galery.js'

const LP = document.querySelector('.landingPage-mobile')
const G = document.querySelector('.galery')

export const initial = ()=>{
    LP.classList.remove('hidden')
    G.classList.add('hidden')
    console.log('initial');
}
export const galery = ()=>{
    LP.classList.add('hidden')
    G.classList.remove('hidden')
    console.log('galery');  
    printGalery()  
}
