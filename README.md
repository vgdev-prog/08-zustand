# NoteHub

A note-taking application built with Next.js featuring SSR/CSR architecture and TanStack Query state management.

## Features

- Create, view, search, and delete notes
- Server-side rendering with client-side interactivity
- Real-time search with pagination
- Responsive design with CSS Modules

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- TanStack Query
- Axios
- CSS Modules

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone and install
```bash
git clone <repository-url>
cd 06-notehub-nextjs
npm install
```

2. Environment setup
```bash
# Create .env.local
NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token
```

3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Pages and routes
├── components/           # Reusable components  
├── lib/                  # API services
├── types/                # TypeScript definitions
└── constants/            # Configuration
```

## Scripts

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

## API Endpoints

- `GET /notes` - List notes with search/pagination
- `POST /notes` - Create note
- `GET /notes/:id` - Get note details
- `DELETE /notes/:id` - Delete note

