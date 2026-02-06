"use client"
import React, { useState } from 'react'
import GuestAPI from '@/lib/api/enpoints/guest.api'
import Token from '@/lib/api/axios/token'

const page = () => {
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleGetGuest = async () => {
        setMessage('')
        setIsLoading(true)
        try {
            const response = await GuestAPI.getGuest();
            const { token, mode } = response.data?.data || {};
            if (token) {
                Token.set(token);
                setMessage(`สำเร็จ! Token บันทึกแล้ว (mode: ${mode})`);
            } else {
                setMessage('สำเร็จ แต่ไม่พบ token ใน response');
            }
        } catch (error) {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || '(ไม่ได้ตั้งค่า)';
            if (error.code === 'ERR_NETWORK') {
                setMessage(`Network Error - เช็ค: 1) CORS บน API 2) API ทำงานอยู่หรือไม่ 3) URL: ${apiUrl}`);
            } else {
                setMessage(error.response?.data?.message || error.message || 'เกิดข้อผิดพลาด');
            }
            console.error('Get guest failed:', error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='container mx-auto px-4 py-8 text-black'>
            <button
                onClick={handleGetGuest}
                disabled={isLoading}
                className='px-5 py-2 bg-gray-500 text-white rounded disabled:opacity-50'
            >
                {isLoading ? 'กำลังโหลด...' : 'Get Guest'}
            </button>
            {message && (
                <p className='mt-4 text-sm text-gray-700 max-w-md'>{message}</p>
            )}
        </div>
    )
};

export default page;