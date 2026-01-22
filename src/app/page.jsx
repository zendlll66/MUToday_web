"use client"
import React from 'react'
import PostCard from '@/features/feed/components/PostCard'
const HomePage = () => {

    //   const mockFeedData = {
    //     "data": {
    //         "feed": {
    //             "data": {
    //                 "posts": [
    //                     {
    //                         "id": "5b5242d0-51dd-4899-af3e-6e3c42199b30",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "saaa",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร",
    //                         "lat": "13.7432833",
    //                         "lng": "100.5663036",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/white/bg_white01.webp",
    //                             "textColor": "#FFFFFF"
    //                         },
    //                         "user": {
    //                             "id": "59f72d9d-f138-4c0b-b466-b6ba01a7f117",
    //                             "displayName": "TUM ZOZL",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "8cd7960c-31a0-4417-b7d2-f99beb57f249",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "888",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black07.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
    //                             "displayName": "wewo",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "a7c57684-0318-4c90-9344-ff968bd9a3a4",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "67766666",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black02.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "a5727803-2304-4f1b-a885-28346e4942f1",
    //                             "displayName": "พภพภ",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "d9e5905d-d9aa-45f9-9e27-044c56aa53bc",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "66666",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black01.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
    //                             "displayName": "wewo",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "7822a688-74c3-40d6-afb8-f9fed00353bf",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "555555",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black02.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
    //                             "displayName": "wewo",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "bea318c9-332a-436a-b6b2-52e6f419cdb5",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "ssddf4",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black01.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "e6a2975c-cddf-4e73-892c-ea04d2f374e5",
    //                             "displayName": "wewo",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "69227544-af98-48a6-b43b-8e8919c10beb",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "dggff3",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black02.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "a5727803-2304-4f1b-a885-28346e4942f1",
    //                             "displayName": "พภพภ",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "ceef54c7-62ff-4888-9e48-e0104df53959",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "2",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/white/bg_white03.webp",
    //                             "textColor": "#FFFFFF"
    //                         },
    //                         "user": {
    //                             "id": "a5727803-2304-4f1b-a885-28346e4942f1",
    //                             "displayName": "พภพภ",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "9b2f002f-182e-4785-ae5e-ac02d55912e9",
    //                         "isOwner": false,
    //                         "typeImg": false,
    //                         "postDetail": "testtttttt1",
    //                         "createdAt": "1 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [],
    //                         "backgroundImage": {
    //                             "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/black/bg_black01.webp",
    //                             "textColor": "#000000"
    //                         },
    //                         "user": {
    //                             "id": "a5727803-2304-4f1b-a885-28346e4942f1",
    //                             "displayName": "พภพภ",
    //                             "imgProfile": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp"
    //                         }
    //                     },
    //                     {
    //                         "id": "e5e38c14-a2ed-4ad3-b2e3-40c5a71ba1be",
    //                         "isOwner": true,
    //                         "typeImg": true,
    //                         "postDetail": "🪔🕯️🧯",
    //                         "createdAt": "18 ชั่วโมงที่แล้ว",
    //                         "countLike": "0",
    //                         "countComment": "0",
    //                         "hashTag": [],
    //                         "address": "",
    //                         "lat": "",
    //                         "lng": "",
    //                         "liked": false,
    //                         "images": [
    //                             {
    //                                 "id": "f3b37f95-b6f5-47a5-a0a3-41b94e3dcb86",
    //                                 "img": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/c4414c8a-2352-4705-acc9-810fc98a6be8/post/1768927641988-867305058/original.jpg",
    //                                 "thumbnail": "https://pub-84690884fe94462e83399faa03011cbe.r2.dev/c4414c8a-2352-4705-acc9-810fc98a6be8/post/1768927641988-867305058/thumbnail.webp"
    //                             }
    //                         ],
    //                         "backgroundImage": {
    //                             "img": "",
    //                             "textColor": ""
    //                         },
    //                         "user": {
    //                             "id": "c4414c8a-2352-4705-acc9-810fc98a6be8",
    //                             "displayName": "เต้ยกะอัน and the gang",
    //                             "imgProfile": "https://mu-dev-storage.s3.ap-southeast-7.amazonaws.com/mutoday-comunity/c4414c8a-2352-4705-acc9-810fc98a6be8/profile/avatar_1765870877696/original.jpg"
    //                         }
    //                     }
    //                 ],
    //                 "meta": {
    //                     "limit": 10,
    //                     "nextCursor": "2026-01-21T11:02:09.422Z",
    //                     "hasNextPage": true
    //                 }
    //             }
    //         }
    //     }
    // }

    // useEffect(() => {
    //   const fetchFeed = async () => {
    //     const res = await PostsService.getPosts();
    //     console.log(res);
    //   }
    //   fetchFeed();    
    // }, []);


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
    return (
        <>
            <div className='w-full min-h-screen flex flex-col items-center py-4'>
                {mockFeedData.data.feed.data.posts.map((post, index) => (
                    <PostCard key={post.id} data={{ ...post, isFirstPost: index === 0 }} />
                ))}
            </div>
        </>
    )
}

export default HomePage