import { printGalery } from './galery/galery.js'

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

export const getAllInkers = async() =>{
    const querySnapshot = await getTatuadores()
    let inkers = []
    querySnapshot.forEach(e=>{
        inkers.push(e.data())
    })
    return inkers
}

