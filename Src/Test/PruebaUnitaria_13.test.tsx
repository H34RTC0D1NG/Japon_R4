import Img from '../Componentes/Moleculas/Galeria'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] La Img De La Galeria Recibe Su Ruta y Su Alt', () => {

    const { container } = render (
        <Img 
        
            Imagen = '/Fondos/Fondo_5.jpg'
            ErrImg = 'No Cargo La Imagen'
        
        />
    )

    const img = container.querySelector('img') as HTMLImageElement

    expect (img.getAttribute('src')).toBe('/Fondos/Fondo_5.jpg')
    expect (img.getAttribute('alt')).toBe('No Cargo La Imagen')
    expect (img.className).toBe('Img')

})