import { useState, useEffect } from 'react';
import { searchGifs } from '../../../services/giftsServices'

export const useFetchGyphy = (category) => {
  
  const [state, setState] = useState({
    data: [],
    loanding: true
  })

  useEffect(() => {
    const rsp = searchGifs(category);
    rsp.then(imgs => {
      setState({
        ...state,
        data: imgs,
        loanding: false
      })
    })

  }, [category])

  return state;

}