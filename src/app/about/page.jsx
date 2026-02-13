import CardAbount from '@/features/about/components/CardAbount'
import CardContact from '@/features/about/components/CardContact'
import Accordion from '@/components/ui/Accordion'
import ConcentricGlow from '@/components/ui/ConcentricGlow'
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
            answer: "ในโลกที่มีแต่ความไม่แน่นอน คนไทยหลายสิบล้านคนยังพึ่ง “การมู” เป็นกำลังใจ แต่ว่าเรากลับไม่มีพื้นที่ที่ปลอดภัย อุ่นใจ และน่าเชื่อถือ “MUToday” จึงเกิดขึ้นเพื่อเป็น จุดเชื่อมของสายมูสู่ชีวิตจริง พื้นที่ที่มีทั้ง โหราศาสตร์ เทคโนโลยี และผู้เชื่ยวชาญ ให้สายมูทั้งหลายได้พบกัน เติบโตไปพร้อมกัน ด้วยเทคโนโลยีที่ทำให้การมูเป็นเรื่อง ง่าย ทันสมัย และสนุก จนกลายเป็นส่วนหนึ่งของชีวิตในทุกวัน",
            initialExpanded: true  // เปิดไว้ตั้งแต่แรก
        },
        {
            id: "faq-2",
            question: "คำทำนายแม่นยำแค่ไหน ?",
            answer: "เราทำนายตามหลักการดั้งเดิมของแต่ละศาสตร์ ซึ่งความแม่นยำจะสอดคล้องกับผู้รับคำทำนายแตกต่างกันไป บางคนอาจจะเห็นว่าการผูกลัคนาในตำรานิรายนะที่อิงตำแหน่งดาวจาก NASA นั้นตรงกว่าสุริยยาตร์ดั้งเดิม บางคนอาจจะชื่นชอบการเปิดไพ่ยิปซีมากกว่า แต่จากผลการสอบถาม ผู้ใช้กว่า 80% ประทับใจ และบอกว่าสอดคล้องกับสิ่งที่พบจริง",
            initialExpanded: false
        },
        {
            id: "faq-3",
            question: "เราควรเชื่อคำทำนายแค่ไหน ?",
            answer: "คำทำนายนั้นเป็นเหมือนแผนที่ หรือดวงดาวส่องทาง บางคนอาจให้ดาวนำทาง บางคนอาจเพียงต้องการภาพรวมคร่าวๆ บางคนอาจไม่สนใจเลยก็ได้ เพราะการตัดสินใจในชีวิตนั้นเป็นของคุณ เรารวมศาสตร์ต่างๆ ไว้ในมูทูเดย์ก็เพื่อให้คุณเลือกตัดสินใจตามศาสตร์ที่เข้ากับคุณมากที่สุด",
            initialExpanded: false
        },
        {
            id: "faq-4",
            question: "มีค่าใช้จ่ายหรือไม่ ?",
            answer: "สามารถเริ่มต้นใช้งานได้ ฟรี ในฟีเจอร์พื้นฐาน เช่น ดวงรายวัน พื้นดวงเบื้องต้น ไพ่ทาโรต์ และบทสวดเสริมดวง ส่วนฟีเจอร์เชิงลึกและคำถามเพิ่มเติมจะใช้เหรียญในระบบ ซึ่งจะมีการแจกฟรีในการสมัครครั้งแรกและในแคมเปญต่างๆ หรือสามารถซื้อเหรียญผ่านแอปได้เลย",
            initialExpanded: false
        }
    ]

    return (
        <div className='relative min-h-screen'>
            {/* Background ด้านบน — เฉพาะพื้นที่ content ขวา nav (md: left-16, lg: left-64) */}
            <div className="fixed top-[-30%] left-0 right-0 md:left-16 lg:left-64 h-[600px] z-0">
                <ConcentricGlow position="top" />
                
            </div>

            {/* Background ด้านล่าง — เฉพาะพื้นที่ content ขวา nav */}
            <div className="fixed bottom-[-30%] left-0 right-0 md:left-16 lg:left-64 h-[600px] z-0">
                <ConcentricGlow position="bottom" />
            </div>

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