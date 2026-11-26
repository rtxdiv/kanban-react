import { useState } from 'react'
import Container from './Container'

export default function App() {
  const [count, setCount] = useState(0)

  function onclick() {
    setCount(count + 1)
  }

  return (
    <Container>
      <Button count={count} onclick={onclick}></Button>
      <Button count={count} onclick={onclick}></Button>
    </Container>
  )
}

export function Button(
  {count, onclick}: { count: number, onclick: () => void }
) {
  return (
    <button onClick={onclick}>
      Нажато {count} раз
    </button>
  )
}
