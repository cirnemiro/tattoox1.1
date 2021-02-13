import { allInkers } from '../firebase.js'
import { inkersProfile } from '../router/router.js'
import { printInkerProfile } from './inkersProfile.js'

export const printInkers = (arrayFiltered)=>{

    if (!arrayFiltered) {
        const $gridContainer = document.querySelector('.galeryInkers__grid')
        $gridContainer.innerHTML = ``
        allInkers.forEach(e=>{
    
            const container = document.createElement('div')
            console.log(e.profile.profileWallpaper);
            const element = document.createElement('div')
            element.style.backgroundImage = `url(${e.profile.profileWallpaper})`
            element.classList.add('galeryInkers_grid__element')
            // container.innerHTML = `
            // <div class="galeryInkers_grid__element style="backgroundImage=url('${e.profile.profileWallpaper}')">
            //     <div class="galeryInkers_grid_element__name">
            //         ${e.profile.name}
            //     </div>
            //     <div class="galeryInkers_grid_element__photo" >
            //     </div>
            // </div>
            element.addEventListener('click',()=>{
                inkersProfile(e.profile.name)
            })
            element.innerHTML = `
            <div class="galeryInkers_grid_element__name">
                ${e.profile.name}
            </div>
            <div class="galeryInkers_grid_element__photo" >
            </div>
            `
            container.appendChild(element)

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