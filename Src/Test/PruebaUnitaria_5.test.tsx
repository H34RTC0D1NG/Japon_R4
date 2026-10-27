import SelectorLlegada from '../Componentes/Atomos/Inputs/SelectorLlegada'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test ('[+] El Selector De Llegada Parte Vacio y Muestra Las Ciudades De Japòn', () => {
    const { container } = render (
        <SelectorLlegada 
        
            Nombre = 'Llegada'
            Valor = ''
            Change = {() => {}}
        
        />
    )

    const selector = container.querySelector('select') as HTMLSelectElement

    expect (selector.value).toBe('')

    const textos = Array.from(selector.querySelectorAll('option')).map((op) => op.textContent?.trim())

    expect (textos).toContain('Osaka')
    expect (textos).toContain('Tokio')
    expect (textos).toContain('Hiroshima')
    expect (textos.length).toBe(4)

})