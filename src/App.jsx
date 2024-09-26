import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer.jsx'
import Header from './Component/Header'
import Home from './Pages/Home.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import WatchHistory from './Pages/WatchHistory.jsx'



function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App