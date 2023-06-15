import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithGoogleRedirect
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt
            });
        }
        catch (error)
        {
            console.log('Error creating message')
        }
    }
}
