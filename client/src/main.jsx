import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <AuthProvider>
//     <InstructorProvider>
//       <StudentProvider>
//         <App />
//       </StudentProvider>
//     </InstructorProvider>
//   </AuthProvider>
// </BrowserRouter>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
