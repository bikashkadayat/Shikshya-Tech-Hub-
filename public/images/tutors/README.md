# Tutor photos

Adding a tutor photo is **two steps** — no component or page code changes.

1. Save the photo here:

   ```text
   public/images/tutors/<slug>.jpg   →   served at   /images/tutors/<slug>.jpg
   ```

2. Point that tutor's entry in `src/data/tutors.ts` at it:

   ```ts
   profileImage: '/images/tutors/<slug>.jpg',
   ```

The slug is the tutor's `slug` field. The photo then appears on their card
(`/tutors`, home page preview) and on their full profile automatically.

## Current tutors

All six published tutors have a photo in place, stored as WebP:

| Tutor           | File                   | `profileImage`                        |
| --------------- | ---------------------- | ------------------------------------- |
| Bikash Kadayat  | `bikash-kadayat.webp`  | `/images/tutors/bikash-kadayat.webp`  |
| Anuz Kunwar     | `anuz-kunwar.webp`     | `/images/tutors/anuz-kunwar.webp`     |
| Prabin Rokaya   | `prabin-rokaya.webp`   | `/images/tutors/prabin-rokaya.webp`   |
| Kabir Chand     | `kabir-chand.webp`     | `/images/tutors/kabir-chand.webp`     |
| Ramesh Tamata   | `ramesh-tamata.webp`   | `/images/tutors/ramesh-tamata.webp`   |
| Chhatra Kadayat | `chhatra-kadayat.webp` | `/images/tutors/chhatra-kadayat.webp` |

Replacing one is the same two steps: overwrite the file (or add a new one and
point `profileImage` at it).

## Image guidelines

- **Square, 1:1.** The avatar uses `object-fit: cover` with
  `object-position: center top`, so a head-and-shoulders crop looks best.
  Override the anchor per tutor with `imagePosition: 'center 30%'` if a
  particular photo needs it.
- **800 × 800 px** is plenty — larger only adds page weight.
- **JPEG** for photographs. Keep each file under ~250 KB.
- A different extension is fine — just write the real filename into
  `profileImage` (e.g. `/images/tutors/someone.png`).

## If a photo is missing or fails to load

Nothing breaks. `src/components/tutors/TutorAvatar.tsx` falls back to the
tutor's initials on their brand gradient tile, at exactly the same size, radius
and shadow, so card height and alignment are unchanged. That covers a missing
file, an empty or `null` `profileImage`, and a wrong path.

## After adding files

- `npm run dev` — just refresh the browser.
- Production — run `npm run build` so the files are copied into `out/`.
