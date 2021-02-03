import { allInkers } from '../firebase.js'

export const printInkers = (arrayFiltered)=>{

    if (!arrayFiltered) {
        const $gridContainer = document.querySelector('.galeryInkers__grid')
        $gridContainer.innerHTML = ``
        allInkers.forEach(e=>{
    
            const container = document.createElement('div')
            container.innerHTML = `
            <div class="galeryInkers_grid__element">
                <div class="galeryInkers_grid_element__name">
                    ${e.profile.name}
                </div>
                <div class="galeryInkers_grid_element__photo">
                </div>
            </div>
            `
            $gridContainer.appendChild(container)
        
            // const gridElement = document.createElement('div')
            // gridElement.style.backgroundImage= `url('${e.img.url})`
            // gridElement.classList.add('galeryInkers_grid__element')
            // gridElement.dataset.url = e.img.url
            // gridElement.dataset.tags = e.img.tags
            // gridElement.dataset.name = e.name
            // $gridContainer.appendChild(gridElement)
    
        })
    }

}