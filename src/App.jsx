import { Toaster } from "react-hot-toast"
import Experience from "./components/Experience"
import About from "./sections/About"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Clients />
    <Contact />
    <Footer />
    <Toaster />
    </main>
  )
}

export default App
