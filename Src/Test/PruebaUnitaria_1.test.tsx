import Input from '../Componentes/Atomos/Inputs/Input'
import { render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'

test('[+] El Input Avisa Lo Que Escribe El Usuario', () => {
    const cambio = vi.fn()
    const { container } = render(
        <Input 
            
            Nombre = 'Isam' 
            Tipo = 'text' 
            Valor = ''
            Change = {cambio} 
            
        />
    ) 

    const input = container.querySelector('input') as HTMLInputElement
    fireEvent.change(input, { target : { value : 'Isam' }})
    expect(cambio).toHaveBeenCalledWith('Isam')

})