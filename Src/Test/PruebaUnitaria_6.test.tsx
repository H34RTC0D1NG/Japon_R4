import Btn from '../Componentes/Atomos/Botones/Btn'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test ('[+] El Btn Muestra El Texto y Lleva A La Ruta Correcta', () => {
    const { container } = render (
        <MemoryRouter>
            <Btn 
            
                Texto = 'Reservar Vuelo'
                Ruta = '/Vuelo/3'
            
            />
        </MemoryRouter>
    )

    const link = container.querySelector('a') as HTMLAnchorElement

    expect (link.textContent).toBe('Reservar Vuelo')
    expect (link.getAttribute('href')).toBe('/Vuelo/3')
    expect (link.className).toBe('btn btn-primary')
})