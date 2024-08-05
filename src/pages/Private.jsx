import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import "./Private.css";

 function Private() {

  function handleSignOut(){
   signOut (auth)
   .then(() =>{
    alert("Sign out successfully!")
   })
   .catch(error => alert(error.message))
  }
  return ( 
    <div className='private-container'>
      <header className='private-header'>
        <h1>Welcome to the Dashboard</h1>
      </header>
      <main className='private-contant'>
        <h1>Your Profile</h1>
        <p>Welcome to the private Dashboard. Here you can mange your setting and preferences.</p>
      </main>
      <footer className='private-footer'><button onClick={handleSignOut}>signout</button></footer>
    </div>
  )
} 
export default Private
