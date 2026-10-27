import RegistroForm from '../Componentes/Organismos/RegistroForm'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect, vi } from 'vitest'


test('[+] RegistroForm Revisa Que Las Contrasenias Coincidan', () => {

    const alerta = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const { container, getByText } = render(
        <MemoryRouter>
            <RegistroForm />
        </MemoryRouter>
    )

    const escribir = (nombre : string, valor : string) => {
        const input = container.querySelector(`input[name="${nombre}"]`) as HTMLInputElement
        fireEvent.change(input, { target : { value : valor }})
    }

    escribir('Nombre', 'Isam')
    escribir('Apellido', 'Mejias')
    escribir('Correo', 'isam@duocuc.cl')
    escribir('Pass', 'holamundo')
    escribir('Confirm', 'chaomundo')

    fireEvent.click(getByText('Registrarse'))
    expect(alerta).toHaveBeenLastCalledWith('Las Contraseñas No Coinciden')

    escribir('Confirm', 'holamundo')
    fireEvent.click(getByText('Registrarse'))
    expect(alerta).toHaveBeenLastCalledWith('Registro Exitoso')

    alerta.mockRestore()

})