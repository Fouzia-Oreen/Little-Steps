import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import { Button } from './components/ui/button'
import AuthPage from './pages/auth'

function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<AuthPage />}/>
    </Routes>
   <h1>Hello Little steps</h1>
   <Button className="bg-red-400">Check</Button>
   <Footer />
   
   </>
  )
}

export default App
//