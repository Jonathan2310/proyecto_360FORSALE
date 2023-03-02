import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeArrendador from '../pages/HomeArrendador';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from "../pages/Register";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/homeArrendador" element={<HomeArrendador/>} />

                <Route path="/*" element={<NotFound/>} /> 
            </Routes>
        </BrowserRouter>   
     );
}

export default App;