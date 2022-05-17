import React from 'react'
import { Navigate } from 'react-router-dom'

import cookie from 'cookie'

const ProtectedAuthRoute = ({ children }) => {

    const cookies = cookie.parse(document.cookie)

    if (cookies["Registered"] && cookies['Token'] ) {
        return children
    } else {
        return <Navigate to={"/"} replace />
    }
}

export default ProtectedAuthRoute