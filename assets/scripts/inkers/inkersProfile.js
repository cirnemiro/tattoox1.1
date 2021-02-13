import { allImages, allInkers } from "../firebase.js";
import { printDataModalGalery } from "../galery/modalGalery.js";
import { modalGalery } from "../router/router.js";

export const printInkerProfile = (name)=>{
    
    console.log(name);
    const $container = document.querySelector('.inkersProfile')
    
    $container.innerHTML = `
        <article class="inkersProfile__header">
            <h3 class="inkersProfile_header__title">
                ${name}
            </h3>
            <div class="inkersProfile_header__photo">

            </div>
        </article>
        <article class="inkersProfile__content">
            <div class="inkersProfile_content__info">
                <p class="inkersProfile_content_info__local">Tatua en: The Black Ink Tattoo</p>
                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.48786 3.08984C5.81579 3.08984 5.15882 3.27399 4.60002 3.61901C4.04122 3.96402 3.60569 4.45441 3.3485 5.02814C3.09132 5.60188 3.02402 6.23321 3.15514 6.84228C3.28625 7.45136 3.60988 8.01083 4.0851 8.44995C4.56032 8.88907 5.16579 9.18812 5.82494 9.30927C6.48409 9.43042 7.16732 9.36824 7.78822 9.13059C8.40913 8.89294 8.93982 8.4905 9.3132 7.97415C9.68658 7.4578 9.88587 6.85073 9.88587 6.22972C9.88587 5.39698 9.52787 4.59834 8.89062 4.00949C8.25336 3.42065 7.38907 3.08984 6.48786 3.08984ZM6.48786 7.94239C6.12128 7.94239 5.76293 7.84194 5.45813 7.65375C5.15333 7.46556 4.91577 7.19808 4.77548 6.88513C4.6352 6.57218 4.59849 6.22782 4.67001 5.8956C4.74153 5.56338 4.91805 5.25821 5.17726 5.01869C5.43647 4.77917 5.76673 4.61605 6.12627 4.54997C6.4858 4.48389 6.85847 4.5178 7.19715 4.64743C7.53582 4.77706 7.82529 4.99657 8.02895 5.27822C8.23262 5.55987 8.34132 5.89099 8.34132 6.22972C8.33929 6.68337 8.14336 7.1179 7.79621 7.43868C7.44905 7.75946 6.9788 7.94051 6.48786 7.94239Z" fill="#464646"/>
                    <path d="M13.3449 5.81793C13.2453 4.27492 12.5243 2.82226 11.3237 1.74588C10.1231 0.669504 8.52991 0.0473896 6.85781 0.00199492C5.96665 -0.018933 5.07995 0.124978 4.24984 0.425267C3.41974 0.725556 2.66298 1.17616 2.02405 1.7506C1.38512 2.32503 0.876927 3.0117 0.529335 3.77024C0.181743 4.52877 0.0017712 5.34386 1.6818e-07 6.1676C-0.000259674 7.23156 0.300582 8.27709 0.872672 9.20044L5.29781 17.3499C5.42591 17.5874 5.62313 17.7872 5.86733 17.9268C6.11152 18.0665 6.39301 18.1405 6.68019 18.1405C6.96737 18.1405 7.24886 18.0665 7.49305 17.9268C7.73724 17.7872 7.93446 17.5874 8.06256 17.3499L12.4723 9.22185C12.6053 9.02466 12.719 8.81689 12.8121 8.60101C12.8121 8.60101 12.8121 8.60101 12.8121 8.55819C13.2161 7.695 13.3985 6.75711 13.3449 5.81793ZM11.4142 8.00871C11.3293 8.17998 11.2366 8.35125 11.1131 8.55106L6.68019 16.7076L2.23188 8.52251C1.78342 7.80187 1.54802 6.98489 1.54932 6.1536C1.55063 5.32231 1.78858 4.50596 2.2393 3.78652C2.69002 3.06708 3.33763 2.46987 4.11713 2.05485C4.89662 1.63983 5.78056 1.4216 6.68019 1.42208H6.8192C8.0996 1.4699 9.31608 1.95184 10.2363 2.77586C11.1566 3.59988 11.7161 4.70824 11.8081 5.88929C11.8541 6.62126 11.7194 7.3533 11.4142 8.03012L12.1247 8.30129L11.4142 8.00871Z" fill="#464646"/>
                    </svg>
                <p class="inkersProfile_content_info__ubi">Barcelona</p>
            </div>
            <hr>
            <button class="inkersProfile_content__btn">
                Pedir Cita
            </button>
        </article>
        <article class="inkersProfile__grid">
        </article>
        
        `
        const $grid = document.querySelector('.inkersProfile__grid')
        allImages.forEach(e=>{
            
            if (e.tatuador == name) {   
               const element = document.createElement('div') 
               element.classList.add('inkersProfile_grid__element')
               element.style.backgroundImage = `url(${e.url})`
               $grid.appendChild(element) 
               element.addEventListener('click',()=>{
                   let data = {
                       url: e.url,
                       tags: e.tags,
                       name: name
                   }
                    modalGalery(data)
               }) 
           }
       })
}
        