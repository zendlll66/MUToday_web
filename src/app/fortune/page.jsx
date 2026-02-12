export const dynamic = 'force-dynamic'

import { HeroSections } from '@/features/fortune/components/HeroSections'
import { ScrollToTopOnLoad } from '@/features/fortune/components/ScrollToTopOnLoad'
import { StarOverlay } from '@/features/fortune/components/StarOverlay'
import DailyHoroscopeSection from '@/features/fortune/components/DailyHoroscopeSection'
import AscendantSections from '@/features/fortune/components/AscendantSections'
import WallpaperSections from '@/features/fortune/components/WallpaperSections'
import SummarizeSections from '@/features/fortune/components/SummarizeSections'
import SoulmateHoroscope from '@/features/fortune/components/SoulmateHoroscope'
import Card from '@/features/fortune/components/Card'

const page = () => {
    return (
        <div className="relative  bg-mu-purple mx-auto overflow-hidden">
            {/* <ScrollToTopOnLoad /> */}
            {/* Overlay ดาว 4 แฉก (CSS) */}
            <div className="pointer-events-none fixed top-0 z-0 h-screen min-h-[400px] w-full">
                <StarOverlay />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 ">
                <HeroSections />
            </div>

            <div className="relative z-10">    
                <DailyHoroscopeSection />
            </div>

            <div className="relative z-10  ">    
                <AscendantSections />
            </div>

            <div className="relative z-10 ">    
                <Card />
            </div>

            <div className="relative z-10">    
                <WallpaperSections />
            </div>

            <div className="relative z-10">    
                <SoulmateHoroscope />
            </div>

            <div className="relative z-10">    
                <SummarizeSections />
            </div>
            
        </div>
    )
}

export default page