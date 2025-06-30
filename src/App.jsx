import About from './components/About'
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Petlistings from './components/Petlistings'
function App() {
  return (
    <div>
        <Routes>
          <Route path='' element={<Content/>}/>
        <Route path="/about" element={<About />} />
    <Route path="/list" element={<Petlistings />} />
    </Routes>
    <Navbar />
    <Footer />
    </div>
  )
}

export default App
