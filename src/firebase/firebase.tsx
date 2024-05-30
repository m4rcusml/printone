// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, orderBy, limit, getDocs, addDoc, onSnapshot } from "firebase/firestore";
import router from "next/router";


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
export async function login( email, password){
    var value
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
        user = userCredential.user;
        value = true
    
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message)
        value = false
    })
        return value
}
export async function setUser(customData){
    const db = getFirestore();
    const docRef2 = doc(db, 'agrupamento', customData.agrupamento)
    var docGroup = {
        agrupamento: customData.agrupamento
    }
    await setDoc(docRef2, docGroup)
    const docRef = doc(db, 'users', customData.cpf);
    var docUser = {
        CPF: customData.cpf,
        nome: customData.nome,
        dataDeNascimento: customData.dataDeNascimento,
        sexo: customData.sexo,
        email: customData.email,
        telefone: customData.telefone,
        agrupamento: customData.agrupamento,
        registrador: user?.email ? user.email : 'Não acessível'
    }
    await setDoc(docRef, docUser).then(()=>{
        return true;
    }).catch((error) => {
        console.log(error.message);
    })
}

export async function getGrouping(){
    const db = getFirestore(app);

    var ref = collection(db, "agrupamento");
    var agrupamentoQuery = query(ref, orderBy("agrupamento"))

    const snapshot = await getDocs(agrupamentoQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
    
}
export async function getMembersOfAGrouping(group){
    const db = getFirestore(app);

    var ref = collection(db, "users");
    var membersQuery = query(ref, where("agrupamento", "==", group))
    const snapshot = await getDocs(membersQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data
}
export async function getAllUsers(){
    const db = getFirestore(app);

    var ref = collection(db, "users");
    var usersQuery = query(ref, orderBy("nome"))
    const snapshot = await getDocs(usersQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data

}
