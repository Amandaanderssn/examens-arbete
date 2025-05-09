import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routing'
import React from 'react'

const App = (): React.JSX.Element => {
  const routing = useRoutes(routes)

  return (
    <>
      {routing}
    </>
  )
}

export default App
