import React from 'react'
import { useAuth } from '../context/authProvider'
import axiosPrivate from '../api/axios';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosPrivate.post("/refresh", {
      withCredentials: true
    })

    setAuth((prev) => ({
      ...prev,
      user: response.data.email,
      roles: response.data.roles,
      accessToken: response.data.access_token
    }))
    return response.data.access_token
  }

  return refresh;
}

export default useRefreshToken