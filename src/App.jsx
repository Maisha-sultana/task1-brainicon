import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
   
      <Hero></Hero>
       <div className="fixed bottom-8 right-8 flex gap-3 z-50"> 
        <a href="/demos" className="bg-[#f3c837] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-[#ff6931] transition-all duration-300 transform hover:scale-105">
          DEMOS
        </a>
        <a href="/purchase" className="bg-[#ec7e74] text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-[#ff6931] transition-all duration-300 transform hover:scale-105">
          PURCHASE
        </a>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
