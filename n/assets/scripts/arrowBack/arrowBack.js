import { galery,modalGalery,contactForm,inkers,inkersProfile } from '../router/router.js'
import { status } from '../state.js'

export const arrowBack = ()=>{
    // document.getElementsByTagName('body')[0].style.overflow='default'
    const $arrow = document.querySelector('.header_nav-mobile_bar__arrow')
    const $formBtn = document.querySelector('.contactForm_form__btn')
    $arrow.addEventListener('click', ()=>{
        
        let length = status.pagination.length
        let route = status.pagination[length-1].action+=`('${status.pagination[length-1].dat}')`
        status.pagination.pop()
        console.log(route);
        eval(route)
        
        
        
    })
    // $formBtn.removeEventListener('click', formbutton)
    // function formbutton(){
    //     const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    //     const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    //     const $contactForm = document.querySelector('.contactForm')
        
    //     $contactForm.classList.add('hidden')
    //     $navMobileArrowForm.classList.add('hidden')
    //     $navMobileArrow.classList.remove('hidden')
    //     document.getElementsByTagName('body')[0].style.overflow='visible'
    // }
    // $formBtn.addEventListener('click', formbutton)

}