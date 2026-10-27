import Imagenes from '../Componentes/Moleculas/Imagenes'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] Imagenes Muestra La Foto Con Su Titulo', () => {

    const { getByAltText, container } = render (
        <Imagenes 
        
            Imagen = '/Fondos/Fondo_1.jpg'
            Titulo = 'Monte Fuji'
        
        />
    )

    const img = getByAltText('Monte Fuji') as HTMLImageElement

    expect (img.getAttribute('src')).toBe('/Fondos/Fondo_1.jpg')
    expect (img.className).toBe('Cubo')

    expect (container.firstElementChild?.className).toBe('Caja')

})