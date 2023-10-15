import React from 'react'
import {useAuth} from '../custom-hooks/useAuth'
import { useNavigate } from 'react-router'
const ProtectedAuth = ({children}) => {
    const {currentUser} = useAuth()
    const nav = useNavigate()
    return currentUser ? children : nav('/login')
}

export default ProtectedAuth
