import CardAbount from '@/features/about/components/CardAbount'
import CardContact from '@/features/about/components/CardContact'
import Accordion from '@/components/ui/Accordion'

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
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-medium text-black mt-[88px]'>เกี่ยวกับมูทูเดย์</h1>
            <CardAbount />
            <Accordion
                title="คำถามที่พบบ่อย"
                subtitle="Frequently Asked Questions"
                items={faqData}
            />
            <CardContact />
        </div>
    )
}

export default page