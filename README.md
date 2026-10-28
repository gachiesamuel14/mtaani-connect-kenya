# Mtaani Connect 🇰🇪

Location-based matchmaking website for people in Kenya.

## Core Idea
Users create profiles and match with nearby people using GPS/coordinates or county. Features swipe, like, match, chat (coming), filters for county, distance, age, tribe, interests, religion, lifestyle.

## Current Features (MVP Demo)
- Mock user profiles with Kenyan counties (Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, etc.)
- Swipe-style Like / Pass interface
- Simulated location permission (navigator.geolocation)
- Basic filters (by county)
- Matches list (local)
- Responsive design with local vibes (Sheng mentions, modes)

## Tech Stack
- Frontend: Vanilla HTML/CSS/JS (easy to upgrade to React/Next.js)
- Hosting: Netlify (static)
- Future: Supabase or Firebase for auth, DB, realtime chat, storage; Google Maps or pure geolocation; Daraja for M-Pesa

## How to Deploy to Netlify
1. Connect this GitHub repo to a new Netlify site.
2. Build command: none (static)
3. Publish directory: /
4. Deploy!

Or use Netlify Drop for quick test.

## Next Steps to Full App
1. **Auth**: Supabase Auth or Firebase Auth (email, Google, phone)
2. **Profiles & Photos**: Upload to Supabase Storage / Cloudinary
3. **Location**: Real GPS + Haversine distance calculation; county filters
4. **Matching Algorithm**: Proximity + preferences (age, interests, tribe, religion)
5. **Real-time Chat**: Supabase Realtime or Socket.io
6. **Notifications**: Push or email
7. **Safety**: Report/block system
8. **Premium**: Subscriptions with M-Pesa (Daraja API)
9. **Localization**: Sheng, student/professional/church modes
10. Upgrade to Next.js + Tailwind for better UX

## Localize for Kenya
- Counties: Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, Eldoret, etc.
- M-Pesa ready
- Local languages/Sheng in bios

Live demo will be available after Netlify deploy.

Repo: https://github.com/gachiesamuel14/mtaani-connect-kenya
