import React from 'react'
import { ExampleComponent, Button } from 'web3-components'

const App = () => {
  return <Button label='Button' border='gradient' gradient color={'red'} glow={'red'} onClick={() => alert('Pressed!!')} />
}

export default App
