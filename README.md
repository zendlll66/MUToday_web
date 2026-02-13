This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SHARE_TEXT` | ข้อความ default ตอนแชร์ (ใช้ใน LINE, WhatsApp ฯลฯ) |
| `NEXT_PUBLIC_SHARE_URL` | URL หลักของแอป (fallback เมื่อไม่มี window) |
| `NEXT_PUBLIC_FB_APP_ID` | Facebook App ID สำหรับแชร์ผ่าน Messenger |
| `NEXT_PUBLIC_OG_IMAGE` | URL รูปสำหรับแชร์ (Open Graph / Twitter Card) — ต้องเป็น **PNG หรือ JPEG** (โซเชียลไม่ใช้ SVG) แนะนำขนาด 1200×630 px |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | (เลือกใช้) Google Analytics 4 Measurement ID สำหรับติดตามการใช้งาน |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | (เลือกใช้) รหัสยืนยันตัวตนจาก Google Search Console สำหรับการ index และดูสถิติ SEO |

**หมายเหตุ:** ถ้าไม่ตั้ง `NEXT_PUBLIC_OG_IMAGE` จะใช้ `/icons/og-logo.png` — ควรมีไฟล์ `public/icons/og-logo.png` (โลโก้เป็น PNG) เพื่อให้แชร์ขึ้นรูปโลโก้ ไม่ใช่รูป banner จากหน้า

ตัวอย่าง `.env`:

```
NEXT_PUBLIC_SHARE_TEXT=คลับสายมู แชร์โพสต์ ทำนาย ดวง ฮวงจุ้ย และความเชื่อ
NEXT_PUBLIC_SHARE_URL=https://mu-today-web.vercel.app
NEXT_PUBLIC_FB_APP_ID=87741124305
NEXT_PUBLIC_OG_IMAGE=https://mutoday.com/icons/og-logo.png
# SEO (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
