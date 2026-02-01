export async function generateMetadata({ params }) {
    const resolved = typeof params?.then === 'function' ? await params : params
    const id = resolved?.id ?? ''
    return {
        title: id ? `โพสต์ | Mutoday` : 'Mutoday',
        description: 'ดูโพสต์จากชุมชน Mutoday - โซเชียลชุมชนคนรักโหราศาสตร์ ดวง ทำนาย และความเชื่อ',
        openGraph: {
            title: id ? `โพสต์ | Mutoday` : 'Mutoday',
            description: 'ดูโพสต์จากชุมชน Mutoday',
        },
    }
}

export default function PostDetailLayout({ children }) {
    return <>{children}</>
}
