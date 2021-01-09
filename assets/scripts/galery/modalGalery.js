import { galery } from "../router/router.js"


export const printDataModalGalery = (data)=>{
    const $navMobileHamburger = document.querySelector('.header_nav-mobile_bar__hamburger')
    const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    const $modalGaleryPhoto = document.querySelector('.modalGalery__photo')

    $modalGaleryPhoto.style.backgroundImage=`url('${data.url}')`

    $navMobileHamburger.classList.add('hidden')
    $navMobileArrow.classList.remove('hidden')

    $navMobileArrow.addEventListener('click',()=>{
        $navMobileHamburger.classList.remove('hidden')
        $navMobileArrow.classList.add('hidden')
        galery()
    })

}
export const printDataModalGaleryGrid = (data,allInkers)=>{
    console.log(data,allInkers);
    let photosOfInker = {}
    allInkers.forEach((e,i,a) => {
        if (e.profile.name === data.name) {
            photosOfInker = a[i]
        }
    });
    console.log(photosOfInker);
    const $gridContainer = document.querySelector('.modalGalery_galery__grid')
    $gridContainer.innerHTML=''
    photosOfInker.img.forEach(e => {
        const $gridContainerElement = document.createElement('div')


        $gridContainerElement.classList.add('modalGalery_galery_grid__element')
        $gridContainerElement.style.backgroundImage=`url('${e.url}')`
        $gridContainer.appendChild($gridContainerElement)
    });

}


