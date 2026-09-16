# Deployment

This repo is prepared for:

- Frontend: GitHub Pages
- Backend: Render Node web service

## Backend on Render

1. Push this repository to GitHub.
2. In Render, create a Blueprint from `render.yaml`.
3. After Render deploys the backend, copy the service URL. It will look like:

```text
https://servify-campus-api.onrender.com
```

The backend exposes `/health` for Render health checks.

## Frontend on GitHub Pages

1. In the GitHub repository, go to `Settings > Pages`.
2. Set `Build and deployment > Source` to `GitHub Actions`.
3. Go to `Settings > Secrets and variables > Actions > Variables`.
4. Add a repository variable named `VITE_API_BASE_URL` with the Render backend URL.
5. Push to `main` or run the workflow manually.

The workflow builds the Vite app with `BASE_PATH` set to the repository name, so it works at:

```text
https://fasasijohn.github.io/Ecommerce-/
```

## Local development

Run the backend:

```bash
cd ecommerce-backend-ai
npm install
npm run dev
```

Run the frontend:

```bash
npm install
npm run dev
```

The Vite dev server still proxies `/api` to `http://localhost:3000`.
