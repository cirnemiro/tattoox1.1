import { modalGalery } from '../router/router.js'
import { filterImg } from '../filter/filter.js'


export const printGalery = ()=>{
    const arrayImagenes = filterImg().allImages
    const $gridContainer = document.querySelector('.galery__grid')
    $gridContainer.innerHTML=''
    
    arrayImagenes.forEach( e=>{
        // print each image
        const gridElement = document.createElement('div')
        gridElement.style.backgroundImage= `url('${e.img.url})`
        gridElement.classList.add('galery_grid__element')
        gridElement.dataset.url = e.img.url
        gridElement.dataset.tags = e.img.tags
        gridElement.dataset.name = e.name
        gridElement.addEventListener('click',modalGaleryData)
        $gridContainer.appendChild(gridElement)
    })
}
export const modalGaleryData =(e)=>{
    let data = e.target.dataset
    let allInkers = filterImg().allInkers
    modalGalery(data,allInkers)
}