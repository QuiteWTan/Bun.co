import React, { useEffect, useState } from 'react'
import {useAuth} from '../custom-hooks/useAuth'
import { useNavigate } from 'react-router'
import useGetData from '../custom-hooks/useGetData'
const AdminAuth = ({children}) => {

    const {currentUser} = useAuth()

    const nav = useNavigate()
    return currentUser.email === 'wefwe@gmail.com' ? children : nav('/home')
}

export default AdminAuth