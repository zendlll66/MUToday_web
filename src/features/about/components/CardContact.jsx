import React from 'react'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

const SOCIAL_ICON_CLASS = 'w-6 h-6 text-black shrink-0'

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={SOCIAL_ICON_CLASS}>
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={SOCIAL_ICON_CLASS}>
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="black" strokeWidth="1.5" />
        <path d="M17.508 6.5H17.499" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const TiktokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={SOCIAL_ICON_CLASS}>
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={SOCIAL_ICON_CLASS}>
        <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="black" strokeWidth="1.5" />
        <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
)


const CardContact = () => {
    return (
        <div className="w-full max-w-[810px] mx-auto px-4">
            <div className="bg-white py-9 px-8 md:px-12 rounded-3xl border border-black/10">
                {/* Title with underline (เส้นยื่นออกสองข้างเล็กน้อย) */}
                <h2 className="text-2xl font-bold text-black mb-6 pb-1.5  w-fit px-1 -mx-1">
                    ติดต่อมูทูเดย์
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left - Address */}
                    <div className="flex-1 flex items-start gap-3">
                        <MapPin className={`${SOCIAL_ICON_CLASS} mt-0.5`} strokeWidth={1.5} aria-hidden />
                        <div className="text-base text-black leading-relaxed space-y-0.5">
                            <div className="font-medium">บริษัท มูทูเดย์ จำกัด</div>
                            <div>150 ซอยสุขุมวิท 55 (ทองหล่อ) แขวงคลองตันเหนือ</div>
                            <div>เขตวัฒนา กรุงเทพมหานคร 10110</div>
                        </div>
                    </div>

                    {/* Right - Social (2 columns) */}
                    <div className="flex flex-wrap gap-x-10 gap-y-4">
                        <div className="flex flex-col gap-3">
                            <Link
                                href="https://www.facebook.com/MUTODAYOfficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-black hover:opacity-80 transition-opacity"
                            >

                                <FacebookIcon />

                                <span className="text-base">มูทูเดย์</span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/mutodayofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-black hover:opacity-80 transition-opacity"
                            >

                                <InstagramIcon />

                                <span className="text-base">mutodayofficial</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link
                                href="https://www.tiktok.com/@mutodayofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-black hover:opacity-80 transition-opacity"
                            >
                                <TiktokIcon />
                                <span className="text-base">mutodayofficial</span>
                            </Link>
                            <Link
                                href="https://www.youtube.com/@MUTODAYOfficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 text-black hover:opacity-80 transition-opacity"
                            >
                                <YoutubeIcon />
                                <span className="text-base">MUTODAYOfficial</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContact
