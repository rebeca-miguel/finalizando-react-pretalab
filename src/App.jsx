import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Coments from './Pages/Coments/Coments';
import Contacts from './Pages/Contacts/Contacts';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/comentarios" element={<Coments />} />
          <Route path="/contato" element={<Contacts />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}
export default App
