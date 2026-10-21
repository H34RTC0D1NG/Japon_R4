import Navbar from './Componentes/Organismos/Navbar'
import Footer from './Componentes/Organismos/Footer'

import { Routes, Route } from 'react-router-dom'

import Gastronomia from './Paginas/Gastronomia'
import Estaciones from './Paginas/Estaciones'
import Contacto from './Paginas/Contacto'
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

                <Route 
                    path = '/Gastronomia'
                    element = {<Gastronomia />}
                />

                <Route 
                    path = '/Contacto'
                    element = {<Contacto />}
                />

            </Routes>

            <Footer />

        </>
    )
} export default App