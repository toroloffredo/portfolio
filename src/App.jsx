import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import TypographyPage from './pages/TypographyPage'
import MagazinePage from './pages/MagazinePage'
import AccesibilityPage from './pages/AccesibilityPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage  />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/projects/form" element={<FormPage />}/>
        <Route path="/projects/typography" element={<TypographyPage />}/>
        <Route path="/projects/magazine" element={<MagazinePage />}/>
        <Route path="/projects/accesibility" element={<AccesibilityPage />}/>
        <Route path="*" element={<h1>404 Page</h1>}/>
      </Routes>
    </>
  )
}

export default App
