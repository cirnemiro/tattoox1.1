import { getAllInkers } from '../firebase.js'

export const filter = async()=>{
    console.log(await getAllInkers());
}