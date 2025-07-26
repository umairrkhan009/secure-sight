# 🔐 Secure Sight

**Secure Sight** is a CCTV monitoring software where you can connect upto 3 CCTV feeds — computer vision models help detect certain activity on the feeds (e.g. unauthorised access, gun threats, etc). Reviewers can inspect incidents and mark them as resolved via an intuitive UI.

> 🚧 This project is a part of an internship assignment.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- PostgreSQL (local or cloud)
- `.env` file with your database credentials (PostgreSQL)

### Install Dependencies

```bash
npm install
```

### Set Up the Database

- Create a PostgreSQL database (locally or on a cloud provider like Supabase/Neon).

- Add your connection string to a .env file:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/securesight"
```

- Generate and push schema:

```bash
npx prisma generate
npx prisma db push
```

- (Optional) Seed dummy incident data:

```bash
npx tsx prisma/seed.ts
```

### Run the App

```bash
npm run dev
```

Visit http://localhost:3000

### ⚙️ Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Frontend       | Next.js 15 (App Router) |
| Styling        | Tailwind CSS            |
| ORM            | Prisma                  |
| Database       | PostgreSQL              |
| Image Handling | `next/image`            |

### Core Features

- Incident feed with camera thumbnails

- Incident detail view with resolve button

- Optimistic UI for marking resolved incidents

- Icons for different incident types (e.g. face recognized, unauthorized access)

### If I Had More Time...

- Add interactive timeline

- Integrate 3D model (React Three Fiber)

- Improve mobile responsiveness

- Add authentication and access control

- Unit tests and error boundaries

- Real-time updates via WebSocket

### Project Structure

```bash

/prisma
    schema.prisma
    seed.ts
/public

/src
    /app
        /api
            /incidents
                route.ts
        /[id]
            /resolve
                route.ts
    layout.tsx
    page.tsx

/components
  CameraStrip.tsx
  IncidentItem.tsx

  ...

/lib
  prisma.ts
```
