import { Link } from "react-router-dom"

function Navbar() {
	return (
		<>
			<div
				className="w-full flex justify-center py-4
            			   bg-indigo-900 text-white"
			>
				<div className="container flex justify-between text-lg mx-8">
					<Link to="/home" className="text-2xl font-bold">
						Blog Pessoal
					</Link>

					<div className="flex gap-4">
                        <Link to="/Postagens" >
						 Postagens 
					    </Link>
                        <Link to="/Temas" >
                            Temas 
                        </Link>
                        <Link to="/Cadastro" >
                        Cadastrar tema 
                        </Link>
                        <Link to="/Perfil" >
                        Perfil 
                        </Link>
                        <Link to="/Sair" >
                        Sair
                        </Link>
                       
                        
                        
                        
                    </div>
				</div>
			</div>
		</>
	)
}

export default Navbar