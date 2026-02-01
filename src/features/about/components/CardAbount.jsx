import React from 'react'

const CardAbount = () => {
    return (
        <div className='w-full max-w-[810px] mx-auto px-4'>
            <div className='bg-white py-[36px] px-[56px] rounded-3xl border  border-black/20 '>
                {/* Section 1: MUToday คืออะไร ? */}
                <section className=''>
                    <h2 className='text-xl font-semibold text-black'>
                        MUToday คืออะไร ?
                    </h2>
                    <p className='text-base text-black leading-relaxed'>
                        การมูเป็นส่วนหนึ่งของชีวิตคนไทยมาช้านาน แต่ยังไม่มีพื้นที่ที่ปลอดภัยและน่าเชื่อถือสำหรับการมูในยุคดิจิทัล
                        MUToday จึงเกิดขึ้นเพื่อเชื่อมโยงดวงดาว เทคโนโลยี และผู้เชี่ยวชาญเข้าด้วยกัน
                        ทำให้การมูเป็นเรื่องง่าย สมัยใหม่ และสนุกสนาน
                    </p>
                    <hr className='border-t border-gray-200 my-[30px] ' />
                </section>

                {/* Section 2: วิสัยทัศน์และจุดยืน */}
                <section className=''>
                    <h2 className='text-xl font-semibold text-black mb-[10px]'>
                        วิสัยทัศน์และจุดยืน
                    </h2>
                    <p className='text-base text-black leading-relaxed'>
                        เรามองว่าการมูควรเป็นพลังที่ช่วยให้ผู้ใช้เห็นทางเลือกที่ชัดเจนในชีวิต ไม่ใช่เรื่องลึกลับหรือน่ากลัว
                        MUToday ออกแบบมาให้เรียบง่าย สมัยใหม่ เคารพการตัดสินใจของผู้ใช้
                        และไม่บังคับหรือแทนที่เหตุผลในชีวิต
                    </p>
                    <hr className='border-t border-gray-200 my-[30px] ' />
                </section>

                {/* Section 3: สิ่งที่เราทำ */}
                <section className=''>
                    <h2 className='text-xl font-semibold text-black mb-[10px]'>
                        สิ่งที่เราทำ
                    </h2>
                    <ul className='list-disc pl-5 text-base text-black space-y-2'>
                        <li>ประสบการณ์การมูแบบมีสติ</li>
                        <li>แพลตฟอร์มที่ขับเคลื่อนด้วยเทคโนโลยี</li>
                        <li>เนื้อหาที่ออกแบบอย่างตั้งใจ</li>
                        <li>ชุมชนของคนที่เติบโตไปพร้อมกัน</li>
                    </ul>
                    <hr className='border-t border-gray-200 my-[30px] ' />
                </section>

                {/* Section 4: ทำไมต้อง MUToday */}
                <section>
                    <h2 className='text-xl font-semibold text-black mb-[10px]'>
                        ทำไมต้อง MUToday
                    </h2>
                    <p className='text-base text-black leading-relaxed'>
                        เพราะการมูในยุคใหม่ไม่ควรเป็นเรื่องงมงายหรือห่างไกล แต่ควรเป็นพลังที่เข้าถึงได้และช่วยให้ผู้ใช้มีชีวิตที่ดีขึ้น
                        MUToday ออกแบบมาให้การมูเป็นเรื่องปลอดภัย น่าเชื่อถือ และเป็นเพื่อนคู่ใจในทุกวัน
                    </p>
                </section>
            </div>
        </div>
    )
}

export default CardAbount