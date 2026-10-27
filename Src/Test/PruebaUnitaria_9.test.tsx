import Gastronomia from '../Componentes/Atomos/Botones/Gastronomia'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test ('[+] El Boton Gastronomia Lleva A La Pagina De Gastronomia', () => {
    
    const { container } = render (
    
        <MemoryRouter>
            <Gastronomia />
        </MemoryRouter>
    
    )

    const boton = container.querySelector('button') as HTMLButtonElement
    const link = container.querySelector('a') as HTMLAnchorElement

    expect (boton.className).toBe(`borde`)
    expect (link.textContent?.trim()).toBe('Ver Gastronomia')
    expect (link.getAttribute('href')).toBe('/Gastronomia')

})