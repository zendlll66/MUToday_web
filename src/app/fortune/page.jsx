import { HeroSections } from '@/features/fortune/components/HeroSections'
import { StarOverlay } from '@/features/fortune/components/StarOverlay'
import DailyHoroscopeSection from '@/features/fortune/components/DailyHoroscopeSection'

const page = () => {
    return (
        <div className="relative min-h-screen bg-mu-purple mx-auto overflow-hidden">
            {/* Overlay ดาว 4 แฉก (CSS) */}
            <div className="pointer-events-none fixed top-0 z-0 h-screen min-h-[400px] w-full">
                <StarOverlay />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen ">
                <HeroSections />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen ">    
                <DailyHoroscopeSection />
            </div>
            
        </div>
    )
}

export default page