import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IUser from '../types/IUser'
import Usuario from './Usuario'

interface usuariosProps {
  usuario: IUser
}

const Usuarios = ({ usuario }: usuariosProps) => { 
  
  const [usuarios, setUsuarios] = useState<IUser[]>([])
  useEffect(() => {
      axios.get(`http://localhost:5000/user/${usuario.id}/`)
      .then(resposta => {
        setUsuarios(resposta.data)
      })
  }, [usuario.id])
  
      

  return (
    <div>
      <h2>{usuario.name}</h2>
    </div>
  )
}

export default Usuarios