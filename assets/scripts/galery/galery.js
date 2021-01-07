import { getAllInkers } from '../firebase.js'

export const printGalery = async(filter)=>{
    if (!filter) {
        const gridContainer = document.querySelector('.galery__grid')
        gridContainer.innerHTML=''
        const array = await getAllInkers()
        array.forEach(e => {
            e.img.forEach(el =>{
                // print each image
                const gridElement = document.createElement('div')
                gridElement.style.backgroundImage= `url('${el.url})`
                gridElement.classList.add('galery_grid__element')
                gridContainer.appendChild(gridElement)  
            })    
        });
    }
}