import { allImages } from '../firebase.js'

 
export const filterImg = (param)=>{
    let regexp = `/(${param})/gi`
    if (param == 'udnefined' || param == undefined) {
        let images = []
        allImages.forEach(e=>{
            images.push(e)
        })
        return allImages
    }else if(param){
        let allImagesFiltered = []
        console.log(param);
        allImages.forEach(e => {
            e.tags.forEach(element => {

                if (element.match(eval(regexp))) {
                    allImagesFiltered.push(e)
                }
            });
        });
        
        return allImagesFiltered
    }
    else{
        let images = []
        allImages.forEach(e=>{
            images.push(e)
        })
        return allImages
    }
}
export const filterInkers = ()=>{
    let allInkers = []
    allInkers.forEach(inker=>{
        allInkers.push()
    })
}