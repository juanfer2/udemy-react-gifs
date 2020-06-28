import React from 'react'
import {GyphyContext} from './GyphyContext'

import Gyphy from './Gyphy';

function GyphyWrapper() {
  return (
    <GyphyContext.Provider>
      <Gyphy/>
    </GyphyContext.Provider>
  )
}

export default GyphyWrapper
