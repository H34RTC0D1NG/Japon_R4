import Formulario from '../Componentes/Organismos/Formulario'
import { render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'

test ('[+] El Formulario Valida Los Campos Antes De Enviar', () => {

    const alerta = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const { container, getByText } = render(<Formulario />)

    const nombre  = container.querySelector('input[name="Nombre"]') as HTMLInputElement
    const correo  = container.querySelector('input[name="Correo"]') as HTMLInputElement
    const mensaje = container.querySelector('input[name="Mensaje"]') as HTMLInputElement
    const enviar  = getByText('Enviar Mensaje')

    fireEvent.click(enviar)
    expect(alerta).toHaveBeenLastCalledWith('Debe Ingresar Su Nombre')

    fireEvent.change(nombre, { target : { value : 'Isam' }})
    fireEvent.change(correo, { target : { value : 'correomalo' }})
    fireEvent.click(enviar)
    expect(alerta).toHaveBeenLastCalledWith('Ingrese Un Correo Valido')

    fireEvent.change(correo,  { target : { value : 'isam@gmail.com' }})
    fireEvent.change(mensaje, { target : { value : 'Hola Japon' }})
    fireEvent.click(enviar)
    expect(alerta).toHaveBeenLastCalledWith('Formulario Enviado Exitosamente')

    alerta.mockRestore()

})