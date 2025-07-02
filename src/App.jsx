import About from './components/About'
import Content from './components/Content'
import {Routes,Route} from 'react-router-dom'
import Petlistings from './components/Petlistings'
import PawsitiveMatch from './components/Pawsitivematch'
import Petprofile from './components/Petprofile'
import Adopting from './components/Adopting'
import Signin from './components/Signin'
import Login from './components/login'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Content/>}/>
        <Route path="/about" element={<About />} />
    <Route path="/list" element={<Petlistings />} />
    <Route path='/petmatch' element={<PawsitiveMatch/>}/>
 <Route path='/profile' element={<Petprofile/>}/>
  <Route path='/adopt' element={<Adopting />}/>
  <Route path='/signin' element={<Signin />}/>
  <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App