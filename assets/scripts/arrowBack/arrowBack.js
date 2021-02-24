import { galery,modalGalery,contactForm,inkers,inkersProfile } from '../router/router.js'
import { status } from '../state.js'

export const arrowBack = ()=>{
    const $arrow = document.querySelector('.header_nav-mobile_bar__arrow')
    $arrow.addEventListener('click', ()=>{
        
        let length = status.pagination.length
        console.log(status.pagination);
        console.log(status.pagination[length-status.pagCounter]);
        let route = status.pagination[length-status.pagCounter].action+=`('${status.pagination[length-status.pagCounter].dat}')`
        console.log(route);
        eval(route)
        status.pagCounter ++
        console.log(pag);
        
    })

}