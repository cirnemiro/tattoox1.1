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
const getTatuadores = ()=> db.collection('Tatuadores').get()

export let allInkers = []

export const getAllInkers = async() =>{
    const querySnapshot = await getTatuadores()
    querySnapshot.forEach(e=>{
        allInkers.push(e.data())
        
        status.state = true
    })
    
}
getAllInkers()

const initCounter = ()=>{
    console.log(status);
    if (status.state) {
        clearInterval(interval)
        initialize()
    }
}
let interval = setInterval(initCounter,1000)



