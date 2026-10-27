import SelectorSalida from '../Componentes/Atomos/Inputs/SelectorSalida'
import { render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'

test('[+] El Selector de Salida Tiene [ 8 ] Opciones y Avisa Cual Se Elige', () => {
    
    const cambio = vi.fn()

    const { container } = render (
        <SelectorSalida 
        
            Nombre = 'Salida'
            Valor = ''
            Change = {cambio}

        />
    )

    const selector = container.querySelector('select') as HTMLSelectElement

    expect (selector.querySelectorAll('option').length).toBe(8)
    expect (selector.getAttribute('name')).toBe('Salida')

    fireEvent.change(selector, { target : { value : 'Madrid' } })

    expect (cambio).toHaveBeenCalledWith('Madrid')

})