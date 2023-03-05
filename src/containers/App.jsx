import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeArrendador from '../pages/HomeArrendador';
import InformacionAdicional from '../pages/InformacionAdicional';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import MisPublicacionesArrendador from '../pages/MisPublicacionesArrendador';
import NotFound from '../pages/NotFound';
import Register from "../pages/Register";
import EditarPublicacion from "../pages/EditarPublicacion";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/homeArrendador" element={<HomeArrendador/>} />
                <Route path="/mispublicacionesArrendador" element={<MisPublicacionesArrendador/>} />
                <Route path="/masinfoarrendador" element={<InformacionAdicional/>} />
                <Route path="/editarpublicacion" element={<EditarPublicacion/>} />

                <Route path="/*" element={<NotFound/>} /> 
            </Routes>
        </BrowserRouter>   
    );
}

export default App;