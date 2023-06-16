import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import FaqPage from './pages/FaqPage'
import Artikel from './pages/ArtikelPage'
import AppBarComponent from './components/AppBarComponent'
import FooterComponent from './components/FooterComponent'
import TeaamPage from './pages/TeamPage'
import AboutPage from './pages/AboutPage'



function App() {
 return (
  <div>
    <AppBarComponent/>
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/artikel' Component={Artikel}/>
      <Route path='/team' Component={TeaamPage}/>
      <Route path='/about' Component={AboutPage}/>
      <Route path='/faq' Component={FaqPage}/>
    </Routes>
    <FooterComponent/>
  </div>
 )
}

export default App
