import Desplazate from '../Componentes/Atomos/Animaciones/Desplazate'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] Desplazate Muestra Su Texto Con La Clase Scroll', () => {
    const { container } = render (
        <Desplazate />
    )

    const span = container.querySelector('span') as HTMLSpanElement

    expect (span.textContent?.trim()).toBe('Desplázate')
    expect (span.className).toBe('Scroll')

})