import React from 'react'
import CatImage from './components/CatImage'


function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Cat API - Fernando Zuchi</h1>
      <CatImage />

    </div>
  )
}

export default App