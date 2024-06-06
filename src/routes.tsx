
import Home from './pages/Home/home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Menu from './pages/menu/menu.index'
import Denuncia from './pages/denuncia/denuncia.index'
import Cadastro from './pages/cadastro/cadastro.index'
import Sobre from './pages/sobre/sobre.index'

function Approutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/menu" element={<Menu/>}></Route>
                <Route path="/denuncia" element={<Denuncia/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>

                
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes