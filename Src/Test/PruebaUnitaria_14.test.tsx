import CardContacto from '../Componentes/Moleculas/CardContacto'
import { render } from '@testing-library/react'
import { FaPhone } from 'react-icons/fa6'
import { test, expect } from 'vitest'

test('[+] La Card Del Contacto Muestra El Icono, Titulo y Detalle', () => {

    const { container } = render (
        <CardContacto 
        
            Icono = {FaPhone}
            Titulo = 'Telefono'
            Detalle = '+56 9 1234 5678'
        
        />
    )

    const icono = container.querySelector('.tarjeta_icono svg')
    expect (icono).not.toBeNull()

    expect (container.querySelector('strong')?.textContent?.trim()).toBe('Telefono')
    expect (container.querySelector('small')?.textContent?.trim()).toBe('+56 9 1234 5678')

})