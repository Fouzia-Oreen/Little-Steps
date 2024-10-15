import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import RouteGaurd from './components/route-gaurd'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import InstructorDashboard from './pages/instructor/Dashboard'
import StudentViewCommonLayout from './components/student-view/StudentViewCommonLayout'
import StudentHomePage from './pages/student/StudentHomePage'

function App() {
  const {auth} = useContext(AuthContext)
  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={<HomePage />}/>
      <Route path="/auth" 
        element={<RouteGaurd 
        element={<AuthPage />} 
        authenticated={auth.authenticated} 
        user={auth?.user} />}
      />
      <Route path="/instructor" 
        element={<RouteGaurd 
        element={<InstructorDashboard />} 
        authenticated={auth.authenticated} 
        user={auth?.user} />}
      />
      <Route path="/" 
        element={<RouteGaurd 
        element={<StudentViewCommonLayout />} 
        authenticated={auth.authenticated} 
        user={auth?.user} />}
      >
        <Route path="home" element={<StudentHomePage />}/>
        <Route path="" element={<StudentHomePage />}/>
      </Route>
    </Routes>
    <Footer />
   </>
  )
}

export default App
//