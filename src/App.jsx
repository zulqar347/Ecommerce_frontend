import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contaxt"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer"
import CartPage from "./pages/CartPage"
import { CartProvider } from "./CartProviderState"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <Router> 
      <Routes>
        <Route path="/" element={<div><Navbar/><br/><Home/><br/><Footer/></div>} />
        <Route path="/products" element={<div><Navbar/><br/><Products/><br/><Footer/></div>} />
        <Route path="/about" element={<div><Navbar/><br/><About/><br/><Footer/></div>} />
        <Route path="/contact" element={<div><Navbar/><br/><Contact/><br/><Footer/></div>} />
        <Route path="/cartpage" element={<div><Navbar/><br/><CartPage/></div>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
