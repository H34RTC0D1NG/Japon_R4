import CardVuelo from '../Componentes/Moleculas/CardVuelo'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test ('[+] La Card De Vuelo Muestra Sus Respectivos Datos y El Link Usa El ID', () => {
    const { container, getByText } = render (
        
        <MemoryRouter>
            <CardVuelo 

                ID = {5}
                Titulo = 'Santiago - Tokio'
                Descripcion = 'Vuelo Con Escala'
                Precio = {850000}
                Imagen = '/Fondos/Fondo_2.jpg'
                Error = 'Imagen No Encontrada'
            
            />
        </MemoryRouter>
    
    )

    expect (container.querySelector('.vuelo_titulo')?.textContent?.trim()).toBe('Santiago - Tokio')
    expect (container.querySelector('.vuelo_descripcion')?.textContent?.trim()).toBe('Vuelo Con Escala')
    expect (container.querySelector('.vuelo_precio')?.textContent?.trim()).toBe('850000')

    const link = getByText('Reservar Vuelo')
    expect (link.getAttribute('href')).toBe('/Vuelo/5')

})