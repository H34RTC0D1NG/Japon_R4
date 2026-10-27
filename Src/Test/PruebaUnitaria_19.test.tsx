import IniciarForm from '../Componentes/Organismos/IniciarForm'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'


test('[+] IniciarForm Con Datos Correctos Entra Al Admin', () => {

    const alerta = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const { container, getByText, queryByText } = render(

        <MemoryRouter initialEntries = {['/IniciarSession']}>
            <Routes>
                <Route path = '/IniciarSession' element = {<IniciarForm />} />
                <Route path = '/Admin' element = {<h1>Pagina Admin</h1>} />
            </Routes>
        </MemoryRouter>
    
    )

    expect(queryByText('Pagina Admin')).toBeNull()

    const correo     = container.querySelector('input[name="Correo"]') as HTMLInputElement
    const contrasenia = container.querySelector('input[name="Pass"]') as HTMLInputElement

    fireEvent.change(correo,      { target : { value : 'isa.mejias@duocuc.cl' }})
    fireEvent.change(contrasenia, { target : { value : 'holamundo' }})
    fireEvent.click(getByText('Iniciar Sessión'))

    expect(alerta).toHaveBeenCalledWith('Bienvenido Señor Isam')
    expect(getByText('Pagina Admin')).toBeTruthy()

    alerta.mockRestore()

})
