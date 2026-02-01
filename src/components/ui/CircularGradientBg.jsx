import React from 'react'

const CircularGradientBg = ({ className = '', position = 'top' }) => {
    // สำหรับด้านล่าง ให้ flip SVG
    const isBottom = position === 'bottom'
    
    return (
        <div className={`overflow-hidden pointer-events-none ${className}`}>
            {/* SVG Background with concentric circles */}
            <svg 
                className={`w-full h-full ${isBottom ? 'scale-y-[-1]' : ''}`}
                viewBox="0 0 1280 506" 
                preserveAspectRatio="xMidYTop slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle 
                    opacity="0.4" 
                    cx="746.085" 
                    cy="-356.511" 
                    r="862.511" 
                    fill="#8A6CFF" 
                    fillOpacity="0.05"
                />
                <circle 
                    opacity="0.5" 
                    cx="746.083" 
                    cy="-356.511" 
                    r="781.669" 
                    fill="#8A6CFF" 
                    fillOpacity="0.05"
                />
                <circle 
                    opacity="0.6" 
                    cx="746.675" 
                    cy="-357.106" 
                    r="701.422" 
                    fill="#8A6CFF" 
                    fillOpacity="0.05"
                />
                <circle 
                    opacity="0.7" 
                    cx="746.685" 
                    cy="-357.106" 
                    r="620.58" 
                    fill="#8A6CFF" 
                    fillOpacity="0.05"
                />
                <circle 
                    opacity="0.8" 
                    cx="746.682" 
                    cy="-357.106" 
                    r="539.738" 
                    fill="#8A6CFF" 
                    fillOpacity="0.05"
                />
                <circle 
                    opacity="0.9" 
                    cx="746.68" 
                    cy="-355.917" 
                    r="458.896" 
                    fill="#8A6CFF" 
                    fillOpacity="0.05"
                />
                <circle 
                    cx="746.678" 
                    cy="-355.917" 
                    r="378.054" 
                    fill="#F5F5F7" 
                    fillOpacity="0.05"
                />
            </svg>
        </div>
    )
}

export default CircularGradientBg
