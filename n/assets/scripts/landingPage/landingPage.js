
import { galery } from '../router/router.js'
import { status } from '../state.js'
import { printGaleryTags } from '../galery/galery.js'

export const landingPage = ()=>{
    const $verTatuajes = document.querySelector('.landingPage-mobile_portada__button')
    $verTatuajes.addEventListener('click', ()=>{
        status.param = '000000000000'
        galery()
    })
}


// styles listeners
const $blackWork = document.querySelector('#blackwork')
const $color = document.querySelector('#color')
const $fineline = document.querySelector('#fineline')
const $ilustrativo = document.querySelector('#ilustrativo')
const $japanese = document.querySelector('#japanese')
const $microrealismo = document.querySelector('#microrealismo')
const $minimalista = document.querySelector('#minimalista')
const $neotraditional = document.querySelector('#neotraditional')
const $oldschool = document.querySelector('#oldschool')
const $realismo = document.querySelector('#realismo')
const $traditional = document.querySelector('#traditional')
const $watercolor = document.querySelector('#watercolor')


export const filterblackwork = ()=>{
    status.param = 'black'
    galery(status.param)  
    printGaleryTags()
}
export const filtercolor = ()=>{
    status.param = 'color'
    galery(status.param)  
    printGaleryTags()
}
export const filterfineline = ()=>{
    status.param = 'fineline'
    galery(status.param)  
}
export const filterjapanese = ()=>{
    status.param = 'japanese'
    galery(status.param)  
}
export const filtermicrorealismo = ()=>{
    status.param = 'microrealismo'
    galery(status.param)  
}
export const filterilustrativo = ()=>{
    status.param = 'ilustrativo'
    galery(status.param)  
}
export const filterminimalista = ()=>{
    status.param = 'minimalista'
    galery(status.param)  
}
export const filterneotraditional = ()=>{
    status.param = 'neotraditional'
    galery(status.param)  
}
export const filteroldschool = ()=>{
    status.param = 'oldschool'
    galery(status.param)  
}
export const filterrealismo = ()=>{
    status.param = 'realismo'
    galery(status.param)  
}
export const filtertraditional = ()=>{
    status.param = 'traditional'
    galery(status.param)  
}
export const filterwatercolor = ()=>{
    status.param = 'watercolor'
    galery(status.param)  
}
$blackWork.addEventListener('click',filterblackwork)
$color.addEventListener('click', filtercolor)
$fineline.addEventListener('click',filterfineline)
$japanese.addEventListener('click',filterjapanese)
$microrealismo.addEventListener('click',filtermicrorealismo)
$ilustrativo.addEventListener('click',filterilustrativo)
$minimalista.addEventListener('click', filterminimalista)
$neotraditional.addEventListener('click', filterneotraditional)
$oldschool.addEventListener('click', filteroldschool)
$realismo.addEventListener('click', filterrealismo)
$traditional.addEventListener('click', filtertraditional)
$watercolor.addEventListener('click', filterwatercolor)