import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import BuySell from "./components/BuySell";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";


function App() {
 

  return (
   <div>
    <Navbar/>
    <Home/>
    <BuySell/>
    <Blogs/>
    <Footer/> 
   </div>
  )
}

export default App
