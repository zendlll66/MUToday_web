"use client"

import { useEffect } from 'react'
import GuestAPI from '@/lib/api/enpoints/guest.api'
import Token from '@/lib/api/axios/token'

const TokenInit = ({ children }) => {
    useEffect(() => {
        const initToken = async () => {
            if (Token.get()) return

            try {
                const response = await GuestAPI.getGuest()
                const { token } = response.data?.data || {}
                if (token) {
                    Token.set(token)
                }
            } catch (error) {
                console.error('TokenInit: get guest token failed', error)
            }
        }

        initToken()
    }, [])

    return children
}

export default TokenInit
