
import { galery } from '../router/router.js'
import { status } from '../state.js'

export const landingPage = ()=>{
    const $verTatuajes = document.querySelector('.landingPage-mobile_portada__button')
    $verTatuajes.addEventListener('click', ()=>{
        galery()
    })
}
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

$blackWork.addEventListener('click', ()=>{
    status.param = 'black'
    galery(status.param)  
})
$color.addEventListener('click', ()=>{
    status.param = 'color'
    galery(status.param)   
})
$fineline.addEventListener('click', ()=>{
    status.param = 'fineline'
    galery(status.param)   
})
$ilustrativo.addEventListener('click', ()=>{
    status.param = 'ilustrativo'
    galery(status.param)   
})
$japanese.addEventListener('click', ()=>{
    status.param = 'japanese'
    galery(status.param)   
})
$microrealismo.addEventListener('click', ()=>{
    status.param = 'microrealismo'
    galery(status.param)   
})
$minimalista.addEventListener('click', ()=>{
    status.param = 'minimalista'
    galery(status.param)   
})
$neotraditional.addEventListener('click', ()=>{
    status.param = 'neotraditional'
    galery(status.param)   
})
$oldschool.addEventListener('click', ()=>{
    status.param = 'oldschool'
    galery(status.param)   
})
$realismo.addEventListener('click', ()=>{
    status.param = 'realismo'
    galery(status.param)   
})
$traditional.addEventListener('click', ()=>{
    status.param = 'traditional'
    galery(status.param)   
})
$watercolor.addEventListener('click', ()=>{
    status.param = 'watercolor'
    galery(status.param)   
})