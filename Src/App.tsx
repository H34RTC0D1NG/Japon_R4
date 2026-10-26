import Navbar from './Componentes/Organismos/Navbar'
import Footer from './Componentes/Organismos/Footer'

import { Routes, Route } from 'react-router-dom'

import Gastronomia from './Paginas/Gastronomia'
import Estaciones from './Paginas/Estaciones'
import Contacto from './Paginas/Contacto'
import Galeria from './Paginas/Galeria'
import Inicio from './Paginas/Inicio'
import Vuelo from './Paginas/Vuelo'

import Registro from './Paginas/Registro'

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
                    path = '/Vuelo'
                    element = {<Vuelo />}
                />

                <Route 
                    path = '/Contacto'
                    element = {<Contacto />}
                />

                <Route 
                    path = '/Registro'
                    element = {<Registro />}
                />

            </Routes>

            <Footer />

        </>
    )
} export default App