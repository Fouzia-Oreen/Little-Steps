import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'

function App() {
  return (
    <>
    <Header />
    <Routes >
      <Route path="/" element={<HomePage />}/>
      <Route path="/auth" element={<AuthPage />}/>
    </Routes>
    <Footer />
   </>
  )
}

export default App
//