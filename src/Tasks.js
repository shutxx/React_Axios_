import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { API_TASKS } from './utils/API';

function Tasks() {
  const [pessoas, setPessoas] = useState([])
  const [erroMsg, setErroMsg] = useState(null)

  const getPessoas = useCallback(async () => {
    const { data, error } = await API_TASKS.get('/person')

    if (error) {
      setErroMsg("erro")
    }
    if (data?.pessoas) {
      setPessoas(data.pessoas)
    }

  }, [])

  useEffect(() => {
    getPessoas()
  }, [getPessoas]);


  return (
    <div className="App">
      {!!erroMsg && <div className='error-msg'>{erroMsg}</div>}
      {pessoas.length > 0 && pessoas.map((item) => {
        return (
          <div>
            <h3>nome: {item.Nome}</h3>
            <h3>nome: {item.Telefone}</h3>
            <h3>nome: {item.Email}</h3>
            <hr></hr>
          </div>
        )
      })}
    </div>
  )
}

export default Tasks;