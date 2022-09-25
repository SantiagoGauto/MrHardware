// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, where } from "firebase/firestore";
//--
import { collection, getDocs, query } from "firebase/firestore";
//detalles
import { doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-kGaAev7m4qJymZ_qmhfaR0M5NhTtWpw",
    authDomain: "mrhardware-75f66.firebaseapp.com",
    projectId: "mrhardware-75f66",
    storageBucket: "mrhardware-75f66.appspot.com",
    messagingSenderId: "770732248624",
    appId: "1:770732248624:web:c82c879834d33fda6267f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (category) => {
    let q;
    if (category) { //solo un documento.
        q = query(collection(db, "products"), where('categoryId', '==', category));
    } else { //todos los documentos.
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFromFirestore
}

// Detalles
export const firestoreOneFetch = async (item) => {
    const docRef = doc(db, "products", item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()};
    } else {
        console.log("No such document!");
    }
}