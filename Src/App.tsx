import Navbar from '../Src/Componentes/Organismos/Navbar'
import Footer from '../Src/Componentes/Organismos/Footer'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/Primaria/Inicio'

function App() {

  return (
    <>
      
      <Navbar />

      <Routes>

        <Route 
          path = '/'
          element = {<Inicio />}
        />

      </Routes>

      <Footer />

    </>
  )
}

export default App
