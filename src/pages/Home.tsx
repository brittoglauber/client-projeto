

import { useEffect, useState } from 'react'
import axios from '../api/axios'
import Usuarios from '../components/Usuarios'
import { IPaginacao } from '../types/IPaginacao'
import IUser from '../types/IUser'

const Home = () => {

  const [usuarios, setUsuarios] = useState<IUser[]>([])

  useEffect(() => {
      axios.get<IPaginacao<IUser>>('http://localhost:5000/users')
      .then(resposta => {
        setUsuarios(resposta.data.results)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  console.log(usuarios)

  return (

    <div className='flex h-screen w-full'>
      <h1>Usuários</h1>
      {usuarios?.map(item =><Usuarios usuario={item} key={item.id} />)}
    </div>
    
  )
}

export default Home