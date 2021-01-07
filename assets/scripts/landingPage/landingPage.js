import { galery } from '../router/router.js'


export const landingPage = ()=>{
    const $verTatuajes = document.querySelector('.landingPage-mobile_portada__button')
    $verTatuajes.addEventListener('click', ()=>{
        galery()
    })
}