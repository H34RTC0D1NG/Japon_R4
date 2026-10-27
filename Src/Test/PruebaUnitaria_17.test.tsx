import Navbar from '../Componentes/Organismos/Navbar'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test ('[+] La Navbar o Menu Tiene Los 6 Links Con Sus Respectivas Rutas', () => {

    const { container } = render (

        <MemoryRouter>
            <Navbar />
        </MemoryRouter>

    )

    const link = container.querySelectorAll('a')
    expect (link.length).toBe(6)

    const rutas = Array.from(link).map((a) => a.getAttribute('href'))

    expect (rutas).toEqual(['/', '/Estaciones', '/Galeria', '/Gastronomia', '/Vuelo', '/Contacto'])

})