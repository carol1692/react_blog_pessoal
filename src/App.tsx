import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import NavBar from "./components/navbar/NavBar"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import Footer from "./components/footer/Footer"

function App() {
  
  return (
    <>
     <BrowserRouter>
        <NavBar />
		<div className="min-h-[80vh]">
			<Routes>
				<Route path="/" element={< Home />} />
				<Route path="/home" element={< Home />} />
				<Route path="/login" element={< Login />} />
				<Route path="/cadastro" element={< Cadastro />} />
			</Routes>
		</div>
		<Footer />
		
       
     </BrowserRouter>
      
    </>
   
  )
}

export default App
