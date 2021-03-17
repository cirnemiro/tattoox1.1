import { galery,modalGalery,contactForm,inkers,inkersProfile } from '../router/router.js'
import { status } from '../state.js'

export const arrowBack = ()=>{
    // document.getElementsByTagName('body')[0].style.overflow='default'
    const $arrow = document.querySelector('.header_nav-mobile_bar__arrow')
    const $formBtn = document.querySelector('.contactForm_form__btn')
    $arrow.addEventListener('click', ()=>{
        document.querySelector('.galery_header_search_input__element').value = 'hola'
        
        let length = status.pagination.length
        let route = status.pagination[length-1].action+=`('${status.pagination[length-1].dat}')`
        console.log(status.pagination[length-1].dat);
        if (status.pagination[length-1].dat == '000000000000') {
            let scrollto = status.pagination[length-1].scroll
            status.pagination.pop()
            console.log(scrollto);
            console.log(status.pagination);
           
            status.scrollPatch = scrollto
            galery('')
        }else{
            let scrollto = status.pagination[length-1].scroll
            status.pagination.pop()
           
            status.scrollPatch = scrollto
            eval(route)
            console.log(scrollto);
            console.log(status.pagination);

        }

    })
}