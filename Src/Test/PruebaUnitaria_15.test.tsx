import CardGastronomica from '../Componentes/Moleculas/CardGastronomica'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'

test ('[+] La Card De Gastronomia Debe Mostrar Una Imagen Y El Resto De Sus Datos ', () => {
    const { container } = render (

        <MemoryRouter>
            <CardGastronomica 
            
                Enlace = 'https://drive.google.com/thumbnail?id=1BQZeJMVq2-LylvSf8wu5N9YnI8JwbucC&sz=w1000'
                Imagen = 'Foto Ramen'
                DesCrp = 'Sopa De Fideos'
                Titulo = 'Ramen'
            
            />
        </MemoryRouter>

    )

    const img = container.querySelector('.card_img') as HTMLImageElement
    expect (img.getAttribute('src')).toBe('https://drive.google.com/thumbnail?id=1BQZeJMVq2-LylvSf8wu5N9YnI8JwbucC&sz=w1000')
    expect (img.getAttribute('alt')).toBe('Foto Ramen')

    expect (container.querySelector('.card_description')?.textContent?.trim()).toBe('Sopa De Fideos')
    expect (container.querySelector('.card_title')?.textContent?.trim()).toBe('Ramen')
    expect (container.querySelector('button')?.textContent?.trim()).toBe('Más Detalle')

})