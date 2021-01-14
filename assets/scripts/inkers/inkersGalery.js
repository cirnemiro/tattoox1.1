import { allInkers } from '../firebase.js'

export const printInkers = ()=>{
    const $gridContainer = document.querySelector('.galeryInkers__grid')
    $gridContainer.innerHTML = ''
    allInkers.forEach(e=>{
        console.log('hola');
        // const gridElement = document.createElement('div')
        // gridElement.style.backgroundImage= `url('${e.img.url})`
        // gridElement.classList.add('galeryInkers_grid__element')
        // gridElement.dataset.url = e.img.url
        // gridElement.dataset.tags = e.img.tags
        // gridElement.dataset.name = e.name
        // $gridContainer.appendChild(gridElement)

    })
}