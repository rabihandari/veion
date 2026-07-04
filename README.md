# Veion

Marketing website and backend for [veion.net](https://veion.net) — a React single-page site (company info, services, careers, contact) backed by an Express/MongoDB API that handles contact messages, job applications, and quote requests over email.

## Project structure

```
veion/
├── client/     React app (create-react-app + Material-UI)
├── server/     Express API (ES modules, Mongoose, Nodemailer)
├── design/     Design source files (Corel Draw, Photoshop, images)
├── docker-compose.yml               Local/dev compose (builds from source)
└── docker-compose-production.yml    Production compose (pulls prebuilt images)
```

### Client

React 17 app built with `react-scripts`, using Material-UI for components, `react-router-dom` for routing, and `aos`/`react-tsparticles`/`react-responsive-carousel` for page animations and visuals.

Pages: Home, Our Services, Careers, Contact Us, About Us, Get a Quote.

### Server

Express API (ESM) connected to MongoDB via Mongoose. Endpoints under `/api`:

| Route              | Purpose                                              |
| ------------------ | ----------------------------------------------------- |
| `POST /applyJob`    | Accepts a CV upload and emails the job application    |
| `POST /sendMail`    | Sends a contact-us message                            |
| `POST /getQuote`    | Accepts an optional PDF upload and emails a quote request |

Emails are sent through Gmail via Nodemailer using Handlebars templates (`server/templates`). Uploaded files are stored temporarily and deleted after the email is sent.

## Prerequisites

- Node.js 14+
- npm
- MongoDB (local instance, or set `DATABASE_URL` to a remote one)
- A Gmail account for sending mail (App Password recommended)

## Getting started

### 1. Server

```bash
cd server
npm install
```

Create `server/.env`:

```
PORT=5001
DATABASE_URL=mongodb://localhost:27017/veion
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_PASS=your-app-password
FRONTEND_HOST=http://localhost:3000
```

```bash
npm start
```

### 2. Client

```bash
cd client
npm install
```

Create `client/.env`:

```
REACT_APP_HOST_URL=http://localhost:5001
```

```bash
npm start
```

The client runs at `http://localhost:3000` and the API at `http://localhost:5001` by default.

## Docker

Local build (uses `docker-compose.yml`):

```bash
docker-compose up --build
```

Production (uses prebuilt images and TLS certs, requires an external `server_load_balancer` network):

```bash
docker-compose -f docker-compose-production.yml up -d
```

Both compose files expect `server/.env` and `client/.env` to exist. The production compose additionally mounts an nginx config and Let's Encrypt certificates for `veion.net`.

## Available scripts

**Client** (`client/package.json`)
- `npm start` – run the dev server
- `npm run build` – production build
- `npm test` – run tests

**Server** (`server/package.json`)
- `npm start` – run with nodemon (dev)
- `npm run production` – run with `NODE_ENV=production`
