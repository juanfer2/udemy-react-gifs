import React, {useState} from 'react'
import { searchGifs } from '../../../services/giftsServices'

function GyphySearch({setCategory}) {
  const [search, setSearch] = useState('')

  const searchValue = () => {
    setCategory(search)
  }

  return (
    <div>
      <input type="text" value={search} onChange={ (e)=>  setSearch(e.target.value) }  />
      <button
      onClick={ ()=>  searchValue()}
      >
        Buscar
      </button>
    </div>
  )
}

export default GyphySearch
