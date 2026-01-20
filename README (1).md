# Academic Portfolio

A secure, version-controlled academic portfolio built with Next.js, Auth.js, and GitHub-backed data storage.

## Features

- **Public Read-Only View**: Projects, Hackathons, and Timeline pages.
- **Admin Dashboard**: Restricted to a single GitHub user.
- **Data Integrity**: All data is stored as JSON in `data/`, committed to the repo.
- **Append-Only**: New entries are added without deleting history (unless manually reverted via Git).

## Setup & configuration

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Variables**:
    Create `.env.local` in the root:
    ```env
    # GitHub OAuth Application
    AUTH_SECRET="generated_secret_here" # run `npx auth secret` to generate
    AUTH_GITHUB_ID="your_github_client_id"
    AUTH_GITHUB_SECRET="your_github_client_secret"
    
    # Authorized Admin
    ADMIN_GITHUB_USERNAME="your_github_username"
    ```
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Adding Content

You can add content via the Admin Dashboard (`/admin`).
Alternatively, you can manually edit the JSON files in `data/`.

## Deployment (Vercel)

1.  Push code to GitHub.
2.  Import project into Vercel.
3.  Add the Environment Variables in Vercel settings.
4.  **Important**: Since this project writes to the filesystem (`data/`), Vercel's ephemeral filesystem means changes made via the Admin UI **will not persist** permanently in a standard serverless deployment *unless* you use a Vercel Blob or similar adapter. 
    *However*, for the requested "Git-backed" approach, the ideal flow is:
    - **Local Editing**: Run locally, add entries (writes to `data/`), commit and push.
    - **Production Editing**: The current setup writes to the local container. To make it persistent on Vercel, you would typically need a DB or commit-back-to-repo workflow (using GitHub API).
    
    *Current Implementation*: Writes to local JSON files. Perfect for local content management + static build.
