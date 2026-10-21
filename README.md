# ⚡ reautoconnect — EV Assistance & Roadside Service Platform

A modern, responsive web application and real-time roadside assistance platform for Electric Vehicles (EVs) in India. Built with **vanilla modern web standards**, backed by **Supabase (PostgreSQL, Auth & Realtime)**, and ready for instant deployment on **Vercel**.

---

## 🌟 Key Features

- **24/7 EV Emergency Roadside Dispatch:** Request immediate roadside assistance for battery breakdown, charging connector failure, tyre punctures, or motor issues with GPS dispatch.
- **Doorstep EV Servicing & Diagnostics:** Transparent pricing for battery & BMS scans, periodic health checks, and controller diagnostics.
- **EV Flatbed Recovery & Towing:** Dedicated towing dispatch specifically designed for permanent-magnet EVs without damaging drive motors.
- **EV Charging Stations Explorer:** Embedded interactive Google Maps station finder for fast chargers and battery swapping hubs.
- **Live Technician Tracking & Dispatch Route:** Real-time route visualization, ETA ticker, and progressive job state updates (*Finding Technician → Technician Assigned → On The Way → Arrived → Completed*).
- **Technician Workspace Portal:** Dedicated view for verified technicians to accept/decline incoming customer dispatches within a 30s countdown window and update real-time arrival status.
- **Supabase Backend:** PostgreSQL database with Row Level Security (RLS), full Auth (Email/Password & Google OAuth), and Supabase Realtime channel subscriptions.
- **Instant Vercel Deployment:** Zero build steps required; production-ready with preconfigured `vercel.json` headers and caching rules.

---

## 📁 Project Structure

```text
├── index.html            # Main Single-Page Web App (Responsive, Mobile-First UI)
├── supabase-schema.sql   # Supabase SQL script (Tables, Triggers, RLS, Realtime)
├── supabase-config.js    # Supabase credentials loader & dynamic storage
├── vercel.json           # Vercel hosting rules, clean URLs, security headers
├── .env.example          # Environment variables template
├── server.ps1            # Zero-dependency local development server (PowerShell)
├── run_website.bat       # 1-click Windows launcher
└── README.md             # Complete setup & deployment guide
```

---

## 🚀 Part 1: Supabase Backend Setup (5 Minutes)

### 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign in (or create a free account).
2. Click **"New Project"**, pick an organization, enter a name (e.g. `reautoconnect`), set a database password, and select your preferred region (e.g. `Mumbai (ap-south-1)`).
3. Wait 1-2 minutes for your database to initialize.

### 2. Execute the Database Schema
1. In your Supabase Dashboard, click on **SQL Editor** (icon `>_` on the left sidebar).
2. Click **"New query"**.
3. Open `supabase-schema.sql` from this repository, copy all contents, paste it into the editor, and click **"Run"**.
4. This automatically sets up:
   - `profiles` table (connected to Supabase Auth users)
   - `vehicles` table (EV specifications, battery levels)
   - `technicians` table (verified specialists & online status)
   - `service_requests` table (customer dispatches & job progress)
   - Row Level Security (RLS) policies
   - Automated `updated_at` triggers
   - Supabase Realtime publication on `service_requests`

### 3. Obtain API Keys
1. In Supabase, go to **Project Settings** (gear icon) → **API**.
2. Copy:
   - **Project URL** (e.g. `https://your-project-id.supabase.co`)
   - **anon public Key** (e.g. `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### 4. Connect to reautoconnect
You have two easy ways to plug in your keys:

- **Option A (Interactive In-App):**
  Launch the website, click the gold **"Demo Mode (Connect)"** badge in the top-right header, paste your Project URL and Anon Key, and click **"Save & Connect"**. The app immediately verifies the connection!
- **Option B (Configuration File):**
  Open `supabase-config.js` and paste your URL and anon key into `defaultSupabaseConfig`.

---

## 🌐 Part 2: Hosting on Vercel

### Method 1: Deploy with GitHub (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for reautoconnect"
   git remote add origin https://github.com/YOUR_USERNAME/reautoconnect.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** → **"Project"** and import your GitHub repository.
4. Leave **Framework Preset** as **"Other"** (Root Directory `./`).
5. (Optional) Add your Supabase keys under **Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://your-project-id.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGci...`
6. Click **"Deploy"**. Your site is live on a free `*.vercel.app` domain in seconds!

### Method 2: Deploy using Vercel CLI
If you have Vercel CLI installed:
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your local directory to Vercel production:
```bash
npx vercel --prod
```

### Method 3: Drag & Drop via Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new).
2. If using the Vercel Deploy drag & drop panel, upload the project directory directly.

---

## 💻 Part 3: Running Locally

You do not need Node.js or any external package managers installed to run this project!

- **On Windows:** Double-click `run_website.bat` or run in PowerShell:
  ```powershell
  .\server.ps1
  ```
  This starts an HTTP server at `http://localhost:8080/` and opens your browser automatically.

---

## 📱 Mobile & PWA Ready
The UI is mobile-first, designed for responsive touch devices with iOS & Android safe-area-inset support, fluid gestures, and instant feedback.
