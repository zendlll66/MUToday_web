"use client"
import React from 'react'
import { useEffect } from 'react'
import PostCard from '@/features/feed/components/PostCard'
const HomePage = () => {

  const mockFeedData = {
    "data": {
        "feed": {
            "data": {
                "posts": [
                    {
                        "id": "5b5242d0-51dd-4899-af3e-6e3c42199b30",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "saaa",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
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
                    },
                    {
                        "id": "8cd7960c-31a0-4417-b7d2-f99beb57f249",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "888",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
                        "countLike": "0",
                        "countComment": "0",
                        "hashTag": [],
                        "address": "",
                        "lat": "",
                        "lng": "",
                        "liked": false,
                        "images": [],
                        "backgroundImage": {
                            "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black07.webp",
                            "textColor": "#000000"
                        },
                        "user": {
                            "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
                            "displayName": "wewo",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
                        }
                    },
                    {
                        "id": "a7c57684-0318-4c90-9344-ff968bd9a3a4",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "67766666",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
                        "countLike": "0",
                        "countComment": "0",
                        "hashTag": [],
                        "address": "",
                        "lat": "",
                        "lng": "",
                        "liked": false,
                        "images": [],
                        "backgroundImage": {
                            "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black02.webp",
                            "textColor": "#000000"
                        },
                        "user": {
                            "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                            "displayName": "พภพภ",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                        }
                    },
                    {
                        "id": "d9e5905d-d9aa-45f9-9e27-044c56aa53bc",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "66666",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
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
                            "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
                            "displayName": "wewo",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
                        }
                    },
                    {
                        "id": "7822a688-74c3-40d6-afb8-f9fed00353bf",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "555555",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
                        "countLike": "0",
                        "countComment": "0",
                        "hashTag": [],
                        "address": "",
                        "lat": "",
                        "lng": "",
                        "liked": false,
                        "images": [],
                        "backgroundImage": {
                            "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black02.webp",
                            "textColor": "#000000"
                        },
                        "user": {
                            "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
                            "displayName": "wewo",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
                        }
                    },
                    {
                        "id": "bea318c9-332a-436a-b6b2-52e6f419cdb5",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "ssddf4",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
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
                            "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
                            "displayName": "wewo",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
                        }
                    },
                    {
                        "id": "69227544-af98-48a6-b43b-8e8919c10beb",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "dggff3",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
                        "countLike": "0",
                        "countComment": "0",
                        "hashTag": [],
                        "address": "",
                        "lat": "",
                        "lng": "",
                        "liked": false,
                        "images": [],
                        "backgroundImage": {
                            "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black02.webp",
                            "textColor": "#000000"
                        },
                        "user": {
                            "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                            "displayName": "พภพภ",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                        }
                    },
                    {
                        "id": "ceef54c7-62ff-4888-9e48-e0104df53959",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "2",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
                        "countLike": "0",
                        "countComment": "0",
                        "hashTag": [],
                        "address": "",
                        "lat": "",
                        "lng": "",
                        "liked": false,
                        "images": [],
                        "backgroundImage": {
                            "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/white/bg_white03.webp",
                            "textColor": "#FFFFFF"
                        },
                        "user": {
                            "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                            "displayName": "พภพภ",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                        }
                    },
                    {
                        "id": "9b2f002f-182e-4785-ae5e-ac02d55912e9",
                        "isOwner": false,
                        "typeImg": false,
                        "postDetail": "testtttttt1",
                        "createdAt": "1 ชั่วโมงที่แล้ว",
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
                            "id": "a5727803-2304-4f1b-a885-28346e4942f1",
                            "displayName": "พภพภ",
                            "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
                        }
                    },
                    {
                        "id": "e5e38c14-a2ed-4ad3-b2e3-40c5a71ba1be",
                        "isOwner": true,
                        "typeImg": true,
                        "postDetail": "🪔🕯️🧯",
                        "createdAt": "18 ชั่วโมงที่แล้ว",
                        "countLike": "0",
                        "countComment": "0",
                        "hashTag": [],
                        "address": "",
                        "lat": "",
                        "lng": "",
                        "liked": false,
                        "images": [
                            {
                                "id": "f3b37f95-b6f5-47a5-a0a3-41b94e3dcb86",
                                "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/c4414c8a-2352-4705-acc9-810fc98a6be8/post/1768927641988-867305058/original.jpg",
                                "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/c4414c8a-2352-4705-acc9-810fc98a6be8/post/1768927641988-867305058/thumbnail.webp"
                            }
                        ],
                        "backgroundImage": {
                            "img": "",
                            "textColor": ""
                        },
                        "user": {
                            "id": "c4414c8a-2352-4705-acc9-810fc98a6be8",
                            "displayName": "เต้ยกะอัน and the gang",
                            "imgProfile": "https://mu-dev-storage.s3.ap-southeast-7.amazonaws.com/mutoday-comunity/c4414c8a-2352-4705-acc9-810fc98a6be8/profile/avatar_1765870877696/original.jpg"
                        }
                    }
                ],
                "meta": {
                    "limit": 10,
                    "nextCursor": "2026-01-21T11:02:09.422Z",
                    "hasNextPage": true
                }
            }
        }
    }
}

  // useEffect(() => {
  //   const fetchFeed = async () => {
  //     const res = await PostsService.getPosts();
  //     console.log(res);
  //   }
  //   fetchFeed();    
  // }, []);

  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center py-4'>
        {mockFeedData.data.feed.data.posts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  )
}

export default HomePage