import { modalGalery } from '../router/router.js'
import { filterImg } from '../filter/filter.js'
import { status } from '../state.js'
import { filterwatercolor , filterrealismo,filterpuntillismo ,filterneotradicional ,filterminimalista, filterilustrativo , filterjapanese , filtermicrorealismo , filterfineline , filterblackwork , filteroldschool , filtertradicional } from '../landingPage/landingPage.js'
import { galery } from '../router/router.js'

let scrolling =0 

export const printGaleryTags = ()=>{
   
    const $container = document.querySelector('.galery_header__tags')
    $container.innerHTML = ''
    let regex = `/^${status.param}/gi`

    status.tags.forEach(e => {
        
        let listener = `div.addEventListener('click',filter${e.data})`
        const div = document.createElement('div')
        
        if (e.data.match(eval(regex))) {
            
            div.innerHTML = `
                <div class="galery_header_tags__element selected">
                    <p class="galery_header_tags_element_title ">${e.name}</p>
                </div>
            `
            div.addEventListener('click', ()=>{
                status.param = '000000000000'
                document.querySelector('.galery_header_search_input__element').value = status.param
                galery()
                // window.scrollTo(0,0)
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
    if (arrayImagenes.length > 60 ) {
        counter=2
        console.log('array larger than 50');
        const length = arrayImagenes.length
        const partition = length/14
        
       
        let array1 = arrayImagenes.slice(0,partition)
        let array2 = arrayImagenes.slice(partition,partition*2)
        let array3 = arrayImagenes.slice(partition*2,partition*3)
        let array4 = arrayImagenes.slice(partition*3,length*4)
        let array5 = arrayImagenes.slice(partition*4,length*5)
        let array6 = arrayImagenes.slice(partition*5,length*6)
        let array7 = arrayImagenes.slice(partition*6,length*7)
        let array8 = arrayImagenes.slice(partition*7,length*8)
        let array9 = arrayImagenes.slice(partition*8,length*9)
        let array10 = arrayImagenes.slice(partition*9,length*10)
        let array11 = arrayImagenes.slice(partition*10,length*11)
        let array12 = arrayImagenes.slice(partition*11,length*12)
        let array13 = arrayImagenes.slice(partition*12,length*13)
        let array14 = arrayImagenes.slice(partition*14,length)

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
           
            scrolling = window.scrollY
            console.log(scrolling);
            
            const $body = document.getElementsByName('body')
            
            if (window.innerHeight + window.scrollY > galery.offsetHeight) {
                
                if (counter <= 14) {
                  
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
    
       
    }else{
        arrayImagenes.forEach( e=>{
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
    
    document.querySelector('.galery_header_search_input__svg').removeEventListener("click", inputFilter); 
    document.querySelector('.galery_header_search_input__svg').addEventListener('click',inputFilter)

    
}
export const modalGaleryData =(e)=>{

    let data = e.target.dataset
    let allInkers = filterImg().allInkers
    
        status.pagination.push(
            {
                action: 'galery',
                dat: status.param,
                scroll : scrolling
            }
        )
    
    // status.pagination.push(
    //     {
    //         action: 'galery',
    //         dat: status.param,
    //         scroll : scrolling
    //     }
    // )
    console.log(status.pagination);
    modalGalery(data,allInkers)
}
export function inputFilter(){
   
        
        printGalery(filterImg(document.querySelector('.galery_header_search_input__element').value))  
        status.param =  document.querySelector('.galery_header_search_input__element').value
        printGaleryTags()  
        console.log(document.querySelector('.galery_header_search_input__element').value); 
    
    
}
export function tagFilter(tag){
        galery()
        printGalery(filterImg(tag))  
        status.param =  '000000000000'
        printGaleryTags() 
        document.querySelector('.galery_header_search_input__element').value = tag 
        console.log('tag',tag);
}