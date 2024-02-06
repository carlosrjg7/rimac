import React, { useState, useEffect, useContext, createContext } from 'react'
import LoadingComponent from '~/components/loading/LoadingComponent'
// import { userMApping } from '~/constants/mapping'

export const AuthContext = createContext('AuthContext')

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    birthDay: '',
  })

  const [authenticated, setAuthenticated] = useState(false)

  const [busy, setBusy] = useState(false)

  return (
    <AuthContext.Provider
      value={{ user, authenticated, setUser, setBusy, setAuthenticated }}
    >
      {busy ? <LoadingComponent /> : children}
    </AuthContext.Provider>
  )
}
