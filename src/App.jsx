import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Track from './components/Track'
import Diet from './components/Diet'
import { UserContext } from './components/contexts/UserContexts'
import { useState } from 'react'
import Private from './components/Private'

function App() {
 
  const [loggedUser,setLoggedUser] 
  = useState(JSON.parse(localStorage.getItem("nutriapp-user")));

  return (
    <>

    <UserContext.Provider value={{loggedUser, setLoggedUser}}>

    <BrowserRouter>
          
          <Routes>

            <Route path='/' element = {<Login/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/register' element = {<Register/>}/>
            <Route path='track' element={<Private Component={Track}/>}/>
            <Route path='/diet' element={<Private Component={Diet}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>

          </BrowserRouter>

        </UserContext.Provider>

    </>
  )
}

export default App
