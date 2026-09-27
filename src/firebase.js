import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCqCK7DpyIves6IPyfWgVIKKc46kiuq2hw",
  authDomain: "base-ead.firebaseapp.com",
  projectId: "base-ead",
  storageBucket: "base-ead.firebasestorage.app",
  messagingSenderId: "223794134950",
  appId: "1:223794134950:web:2172ffd0ea631734271967"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export async function firebaseRegister({email, password, name, lastName, birth}){
  try {
    
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", res.user.uid), {
      email,
      password,
      name,
      lastName,
      birth
    });

    localStorage.setItem("uid", res.user.uid);

  } catch (error) {
    throw error;
  }
}

export async function firebaseSignIn(email, password){
  try {

    const res = await signInWithEmailAndPassword(auth, email, password);
    
    localStorage.setItem("uid", res.user.uid);

  } catch (error) {
    throw error;
  }
}

export async function firebaseGetUser(uid){
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}