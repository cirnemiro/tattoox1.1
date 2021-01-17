import { allInkers } from '../firebase.js'

 
export const filterImg = ()=>{
    let allImages = []
    allInkers.forEach(inker=>{
        inker.img.forEach(img=>{
            allImages.push({img,name:inker.profile.name})
            
        })
    })
    return {allImages,allInkers}
}
export const filterInkers = ()=>{
    let allInkers = []
    allInkers.forEach(inker=>{
        allInkers.push()
    })
}