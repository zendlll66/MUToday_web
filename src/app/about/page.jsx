import CardAbount from '@/features/about/components/CardAbount'
import CardContact from '@/features/about/components/CardContact'
import Accordion from '@/components/ui/Accordion'
import CircularGradientBg from '@/components/ui/CircularGradientBg'
import { getCanonicalUrl } from '@/config/seo'

export const metadata = {
  title: 'เกี่ยวกับมูทูเดย์ | Mutoday',
  description:
    'มูทูเดย์ แพลตฟอร์มดูดวงและโหราศาสตร์ คลับสายมู ชุมชนโพสต์ทำนาย ดวง ทาโรต์ ฮวงจุ้ย คำถามที่พบบ่อยและติดต่อเรา',
  openGraph: {
    title: 'เกี่ยวกับมูทูเดย์ | Mutoday',
    description:
      'มูทูเดย์ แพลตฟอร์มดูดวงและโหราศาสตร์ คลับสายมู ชุมชนโพสต์ทำนาย ดวง ทาโรต์ ฮวงจุ้ย',
    url: getCanonicalUrl('about'),
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'เกี่ยวกับมูทูเดย์ | Mutoday' },
}

const page = () => {
    const faqData = [
        {
            id: "faq-1",
            question: "มูทูเดย์ คืออะไร?",
            answer: "MUToday คือแพลตฟอร์มดูดวงและโหราศาสตร์ที่พัฒนาขึ้นเพื่อช่วยให้ผู้ใช้งานเข้าใจตนเอง เห็นทิศทางชีวิต และตัดสินใจได้อย่างมั่นใจยิ่งขึ้น เราผสานหลักโหราศาสตร์ไทยตั้งเดิมกับเทคโนโลยี AI เพื่อให้คำทำนายมีความแม่นยำ ทันสมัย และสื่อสารในภาษาที่เข้าใจง่าย ใช้ได้จริงในชีวิตประจําวัน",
            initialExpanded: true  // เปิดไว้ตั้งแต่แรก
        },
        {
            id: "faq-2",
            question: "คำทำนายแม่นยำแค่ไหน ?",
            answer: "คำตอบของคุณ...",
            initialExpanded: false
        },
        {
            id: "faq-3",
            question: "เราควรเชื่อคำทำนายแค่ไหน ?",
            answer: "คำตอบของคุณ...",
            initialExpanded: false
        },
        {
            id: "faq-4",
            question: "มีค่าใช้จ่ายหรือไม่ ?",
            answer: "คำตอบของคุณ...",
            initialExpanded: false
        }
    ]

    return (
        <div className='relative min-h-screen'>
            {/* Background ด้านบน */}
            <CircularGradientBg 
                className="absolute top-0 left-[-20%] right-0 h-[600px] z-0"
                position="top"
            />
            
            {/* Background ด้านล่าง */}
            <CircularGradientBg 
                className="absolute bottom-0 left-[-20%] right-0 h-[600px] z-0"
                position="bottom"
            />
            
            <div className='relative flex flex-col items-center justify-center z-10'>
                <h1 className='text-4xl font-medium text-black mt-[88px] mb-[44px]'>เกี่ยวกับมูทูเดย์</h1>
                <div className='flex flex-col gap-5 mb-[120px]'>
                    <CardAbount />
                    <Accordion
                        title="คำถามที่พบบ่อย"
                        subtitle="Frequently Asked Questions"
                        items={faqData}
                    />
                    <CardContact />
                </div>
            </div>
        </div>
    )
}

export default page