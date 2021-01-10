
export const printContactForm = ()=>{
    const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    const $contactForm = document.querySelector('.contactForm')

    $navMobileArrowForm.addEventListener('click', ()=>{
        $contactForm.classList.add('hidden')
        $navMobileArrowForm.classList.add('hidden')
        $navMobileArrow.classList.remove('hidden')
       
    })
}