import { sendMail } from "../../api-mail/mail.js"
import { arrowBack } from "../arrowBack/arrowBack.js"
import { popUp } from "../helpers/popUp.js";
import { galery } from "../router/router.js"


export const printContactForm = (data)=>{
    console.log('contact from printed');
    const $contactFormBtn = document.querySelector('.contactForm_form__btn')
    const $navMobileArrowForm = document.querySelector('.header_nav-mobile_bar__arrowForm')
    const $navMobileArrow = document.querySelector('.header_nav-mobile_bar__arrow')
    const $contactForm = document.querySelector('.contactForm')
    const $contactFormInputData = document.querySelector('.contactForm_form__data')

    $contactFormInputData.value = JSON.stringify(data)
    
    
    $contactFormBtn.removeEventListener('click',send)
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

    window.scrollTo (0,0)
    document.getElementsByTagName('body')[0].style.overflow='hidden'


    $navMobileArrowForm.addEventListener('click', function arrow(){
        $contactForm.classList.add('hidden')
        $navMobileArrowForm.classList.add('hidden')
        $navMobileArrow.classList.remove('hidden')
        document.getElementsByTagName('body')[0].style.overflow='visible'
        $navMobileArrowForm.removeEventListener('click',arrow);
        $contactFormBtn.removeEventListener('click',send)
        console.log('removed?');
    })


}