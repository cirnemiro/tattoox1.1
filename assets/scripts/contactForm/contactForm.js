import { galery } from "../router/router.js"


export const printContactForm = (data)=>{
    const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    const $contactForm = document.querySelector('.contactForm')
    const $contactFormInputData = document.querySelector('.contactForm_form__data')

    $contactFormInputData.value = JSON.stringify(data)



    window.scrollTo (0,0)
    document.getElementsByTagName('body')[0].style.overflow='hidden'


    $navMobileArrowForm.addEventListener('click', ()=>{
        $contactForm.classList.add('hidden')
        $navMobileArrowForm.classList.add('hidden')
        $navMobileArrow.classList.remove('hidden')
        document.getElementsByTagName('body')[0].style.overflow='visible'
       
    })


    const $contactFormBtn = document.querySelector('.contactForm_form__btn')

    $contactFormBtn.addEventListener('click', function(evt){
        //evt.preventDefault();
    })
}