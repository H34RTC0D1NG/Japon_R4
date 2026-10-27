import Boton from '../Componentes/Atomos/Botones/Boton'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test ('[+] El Boton Dice Mas Detalle y Lleva Al Inicio', () => {
    
    const { container } = render (
    
        <MemoryRouter>
            <Boton />
        </MemoryRouter>
    
    )

    const boton = container.querySelector('button') as HTMLButtonElement
    const link = container.querySelector('a') as HTMLAnchorElement

    expect (boton.className).toBe('btn btn-primary')
    expect (boton.style.width).toBe('100%')

    expect (link.textContent?.trim()).toBe('Más Detalle')
    expect (link.getAttribute('href')).toBe('/')
    
})