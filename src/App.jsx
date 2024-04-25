import { useState } from 'react'
import { reverse } from './helpers'
import Title from './Components/Title'
import NameLength from './Components/NameLength'
import NameReversed from './Components/NameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name} reverse={reverse}/>
    </div>
  )
}

export default App
