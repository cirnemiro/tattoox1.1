import { allImages } from '../firebase.js'

 
export const filterImg = ()=>{
    let images = []
    allImages.forEach(e=>{
        images.push(e)
    })
    return {allImages}
}
export const filterInkers = ()=>{
    let allInkers = []
    allInkers.forEach(inker=>{
        allInkers.push()
    })
}