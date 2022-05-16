import { useState } from 'react'
import { GlobalStyle } from './GlobalStyle'
import Page from './page/index'
import { Container } from './styled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
   <Container>
   <Page/>
   </Container>
    </>
  )
}

export default App
