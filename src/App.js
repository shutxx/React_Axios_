import { useCallback, useEffect, useState } from 'react';
import './App.css';
import API from './utils/API';

function App() {
  const [character, setCharacter] = useState([])
  const [erroMsg, setErroMsg] = useState(null)

  const getCharacters = useCallback( async () => {
    const { data, error } = await API.get('/character')

    if(error) {
      setErroMsg("ERRO")
    }
    if(data?.results) {
      setCharacter(data.results)
    }

  },[])

  useEffect( () => {
    getCharacters()
  },[getCharacters])

  return (
    <div className="App">
      {!!erroMsg && <div className='error-msg'>{erroMsg}</div>}
      {character.length > 0 && character.map( (item) => {
        return(
          <div>
            { !!item?.image && <img alt={item.name} src={item.image} /> }
            <h3>{item.name}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default App;
