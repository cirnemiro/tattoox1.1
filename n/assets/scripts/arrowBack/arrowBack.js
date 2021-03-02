import { galery,modalGalery,contactForm,inkers,inkersProfile } from '../router/router.js'
import { status } from '../state.js'

export const arrowBack = ()=>{
    // document.getElementsByTagName('body')[0].style.overflow='default'
    const $arrow = document.querySelector('.header_nav-mobile_bar__arrow')
    $arrow.addEventListener('click', ()=>{
        
        let length = status.pagination.length
        console.log(status.pagination);
        console.log(status.pagination[length-1]);
        let route = status.pagination[length-1].action+=`('${status.pagination[length-1].dat}')`
        status.pagination.pop()
        console.log(route);
        eval(route)
        
        
        
    })

}