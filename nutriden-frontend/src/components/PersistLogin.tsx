import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/authProvider'
import useRefreshToken from '../hooks/useRefreshToken'
import { Outlet } from 'react-router-dom'

const PersistLogin = () => {
    const { auth, persist } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const refresh = useRefreshToken()

    useEffect(() => {
        let isMounted = true
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (err) {
                console.log(err)
            } finally {
                isMounted && setIsLoading(false)
            }
        }

        (!auth.accessToken && persist) ? verifyRefreshToken() : setIsLoading(false)

        return () => { isMounted = false };
    }, [])

    return (
        <>
            {
                isLoading
                    ? (<p>Loading...</p>)
                    : (<Outlet />)
            }
        </>
    )
}

export default PersistLogin