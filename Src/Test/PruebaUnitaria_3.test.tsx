import CampoForm from '../Componentes/Moleculas/CampoForm'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Campo Form Muestra La Etiqueta y El Input', () => {
    const { container } = render (
        <CampoForm 
        
            Etiqueta = 'Correo Electronico'
            Tipo = 'email'
            Nombre = 'Correo'
            Valor = ''
            Change = {() => {}}
        
        />
    )

    const label = container.querySelector('label') as HTMLLabelElement

    expect(label.textContent).toContain('Correo Electronico')
    expect(label.className).toBe('form-label')

    const input = container.querySelector('input') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.getAttribute('name')).toBe('Correo')

    expect(container.firstElementChild?.className).toBe('mb-3')

})