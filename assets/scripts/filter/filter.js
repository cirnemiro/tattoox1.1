import { allInkers } from '../firebase.js'

 
export const filterImg = ()=>{
    let allImages = []
    console.log(allInkers);
    allInkers.forEach(inker=>{
        inker.img.forEach(img=>{
            allImages.push({img,name:inker.profile.name})
            
        })
    })
    return {allImages,allInkers}
}
