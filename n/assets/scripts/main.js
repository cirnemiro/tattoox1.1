
import { arrowBack } from './arrowBack/arrowBack.js'
import { allImages, allInkers } from './firebase.js'
import { header } from './header/header.js'
import { initial,galery, scroollCounter } from './router/router.js'
import { status } from './state.js'

export const initialize = ()=>{
        function unorderImages(){
                for (let i = 0; i < allImages.length; i++) {
                        let randomNum =Math.floor(Math.random() * allImages.length)
                        let var1 = allImages[i]
                        let var2 = allImages[randomNum]

                        allImages[i] = var2
                        allImages[randomNum] = var1
                        
                }
        }
        unorderImages()
        function unorderInkers(){
                for (let i = 0; i < allInkers.length; i++) {
                        let randomNum =Math.floor(Math.random() * allInkers.length)
                        let var1 = allInkers[i]
                        let var2 = allInkers[ randomNum]

                        allInkers[i] = var2
                        allInkers[randomNum] = var1
                        
                }
        }
        document.querySelector('.galery_header_search_input__element').value = status.param
        unorderInkers()
        header()
        initial() 
        arrowBack()   
        scroollCounter()

         
}

    




