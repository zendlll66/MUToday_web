"use client"

import { useEffect } from 'react'
import GuestAPI from '@/lib/api/enpoints/guest.api'
import Token from '@/lib/api/axios/token'

const TokenInit = ({ children }) => {
    useEffect(() => {
        const initToken = async (forceRefresh = false) => {
            const hasToken = Token.get()
            if (hasToken && !forceRefresh) return

            try {
                const response = await GuestAPI.getGuest()
                const { token } = response?.data?.data || {}
                if (token) {
                    Token.set(token)
                    if (typeof window !== 'undefined') {
                        sessionStorage.removeItem('auth-reload-once')
                    }
                }
            } catch (error) {
                console.error('TokenInit: get guest token failed', error)
                if (hasToken) {
                    Token.remove()
                    return initToken(true)
                }
            }
        }

        initToken()

        const onTokenInvalid = () => initToken(true)
        window.addEventListener('token-invalid', onTokenInvalid)
        return () => window.removeEventListener('token-invalid', onTokenInvalid)
    }, [])

    return children
}

export default TokenInit
