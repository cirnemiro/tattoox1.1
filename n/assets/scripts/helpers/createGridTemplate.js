import { modalGaleryData } from "../galery/galery"

export const createGridTemplate = (container,arrayOfImages)=>{
    printGaleryTags()
    const $gridContainer = document.querySelector('.galery__grid')
    $gridContainer.innerHTML=''

    arrayOfImagenes.forEach( e=>{
        // print each image
        const gridElement = document.createElement('div')
        gridElement.style.backgroundImage= `url(${e.url})`
        gridElement.classList.add('galery_grid__element')
        gridElement.dataset.url = e.url
        gridElement.dataset.tags = e.tags
        gridElement.dataset.name = e.tatuador
        gridElement.addEventListener('click',()=>{
            modalGaleryData({})
        })
        $gridContainer.appendChild(gridElement)
    })
}