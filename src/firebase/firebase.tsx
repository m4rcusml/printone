// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCmbeYUMgkPRegpqdquZBWThZI-1hBul90",
  authDomain: "printone-14ba4.firebaseapp.com",
  projectId: "printone-14ba4",
  storageBucket: "printone-14ba4.appspot.com",
  messagingSenderId: "79021256895",
  appId: "1:79021256895:web:cb17f53036cff8867e960a",
  measurementId: "G-JBG1WN8N92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
var user;


export function createAccount( email, password, customData){  
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{
        const user = userCredential.user;
        
        updateProfile(user, customData).then(() => {

        }).catch((error) =>{
            console.log(error.message);
        })
        
    }).catch((error) => {
        console.log(error.message);
    })
}
export function login( email, password){
    
    signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
        user = userCredential.user;
        
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message)
    })
    return true
}
export async function setUser(customData){
    const db = getFirestore();
    const docRef = doc(db, 'users', customData.cpf);
    var docUser = {
        CPF: customData.cpf,
        nome: customData.nome,
        dataDeNasciment: customData.dataDeNascimento,
        sexo: customData.sexo,
        email: customData.email,
        telefone: customData.telefone,
        agrupamento: customData.agrupamento,
        registrador: user.email ? user.email : 'Não acessível'
    }
    await setDoc(docRef, docUser).then(()=>{
        return true;
    }).catch((error) => {
        console.log(error.message);
    })
}


