import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Home from './Components/Lecturer'
import Admin from './Components/Admin'
import Lecturer from './Components/Lecturer'
import Student from './Components/Student'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'

function App() {
  

  return (
  
    
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home />}></Route>
          <Route path = "/admin" element={<Admin />}></Route>
          <Route path = "/lecturer" element={<Lecturer />}></Route>
          <Route path = "/student" element={<Student />}></Route>
          <Route path = "/signup" element={<Signup />}></Route>
          <Route path = "/login" element={<Login />}></Route>
          <Route path = "/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path = "/resetPassword" element={<ResetPassword />}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
