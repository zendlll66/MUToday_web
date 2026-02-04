"use client"
import React from 'react'
import PostCard from '@/features/feed/components/PostCard'
import { useRouter } from 'next/navigation'
import Banner from '@/components/ui/Banner'
import SectionIcons from '@/components/ui/SectionIcons'



const HomePage = () => {
    const router = useRouter()
    const mockFeedData = {
        "data": {
            "feed": {
                "data": {
                    "posts": [
                        {
                            "id": "bb17505a-9225-48a5-89d0-7ab15857b580",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "",
                            "createdAt": "1 นาทีที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "bc7c2b3a-ba97-4354-9698-93530eaac593",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064584236-425427696/original.jpg",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064584236-425427696/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "150617a1-b65b-4fc0-9deb-c9df463e9b28",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "พระทัมใจไม่ได้",
                            "createdAt": "2 นาทีที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "f1bb9fd8-26d0-42fd-a455-3cc5233dadaa",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064533622-715224131/original.jpg",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064533622-715224131/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "2cbd8463-9046-474f-bf37-33cb01fde098",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": ".\nเข้าวงการน้ำมันมะกอกวันแรก\n.\n.\n.\n#เริ่ม!!",
                            "createdAt": "1 ชั่วโมงที่แล้ว",
                            "countLike": "2",
                            "countComment": "6",
                            "hashTag": [
                                "เริ่ม"
                            ],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "7787f82d-bc2d-4635-938c-158471065a6e",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e/post/1769060911442-777332441/original.jpg",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e/post/1769060911442-777332441/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e",
                                "displayName": "jackie",
                                "imgProfile": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e/profile/avatar_1768325338309/original.jpg"
                            }
                        },
                        {
                            "id": "e943f008-5d00-493e-8d4f-42fe6290e873",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": ".\nโพสด้วย #iphone999UltraMaxPlus",
                            "createdAt": "1 ชั่วโมงที่แล้ว",
                            "countLike": "1",
                            "countComment": "1",
                            "hashTag": [
                                "iphone999UltraMaxPlus"
                            ],
                            "address": "ตลาดสมบัติบุรี",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "bb020816-19d3-438c-8004-d6742771647f",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/5f0c9885-4a35-470c-bcb4-a630f85bba4f/post/1769060828435-499065744/original.gif",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/5f0c9885-4a35-470c-bcb4-a630f85bba4f/post/1769060828435-499065744/original.gif"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "5f0c9885-4a35-470c-bcb4-a630f85bba4f",
                                "displayName": "Jackieไอโอเอส",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "e924cb64-5851-48c0-aac2-d8e6595aae2d",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "",
                            "createdAt": "1 ชั่วโมงที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "4497621d-ff4e-4c09-800e-2416742f3c27",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769058155589-55327500/original.png",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769058155589-55327500/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "9aa37c16-0c31-4dac-8e3b-c1e52a3a4fa9",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "",
                            "createdAt": "1 ชั่วโมงที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "2ca29d88-e2bb-4e89-b4b0-637e24f5ba97",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057722818-838092669/original.jpg",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057722818-838092669/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "cce431ab-4fcd-4817-a13e-152fa1022f28",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "#พระกษิติครรภ์",
                            "createdAt": "1 ชั่วโมงที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [
                                "พระกษิติครรภ์"
                            ],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "ab74d919-1c2f-4a77-80f4-31e276215c05",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057579584-775894192/original.png",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057579584-775894192/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "681a8025-95e2-4d6e-ac92-323af43013b3",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "",
                            "createdAt": "2 ชั่วโมงที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "4ff0d8ca-b210-446e-8dd0-e32d328da80d",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057460207-935367349/original.jpg",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057460207-935367349/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "58f48425-e8d2-4e7e-9732-6631a6799e5d",
                            "isOwner": false,
                            "typeImg": true,
                            "postDetail": "",
                            "createdAt": "2 ชั่วโมงที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "",
                            "lat": "",
                            "lng": "",
                            "liked": false,
                            "images": [
                                {
                                    "id": "9eec3e92-93b6-45e1-96e4-a67d24de198a",
                                    "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057253804-202984663/original.png",
                                    "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769057253804-202984663/thumbnail.webp"
                                }
                            ],
                            "backgroundImage": {
                                "img": "",
                                "textColor": ""
                            },
                            "user": {
                                "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                                "displayName": "พภพภ",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                            }
                        },
                        {
                            "id": "5b5242d0-51dd-4899-af3e-6e3c42199b30",
                            "isOwner": false,
                            "typeImg": false,
                            "postDetail": "saaa",
                            "createdAt": "20 ชั่วโมงที่แล้ว",
                            "countLike": "0",
                            "countComment": "0",
                            "hashTag": [],
                            "address": "มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร",
                            "lat": "13.7432833",
                            "lng": "100.5663036",
                            "liked": false,
                            "images": [],
                            "backgroundImage": {
                                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/white/bg_white01.webp",
                                "textColor": "#FFFFFF"
                            },
                            "user": {
                                "id": "59f72d9d-f138-4c0b-b466-b6ba01a7f117",
                                "displayName": "TUM ZOZL",
                                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
                            }
                        }
                    ],
                    "meta": {
                        "limit": 10,
                        "nextCursor": "2026-01-22T06:51:22.051Z",
                        "hasNextPage": true
                    }
                }
            }
        }
    }

    const mockBannerData = {
        "status": 200,
        "success": true,
        "message": "Success",
        "data": [
            {
                "id": "1571366b-1f72-4277-9e8a-7c7413c2f916",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/bannerBeforeBuy.webp",
                "link": "https://stg-ticket-mutoday-frontend.mutoday.com/events/690acc16e043308f3d17a24f?a=1&token=019c1a87-050f-7d1e-96eb-4463d4642737"
            },
            {
                "id": "9ef118e9-0ea9-4f1f-b5da-6f2d645ef52e",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/bpBanner.webp",
                "link": ""
            },
            {
                "id": "6d7d99fa-9f07-41fa-aaaf-9b22a8ed26ce",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/gundamBanner.jpg",
                "link": ""
            },
            {
                "id": "fd78e892-2728-4344-abab-6fb55968ed6e",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/mhwBanner.jpg",
                "link": ""
            }
        ]
    }


    const mockSectionIconsData = [
        {
            id: "1",
            label: "ลัคนาราศี",
            icon: "/icons/zodiac-icon.svg", // ต้องมี icon file
            link: "/fortune/zodiac"
        },
        {
            id: "2",
            label: "ไพ่ทาโรต์",
            icon: "/icons/tarot-icon.svg",
            link: "/fortune/tarot"
        },
        {
            id: "3",
            label: "วอลเปเปอร์",
            icon: "/icons/wallpaper-icon.svg",
            link: "/wallpaper"
        },
        {
            id: "4",
            label: "สีเสื้อมงคล",
            icon: "/icons/color-icon.svg",
            link: "/fortune/color"
        }
    ]

    const handlePostDetail = (postId) => {
        router.push(`/post/${postId}`)
    }
    return (
        <>
            <div className='w-full max-w-[810px] mx-auto mt-2'>
                <Banner banners={mockBannerData.data} />
            </div>
            <div className='w-full max-w-[810px] mx-auto px-4 mt-6'>
                <SectionIcons 
                    title="ทำนาย"
                    viewAllLink="/fortune"
                    items={mockSectionIconsData}
                />
            </div>
            <div className='w-full max-w-[400px] min-w-[300px] mx-auto min-h-screen flex flex-col items-center py-4 cursor-pointer'>
                {mockFeedData.data.feed.data.posts.map((post, index) => (
                    <PostCard key={post.id} data={{ ...post, isFirstPost: index === 0 }} handlePostDetail={() => handlePostDetail(post.id)} />
                ))}
            </div>
        </>
    )
}

export default HomePage