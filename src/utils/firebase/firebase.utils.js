import { initializeApp } from "firebase/app";
import { getFirestore,doc, setDoc, getDoc, collection, collectionKey, writeBatch, query,getDocs } from "firebase/firestore";

import {getAuth,
     signInWithPopup,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
    } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCDAxXBEXeDNKKqlpIC8AR5683NgAfe4F0",

  authDomain: "crown-store-d1cbe.firebaseapp.com",

  projectId: "crown-store-d1cbe",

  storageBucket: "crown-store-d1cbe.appspot.com",

  messagingSenderId: "461949195482",

  appId: "1:461949195482:web:0ef017199e0a3c27e981e3"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

const auth = getAuth();
// add to db
export const addCollection = async (collectionKey, objs) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)
    objs.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })
    await batch.commit()
    console.log('done')
}
// get data
export const getCats = async () => {
    const collectionRef = collection(db, 'cats')
    const q = query(collectionRef)
    const querySnapShot = await getDocs(q)
    const catMap = querySnapShot.docs.reduce(( acc, docSapshot) => {
    const {title, items } = docSapshot.data()
    acc[title.toLowerCase()] = items
    return acc
    }, {})
    return catMap
}
//sign in pop up
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// assign to db
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)
    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }  catch (error){
            console.log(error)
        }
    }
    return userDocRef
}
// sign up
export const signUp = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth,email,password)
}
// sign in
export const signIn = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth,email,password)
}
// sign out
export const signOutMethod = async () => await signOut(auth)
// listen to auth changed
export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}