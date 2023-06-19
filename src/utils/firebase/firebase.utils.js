

import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithRedirect, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDnvnA0RN0pd0KBqje17lHh0cOC0pRWoTo",
    authDomain: "react-ecommerce-68025.firebaseapp.com",
    projectId: "react-ecommerce-68025",
    storageBucket: "react-ecommerce-68025.appspot.com",
    messagingSenderId: "452486778463",
    appId: "1:452486778463:web:20975816cd8b112c5f95ea"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();


googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = { displayName: '' }) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists())
    {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try
        {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch (error)
        {
            console.log('Error creating message')
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

//observerlistener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)