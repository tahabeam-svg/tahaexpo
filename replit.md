# Dunes Gate - Premium Event Venue Website

## Overview
Dunes Gate is a luxury event venue website for a premier destination in Riyadh, Saudi Arabia. The site features a dark, elegant design with gold accents and desert-inspired aesthetics.

## Tech Stack
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Data Fetching**: TanStack React Query
- **UI Components**: Shadcn/UI

## Pages
1. **Home** (`/`) - Hero with parallax using official hero image, features grid, about preview, stats
2. **About** (`/about`) - Vision & Mission (official text), Chairman (HRH Prince Meshhour with official photo), Board Members (Mr. Youssef & Mr. Mohannad with official photos), Management Team (Mr. Hadi & Mr. Abdullah)
3. **The Venue** (`/venue`) - Active venue with official aerial view, 3D canvas placeholder, venue stats, future venue (text-only placeholder), event categories, location section with official map
4. **Showcase** (`/showcase`) - Event type cards with descriptions and highlights (text-only, no fabricated images per media policy)
5. **Contact** (`/contact`) - Contact form with validation, email, social links

## Design System
- **Color Palette**: Gold (#C6A75E), Dark Sand (#8A6B3F), Deep Brown (#3A2E1F), Off White (#F5F1E8), Charcoal (#1A1A1A)
- **Typography**: Playfair Display (serif headings), Inter (body text)
- **Theme**: Dark mode by default with luxury desert aesthetics

## Key Components
- `client/src/components/navbar.tsx` - Sticky transparent navbar that turns solid on scroll
- `client/src/components/footer.tsx` - Footer with links and social icons
- `client/src/components/contact-section.tsx` - Reusable contact CTA section (appears on all pages)

## API Endpoints
- `POST /api/contact` - Submit contact form message

## Official Assets (from PPT extraction)
Located in `client/public/assets/official/`:
- `chairman.png` - HRH Prince Meshhour bin Talal bin Abdulaziz Al Saud
- `board-member-youssef.png` - Mr. Youssef Ibrahim Hamidaddin
- `board-member-mohannad.png` - Mr. Mohannad Atif Saleh
- `aerial-view.png` - Venue aerial/3D render
- `location-map.png` - Riyadh location map
- `cover-background.png` - Cover slide desert artwork
- `logo.png` - Dunes Gate logo
- `floorplan.emf` - Floor plan (vector format)

## Other Assets
- Hero image: `attached_assets/HOME-PAGE_1772052244464.png` (via @assets alias)
- Logo: `attached_assets/image_1772052503241.png` (via @assets alias)

## Media Policy
- Only official images from the PPT brochure are used
- No AI-generated, placeholder, or stock images
- Sections without official images display text-only layouts

## Storage
- In-memory storage for contact messages (MemStorage)
- Schema defined in `shared/schema.ts` with contactMessages table
