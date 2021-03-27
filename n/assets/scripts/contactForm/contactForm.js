import { sendMail } from "../../api-mail/mail.js"
import { arrowBack } from "../arrowBack/arrowBack.js"
import { popUp } from "../helpers/popUp.js";
import { galery } from "../router/router.js"


export const printContactForm = (data)=>{
    const container = document.querySelector('.contactForm')
    container.innerHTML = ''
    window.scrollTo (0,0)
    document.getElementsByTagName('body')[0].style.overflow='hidden'
    const $contactForm = document.querySelector('.contactForm')
    const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')

    const template = `
        <h3 class="contactForm__title">Envíanos tus datos para reservar una sesión!</h3>
        <p class="contactForm__p">El tatuador contactará contigo en menos de 24 horas tras enviar tus datos</p>
        <form action="" method="POST">
            <input class="contactForm_form__input" required placeholder="Nombre" type="text" name="name" id="contactName">
            <input class="contactForm_form__input" required placeholder="Telefono" type="phone" name="phone" id="contactPhone">
            <input class="contactForm_form__input" required placeholder="Correo electrónico" type="email" name="_replyto" id="contactEmail">
            <input class="contactForm_form__btn"  value="ENVIAR DATOS">
            <input class="contactForm_form__data" placeholder="data" type="text" name="data">
        </form>   
    `

    container.innerHTML = template
    const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')

    $navMobileArrowForm.addEventListener('click', ()=>{
        $contactForm.classList.add('hidden')
        $navMobileArrowForm.classList.add('hidden')
        $navMobileArrow.classList.remove('hidden')
        document.getElementsByTagName('body')[0].style.overflow='visible'
        container.innerHTML = ''
    })

    const $contactFormBtn = document.querySelector('.contactForm_form__btn')
    $contactFormBtn.addEventListener('click',send)

    function send(){
        const $contactPhone =  document.querySelector('#contactPhone').value
        const $contactEmail = document.querySelector('#contactEmail').value
        const $contactName = document.querySelector('#contactName').value

        const reExpMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        const reExpName = /[A-Za-z0-9]{3,10}/
        const reExpPhone =/^6[0-9]{8}/

        if ($contactEmail.match(reExpMail) && $contactName.match(reExpName) && $contactPhone.match(reExpPhone)) {
            popUp('Tu formulario ha sido enviado')
    
            console.log($contactPhone,$contactEmail,$contactName);
            console.log('pressed send email');
            console.log(data);
            sendMail(data,$contactPhone,$contactEmail,$contactName)
            const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
            const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
            const $contactForm = document.querySelector('.contactForm')
            
            $contactForm.classList.add('hidden')
            $navMobileArrowForm.classList.add('hidden')
            $navMobileArrow.classList.remove('hidden')
            document.getElementsByTagName('body')[0].style.overflow='visible'
            
        }else if($contactPhone == '' || $contactEmail == '' || $contactName == ''){
            popUp('Rellena todos los campos')
        }else{
            popUp('Campos incorrectos')
        }

    }
   

    console.log(data);
    // const $contactFormBtn = document.querySelector('.contactForm_form__btn')
    // const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    // const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    // const $contactForm = document.querySelector('.contactForm')
    // const $contactFormInputData = document.querySelector('.contactForm_form__data')

    // $contactFormInputData.value = JSON.stringify(data)
    
    
    // $contactFormBtn.removeEventListener('click',send)
    // $contactFormBtn.addEventListener('click',send)

    // function send(){
    //     const $contactPhone =  document.querySelector('#contactPhone').value
    //     const $contactEmail = document.querySelector('#contactEmail').value
    //     const $contactName = document.querySelector('#contactName').value

    //     const reExpMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    //     const reExpName = /[A-Za-z0-9]{3,10}/
    //     const reExpPhone =/^6[0-9]{8}/

    //     if ($contactEmail.match(reExpMail) && $contactName.match(reExpName) && $contactPhone.match(reExpPhone)) {
    //         popUp('Tu formulario ha sido enviado')
    
    //         console.log($contactPhone,$contactEmail,$contactName);
    //         console.log('pressed send email');
    //         sendMail(data,$contactPhone,$contactEmail,$contactName)
    //         const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    //         const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    //         const $contactForm = document.querySelector('.contactForm')
            
    //         $contactForm.classList.add('hidden')
    //         $navMobileArrowForm.classList.add('hidden')
    //         $navMobileArrow.classList.remove('hidden')
    //         document.getElementsByTagName('body')[0].style.overflow='visible'
            
    //     }else if($contactPhone == '' || $contactEmail == '' || $contactName == ''){
    //         popUp('Rellena todos los campos')
    //     }else{
    //         popUp('Campos incorrectos')
    //     }

    // }



    // $navMobileArrowForm.addEventListener('click', function arrow(){
    //     $contactForm.classList.add('hidden')
    //     $navMobileArrowForm.classList.add('hidden')
    //     $navMobileArrow.classList.remove('hidden')
    //     document.getElementsByTagName('body')[0].style.overflow='visible'
    //     $navMobileArrowForm.removeEventListener('click',arrow);
    //     $contactFormBtn.removeEventListener('click',send)
    //     console.log('removed?');
    // })


}