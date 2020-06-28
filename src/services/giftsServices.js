import {callFetch} from './configServices'

export const searchGifs = async (category)=> {
  const rsp = await callFetch({
    method: 'GET', 
    url: `search?q=${ encodeURI( category ) }&limit=30`,
  })

  const { data } =  rsp
  const images = data.data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  return images
}