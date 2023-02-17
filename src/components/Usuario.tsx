import React from 'react'
import IUser from '../types/IUser'

interface UsuariosProps {
    usuarios: IUser
}



const Usuario = ({ usuarios }: UsuariosProps) => {
  return (
    <>
        <h2>{usuarios.name}</h2>
    </>
  )
}

export default Usuario