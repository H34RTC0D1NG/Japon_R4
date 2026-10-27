import Input from '../Componentes/Atomos/Inputs/Input'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Imput Recibe Bien El Tipo, El Nombre y El Valor', () => {
    const { container } = render(
        <Input 
        
            Tipo = 'password'
            Nombre = 'Pass'
            Valor = 'holamundo'
            Change= {() => {}}
        
        />
    )

    const input = container.querySelector('input') as HTMLInputElement

    expect(input.type).toBe('password')
    expect(input.getAttribute('name')).toBe('Pass')
    expect(input.value).toBe('holamundo')
    expect(input.className).toBe('form-control')

})