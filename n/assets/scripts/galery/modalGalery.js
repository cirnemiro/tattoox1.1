import { contactForm, galery } from "../router/router.js"

const $modalBtn = document.querySelector('.modalGalery_btn__element')
const $navMobileHamburger = document.querySelector('.header_nav-mobile_bar__hamburger')
const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
const $modalGaleryPhoto = document.querySelector('.modalGalery__photo')
const $modalTitle = document.querySelector('.modalGalery_header__title')
const $modalTags = document.querySelector('.modalGalery__tags')

let contactFormData = ''

function modalBtn(){
    const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    $navMobileArrowForm.classList.remove('hidden')
    $navMobileArrow.classList.add('hidden')
    console.log('button');
    console.log(contactFormData);
    contactForm(contactFormData)
}
function navMobileArrow(){
    $navMobileHamburger.classList.remove('hidden')
    $navMobileArrow.classList.add('hidden')
    galery()
}
export const printDataModalGalery = (data)=>{

    let tags = ''

    if (typeof data.tags == 'string') { 
        tags = data.tags.split(',')
    }else{
        tags = data.tags
    }

    $modalGaleryPhoto.style.backgroundImage=`url('${data.url}')`
    $modalTitle.innerHTML=data.name
    $modalTags.innerHTML=''

    tags.forEach(tag => {
        const p = document.createElement('p')
        p.classList.add('modalGalery_tags_element')
        p.textContent=`#${tag}`
        $modalTags.appendChild(p)
    });

    $navMobileHamburger.classList.add('hidden')
    $navMobileArrow.classList.remove('hidden')

    $navMobileArrow.addEventListener('click',navMobileArrow)
    
    $modalBtn.addEventListener('click',modalBtn)

    contactFormData = data
    
}
export const printDataModalGaleryGrid = (data,allInkers)=>{
    let photosOfInker = {}

    allInkers.forEach((e,i,a) => {
        if (e.profile.name === data.name) {
            photosOfInker = a[i]
        }
    });
   
    const $gridContainer = document.querySelector('.modalGalery_galery__grid')
    $gridContainer.innerHTML=''
    photosOfInker.img.forEach(e => {
        const $gridContainerElement = document.createElement('div')
        $gridContainerElement.classList.add('modalGalery_galery_grid__element')
        $gridContainerElement.style.backgroundImage=`url('${e.url}')`
        $gridContainer.appendChild($gridContainerElement)
        $gridContainerElement.addEventListener('click',()=>{
            data = {
                url: e.url,
                name: data.name,
                tags: e.tags
            }
            $modalBtn.removeEventListener('click',modalBtn)
            $navMobileArrow.removeEventListener('click',navMobileArrow)
            printDataModalGalery(data)
        })
    });

}


