import React from 'react'
import fierbase from'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
fierbase.initializeApp({
    apiKey: "AIzaSyBBcupzUNpQq_4mvPjD-iuLaRyaPA8gj-k",
    authDomain: "art-gallery-9ec1d.firebaseapp.com",
    projectId: "art-gallery-9ec1d",
    storageBucket: "art-gallery-9ec1d.appspot.com",
    messagingSenderId: "655911676740",
    appId: "1:655911676740:web:ee9d9d6388436b4ce08511",
    measurementId: "G-F3T69C2SRN"
})
const Interract = () => {
    const[user]=useAuthState(auth);
  return (
    <div>
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
        </div>
        <section>
            {user? <ChatRoom />:<SignIn />}
            </section>

    </div>
  ) 
}
function ChatMessage(props){
const{text,uid}=props.message;
return <p>{text}</p>
}
function SignIn(){
    const signInWithGoogle=()=>{
        const provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }
    return(
        <button onClick={signInWithGoogle}>Sign In with Google</button>
    )
}
function SignOut(){
    return auth.currentUser&&(
            <button onClick={()=>auth.signOut()} >Sign Out</button>
        )
}
function ChatRoom(){
    const messagesRef=firestore.collection('messages');
    const query=messagesRef.orderBy("createdAt").limit(25);
    const [messages] = useCollectionData(query, { idField: 'id'});

}
export default Interract