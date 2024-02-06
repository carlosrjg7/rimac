import { useState, useContext } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Plans from './pages/Plans'
import { AuthContext } from '~/context/authProvider'

function App() {
  const { authenticated } = useContext(AuthContext)
  return (
    <>
      <Layout>{authenticated ? <Plans /> : <Home />}</Layout>
    </>
  )
}

export default App
