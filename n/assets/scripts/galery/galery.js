import { modalGalery } from '../router/router.js'
import { filterImg } from '../filter/filter.js'
import { status } from '../state.js'
import { filterwatercolor , filterrealismo ,filterneotraditional ,filterminimalista, filterilustrativo , filterjapanese , filtermicrorealismo , filterfineline , filtercolor , filterblackwork , filteroldschool , filtertraditional } from '../landingPage/landingPage.js'
import { galery } from '../router/router.js'


export const printGaleryTags = ()=>{
    const $container = document.querySelector('.galery_header__tags')
    $container.innerHTML = ''
    let regex = `/${status.param}/gi`

    status.tags.forEach(e => {
        
        let listener = `div.addEventListener('click',filter${e.data})`
        const div = document.createElement('div')
        
        if (e.data.match(eval(regex))) {
            console.log('match!!');
            div.innerHTML = `
                <div class="galery_header_tags__element selected">
                    <p class="galery_header_tags_element_title ">${e.name}</p>
                </div>
            `
            div.addEventListener('click', ()=>{
                status.param = '000000000000'
                galery()
            })
            $container.appendChild(div)
        }else{
            div.innerHTML = `
                <div class="galery_header_tags__element">
                    <p class="galery_header_tags_element_title">${e.name}</p>
                </div>
            `
            eval(listener)
            $container.appendChild(div)
        }
    });
}

export const printGalery = (arrayImagenes)=>{
    printGaleryTags()
    let counter = 0
    const galery = document.querySelector('.galery')
    const $gridContainer = document.querySelector('.galery__grid')
    $gridContainer.innerHTML=''
    if (arrayImagenes.length > 50 ) {
        counter=2
        console.log('array larger than 50');
        const length = arrayImagenes.length
        const partition = length/4
       
        let array1 = arrayImagenes.slice(0,partition)
        let array2 = arrayImagenes.slice(partition,partition*2)
        let array3 = arrayImagenes.slice(partition*2,partition*3)
        let array4 = arrayImagenes.slice(partition*3,length)

        array1.forEach( e=>{
            // print each image
            const gridElement = document.createElement('div')
            gridElement.style.backgroundImage= `url(${e.url})`
            gridElement.classList.add('galery_grid__element')
            gridElement.dataset.url = e.url
            gridElement.dataset.tags = e.tags
            gridElement.dataset.name = e.tatuador
            gridElement.addEventListener('click',modalGaleryData)
            $gridContainer.appendChild(gridElement)
        })
    
    window.onscroll = function () {
        
        const $body = document.getElementsByName('body')
        // /console.log(window.innerHeight + window.scrollY,'=',galery.offsetHeight);
        if (window.innerHeight + window.scrollY > galery.offsetHeight) {
        
            if (counter < 5) {
                console.log(`print ${counter}`);
            eval(`array${counter}`).forEach( e=>{
                // print each image
                const gridElement = document.createElement('div')
                gridElement.style.backgroundImage= `url(${e.url})`
                gridElement.classList.add('galery_grid__element')
                gridElement.dataset.url = e.url
                gridElement.dataset.tags = e.tags
                gridElement.dataset.name = e.tatuador
                gridElement.addEventListener('click',modalGaleryData)
                $gridContainer.appendChild(gridElement)
            })
            }
            counter++
        }
        
    }
        
        
        // window.onscroll= function(){
        //     if (window.scrollY < 100) {
        //         console.log('first arary');
        //         array1.forEach( e=>{
        //             // print each image
        //             const gridElement = document.createElement('div')
        //             gridElement.style.backgroundImage= `url(${e.url})`
        //             gridElement.classList.add('galery_grid__element')
        //             gridElement.dataset.url = e.url
        //             gridElement.dataset.tags = e.tags
        //             gridElement.dataset.name = e.tatuador
        //             gridElement.addEventListener('click',modalGaleryData)
        //             $gridContainer.appendChild(gridElement)
        //         })
        //     }else if(window.scrollY < 200){
        //         console.log('second arary');
        //         array2.forEach( e=>{
        //             // print each image
        //             const gridElement = document.createElement('div')
        //             gridElement.style.backgroundImage= `url(${e.url})`
        //             gridElement.classList.add('galery_grid__element')
        //             gridElement.dataset.url = e.url
        //             gridElement.dataset.tags = e.tags
        //             gridElement.dataset.name = e.tatuador
        //             gridElement.addEventListener('click',modalGaleryData)
        //             $gridContainer.appendChild(gridElement)
        //         })
        //     }
        // }
       
    }
    // slice the array to prevent collapse
    //arrayImagenes.slice(0,100)
    

    // arrayImagenes.forEach( e=>{
    //     // print each image
    //     const gridElement = document.createElement('div')
    //     gridElement.style.backgroundImage= `url(${e.url})`
    //     gridElement.classList.add('galery_grid__element')
    //     gridElement.dataset.url = e.url
    //     gridElement.dataset.tags = e.tags
    //     gridElement.dataset.name = e.tatuador
    //     gridElement.addEventListener('click',modalGaleryData)
    //     $gridContainer.appendChild(gridElement)
    // })
}
export const modalGaleryData =(e)=>{
    let data = e.target.dataset
    let allInkers = filterImg().allInkers
    modalGalery(data,allInkers)
}
