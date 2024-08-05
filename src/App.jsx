import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Private from "./pages/Private"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebase"
import ProtectedRoute from "./component/ProtectedRoute"
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const [user, setUser] = useState(null)
  const{IsFetching, setIsFetching} = useState(true);

  useEffect(() => {
   const unsubscreabe = onAuthStateChanged(auth, (user) =>{
   setUser(user)
   setIsFetching(false)
    })
    return () => unsubscreabe();
  },{})
     if(IsFetching){
      return <Spinner animation="border" />;
     }
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="private" element={<ProtectedRoute user={user}><Private/></ProtectedRoute>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
