import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/authContext.jsx'
import InstructorProvider from './context/instructorContext.jsx'

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
    <InstructorProvider>
      <App />
      </InstructorProvider>
    </AuthProvider>
  </BrowserRouter>,
)
