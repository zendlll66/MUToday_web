import React from 'react'

/** วงกลมซ้อน 7 ชั้น เป็น div สีซ้อนกัน: วงกลาง 500px, ถัดไป +100px (ปรับ opacity ได้) */
const PURPLE = '130, 110, 210'
const SIZES = [500, 600, 700, 800, 900, 1000, 1100] // diameter แต่ละชั้น
const OPACITIES = [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05] // วงใน → วงนอก

const ConcentricGlow = ({ className = '', position = 'top' }) => {
  const isBottom = position === 'bottom'

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${isBottom ? 'scale-x-[-1]' : 'scale-y-[-1]'} ${className}`}
    >
      {[...SIZES].reverse().map((size, i) => {
        const idx = SIZES.length - 1 - i
        return (
          <div
            key={idx}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: `rgba(${PURPLE}, ${OPACITIES[idx]})`,
            }}
          />
        )
      })}
      {/* รูปดาวซ้อนด้านบน — ด้านล่างจะ flip ตาม container scale-y-[-1] */}
      <img
        src="/img/star-g.png"
        alt=""
        className="absolute  top-[-20%] inset-0 h-full w-full object-contain object-center opacity-90"
      />
    </div>
  )
}

export default ConcentricGlow
