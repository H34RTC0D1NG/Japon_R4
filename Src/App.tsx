import Navbar from './Componentes/Organismos/Navbar'
import Footer from './Componentes/Organismos/Footer'

import { Routes, Route } from 'react-router-dom'

import Estaciones from './Paginas/Estaciones'
import Galeria from './Paginas/Galeria'
import Inicio from './Paginas/Inicio'

import './Css/Global/General.css'

function App() {
    return (
        <>

            <Navbar />

            <Routes>

                <Route 
                    path = '/'
                    element = {<Inicio />}
                />
                <Route 
                    path = '/Estaciones'
                    element = {<Estaciones />}
                />
                <Route 
                    path = '/Galeria'
                    element = {<Galeria />}
                />

            </Routes>

            <Footer />

        </>
    )
} export default App