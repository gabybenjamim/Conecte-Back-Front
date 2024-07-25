import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './componets/pages/Home'
import Services from './componets/pages/Services'
import About from './componets/pages/About'
import Login from './componets/pages/Login'
import Criar from './componets/pages/Criar'
import Container from './componets/layout/container'
import Navbar from './componets/layout/Navbar'
import Footer from "./componets/layout/Footer"


function App() {

  return (
      <Router>
         <Navbar />   

<Container customClass="min-height">
<Routes>
  <Route path="/" exact element={ <Home />}  />
 
  <Route path="/services" exact element={ <Services /> } />
 
  <Route path="/about" exact element={  <About /> } />

  <Route path="/login" exact element={  <Login /> } />

  <Route path="/criar" exact element={  <Criar /> } />
</Routes>

</Container>
        <Footer />
      </Router>
    

  )
}

export default App
