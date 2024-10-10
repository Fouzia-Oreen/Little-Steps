import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import AuthPage from './pages/auth'

function App() {
  return (
    <>
    <Routes >
      {/* <Route path="/" element={<HomePage />}/> */}
      <Route path="/" element={<AuthPage />}/>

    </Routes>
   <Footer />
   
   </>
  )
}

export default App
//