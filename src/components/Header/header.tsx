import { Link } from "react-router-dom"
import './header.css'

function Header() {

    return (
        <header className="{}">
            



            <ul id="nav">

                <li className="slide1"></li>
                <li className="slide2"></li>
               
                <li><Link to="/">  Todos Juntos</Link> </li>
            
                <li><Link to="/homelogin">Home Login</Link></li>
                <li><Link to="/denuncia">Cadastro Denuncia</Link></li>
                <li><Link to="/lista">Lista Denuncia</Link></li>
                <li><Link to="sobre">Informações</Link></li>


            </ul>



        </header>
    )
}
export default Header