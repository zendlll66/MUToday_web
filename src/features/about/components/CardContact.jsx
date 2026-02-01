import React from 'react'
import { MapPin, Mail, Facebook } from 'lucide-react'

const CardContact = () => {
    return (
        <div className='w-full max-w-[810px] mx-auto px-4 py-8'>
            <div className='bg-white py-[36px] px-[56px] rounded-3xl border border-black/20'>
                <div className='flex flex-row gap-8 md:gap-12'>
                    {/* Left Section - Address */}
                    <div className='flex-1'>
                        <h2 className='text-xl font-semibold text-black mb-4'>
                            ติดต่อมูทูเดย์
                        </h2>
                        <div className='space-y-2'>
                            <div className='flex items-start gap-2'>
                                <MapPin className='w-5 h-5 text-black mt-0.5 shrink-0' />
                                <div className='text-base text-black leading-relaxed'>
                                    <div className='font-medium'>บริษัท มูทูเดย์ จำกัด</div>
                                    <div>150 ซอยสุขุมวิท 55 (ทองหล่อ) แขวงคลองตันเหนือ เขตวัฒนา</div>
                                    <div>กรุงเทพมหานคร 10110</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Digital Contacts */}
                    <div className='flex-1'>
                        <div className='space-y-2'>
                            <div className='flex items-center gap-2'>
                                <Mail className='w-5 h-5 text-black shrink-0' />
                                <span className='text-base text-black'>mutodayofficial</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Facebook className='w-5 h-5 text-black shrink-0' />
                                <span className='text-base text-black'>มูทูเดย์-MUTODAY Official</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Facebook className='w-5 h-5 text-black shrink-0' />
                                <span className='text-base text-black'>มูทูเดย์</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContact