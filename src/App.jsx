import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import './Home.css'
import AboutMe from './AboutMe.jsx'
import Majors from './Majors.jsx'
import CS from './Majors/CS.jsx'
import Accounting from './Majors/Accounting.jsx'
import Bio from './Majors/Bio.jsx'

function App() {
  

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path = "/AboutMe" element = {<AboutMe/>}/>
      <Route path = "/Majors" element = {<Majors/>}/>
      <Route path = "/CS" element = {<CS/>} />
      <Route path = "/Accounting" element = {<Accounting/>} />
      <Route path = "/Bio" element = {<Bio/>} />
    </Routes>

    </BrowserRouter>
     
     
    </>
  )
}

export default App;

