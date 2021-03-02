import { status } from './state.js'
import { initialize } from './main.js'


var firebaseConfig = {
    apiKey: "AIzaSyDp-Y6PRIaTRkc3pX2W_pJB4zw6U2JlEVs",
    authDomain: "tattoox-ca7a4.firebaseapp.com",
    databaseURL: "https://tattoox-default-rtdb.firebaseio.com",
    projectId: "tattoox",
    storageBucket: "tattoox.appspot.com",
    messagingSenderId: "569087628517",
    appId: "1:569087628517:web:b07ecfa0e7de2307bef00c",
    measurementId: "G-5CC7N23ZW5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()
const getImages = ()=> db.collection('fotosProd').get()
const getInkers = ()=> db.collection('tatuadoresProd').get()


export let allInkers = []
export let allImages = []


const getAllImages = async() =>{
    const querySnapshot = await getImages()

    querySnapshot.forEach(e=>{
        allImages.push(e.data())
        status.stateImg = true
    })
    
}

const getAllInkers = async()=>{
    const querySnapshot = await getInkers()

    querySnapshot.forEach(e=>{
        allInkers.push(e.data())
        status.stateInk = true
    })
}

getAllImages()
getAllInkers()

const initCounter = ()=>{
    console.log(status);
    if (status.stateImg && status.stateInk) {
        clearInterval(interval)
        console.log(allImages);
        console.log(allInkers);
        initialize()
    }
}
let interval = setInterval(initCounter,1000)





