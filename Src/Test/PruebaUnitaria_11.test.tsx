import Cerezo from '../Componentes/Atomos/Animaciones/Cerezo'
import { render } from '@testing-library/react'
import { test, expect } from 'vitest'

test('[+] El Cerezo Dibuja 8 Petalos', () => {
    const { container } = render(
        <Cerezo />
    )

    const petalos = container.querySelectorAll('.petalo')

    expect (petalos.length).toBe(8)

    const primero = petalos[0] as HTMLSpanElement

    expect (primero.style.left).toBe('0%')
    expect (primero.style.width).toBe('8px')

})