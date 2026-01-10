import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";
import {ScrollTrigger} from "gsap/all";
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)
const App=()=>{
  return(
    <main>
      <NavBar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
    </main>
  )
}
export default App
