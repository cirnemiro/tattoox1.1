import { allImages } from '../firebase.js'

 
export const filterImg = (param,paramInput)=>{
    let abc = true
    let regexp = `/(${param})/gi`
    if (param == 'undefined' || param == undefined) {
        console.log('es undefined',param);
        let images = []
        allImages.forEach(e=>{
            images.push(e)
        })
        return images
    }else if(param){
        let allImagesFiltered = []
        console.log('pk conyoo',param);
        allImages.forEach(e => {
            abc = true
            e.tags.forEach(element => {

                if (element.match(eval(regexp))) {
                    if (abc) {
                        allImagesFiltered.push(e)
                        abc =false
                    }
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