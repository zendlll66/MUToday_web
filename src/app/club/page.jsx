
import React from 'react'
import ClubContentClient from '@/features/clubs/components/ClubContentClient'
import SearchBar from '@/components/ui/SearchBar'
import TopicList from '@/features/clubs/components/TopicList'

export const metadata = {
  title: 'คลับสายมู | Mutoday - ชุมชนสายมู',
  description: 'ชุมชนสายมู แชร์โพสต์ ทำนาย ดวง ฮวงจุ้ย และความเชื่อ',
}

const page = () => {
  const dataMock = {
    "data": {
      "feedPublicV2": {
        "data": {
          "posts": [
            {
              "id": "e2c4bb60-a319-402a-85c9-ce061dd6f332",
              "isOwner": false,
              "typeImg": false,
              "postDetail": "#ตี่จั้งอ๊วง\n#地藏王\"\n#พระกษิติครรภ์\"\n#เทพแห่งยมโลก\"\n#ดวงวิญญาณ\"\n#กวนอิม\n#เจ้าแม่กวนอิม\"\n#พระโพธิสัตว์\"\n#Quan Yin\"\n#Kuan Yin\"\n#เมตตา\"",
              "createdAt": "3 ชั่วโมงที่แล้ว",
              "countLike": "1",
              "countComment": "0",
              "hashTag": [
                "ตี่จั้งอ๊วง",
                "พระกษิติครรภ์",
                "เทพแห่งยมโลก",
                "ดวงวิญญาณ",
                "กวนอิม",
                "เจ้าแม่กวนอิม",
                "พระโพธิสัตว์",
                "Quan",
                "Kuan",
                "เมตตา"
              ],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [],
              "backgroundImage": {
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black01.webp",
                "textColor": "#000000"
              },
              "user": {
                "id": "1b28f479-3526-4498-bbd3-230844a6cd4a",
                "displayName": "fff",
                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
              }
            },
            {
              "id": "fdc36d62-b806-4175-aea1-8ccef3ed18f7",
              "isOwner": false,
              "typeImg": false,
              "postDetail": "#กวนอู",
              "createdAt": "3 ชั่วโมงที่แล้ว",
              "countLike": "1",
              "countComment": "0",
              "hashTag": [
                "กวนอู"
              ],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [],
              "backgroundImage": {
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black01.webp",
                "textColor": "#000000"
              },
              "user": {
                "id": "1b28f479-3526-4498-bbd3-230844a6cd4a",
                "displayName": "fff",
                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
              }
            },
            {
              "id": "7cd94258-dbe8-48b6-ad52-52bbd686e73a",
              "isOwner": false,
              "typeImg": false,
              "postDetail": "กวนอู",
              "createdAt": "3 ชั่วโมงที่แล้ว",
              "countLike": "0",
              "countComment": "0",
              "hashTag": [],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [],
              "backgroundImage": {
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black01.webp",
                "textColor": "#000000"
              },
              "user": {
                "id": "1b28f479-3526-4498-bbd3-230844a6cd4a",
                "displayName": "fff",
                "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
              }
            },
            {
              "id": "2f745e76-4fb7-4df5-9f1e-f6d390deb147",
              "isOwner": false,
              "typeImg": true,
              "postDetail": "",
              "createdAt": "3 ชั่วโมงที่แล้ว",
              "countLike": "0",
              "countComment": "0",
              "hashTag": [],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [
                {
                  "id": "d3a53ec1-bd4d-4bad-919c-46ebd173a7a1",
                  "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769067267419-231387623/original.png",
                  "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769067267419-231387623/thumbnail.webp"
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
              "id": "ece47b5d-7997-48bf-a740-a961c7e8b4ac",
              "isOwner": false,
              "typeImg": true,
              "postDetail": "",
              "createdAt": "4 ชั่วโมงที่แล้ว",
              "countLike": "0",
              "countComment": "0",
              "hashTag": [],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [
                {
                  "id": "427492ee-8b70-4592-b905-d17b58af582b",
                  "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065618835-936328760/original.jpg",
                  "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065618835-936328760/thumbnail.webp"
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
              "id": "bba7dc57-f443-4ddf-ac3a-91cfb60eace6",
              "isOwner": false,
              "typeImg": true,
              "postDetail": "",
              "createdAt": "4 ชั่วโมงที่แล้ว",
              "countLike": "0",
              "countComment": "1",
              "hashTag": [],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [
                {
                  "id": "c5c8646e-0137-4000-b9e1-9fc0130b6704",
                  "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065316891-186959357/original.png",
                  "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065316891-186959357/thumbnail.webp"
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
              "id": "7258b175-5ab8-46e7-ab0f-2f181a0ab81b",
              "isOwner": false,
              "typeImg": true,
              "postDetail": "",
              "createdAt": "4 ชั่วโมงที่แล้ว",
              "countLike": "0",
              "countComment": "0",
              "hashTag": [],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [
                {
                  "id": "786cc991-6ca4-4794-aff9-059def05f89e",
                  "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065272471-50925980/original.jpg",
                  "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065272471-50925980/thumbnail.webp"
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
              "id": "51a27e64-1038-4bcc-b03d-c505a135f66e",
              "isOwner": false,
              "typeImg": true,
              "postDetail": "",
              "createdAt": "4 ชั่วโมงที่แล้ว",
              "countLike": "0",
              "countComment": "0",
              "hashTag": [],
              "address": "",
              "lat": "",
              "lng": "",
              "liked": false,
              "images": [
                {
                  "id": "ad9010ee-115c-4b91-9d6a-a75e19830b14",
                  "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065250422-51104328/original.jpg",
                  "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769065250422-51104328/thumbnail.webp"
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
              "id": "bb17505a-9225-48a5-89d0-7ab15857b580",
              "isOwner": false,
              "typeImg": true,
              "postDetail": "",
              "createdAt": "4 ชั่วโมงที่แล้ว",
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
              "createdAt": "4 ชั่วโมงที่แล้ว",
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
            }
          ],
          "meta": {
            "limit": 2,
            "nextCursor": "2026-01-22T07:54:48.488Z",
            "hasNextPage": true
          }
        }
      }
    }
  }
  return (
    <div className='w-full max-w-[810px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-black min-h-screen bg-gray-50/50'>
      <div className='flex flex-col items-center justify-center mb-6'>
        <h1 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-4'>
          คลับสายมู
        </h1>
        <SearchBar
          placeholder='ค้นหาโพสต์ แฮชแท็ก หรือสมาชิก...'
          className='max-w-[810px]'
        />
      </div>  
      <TopicList />
      <ClubContentClient data={dataMock} />
    </div>     
  )
}

export default page