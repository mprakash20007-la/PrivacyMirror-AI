# PrivacyMirror AI Pro — Version 3.0

A polished hackathon MVP for privacy inspection and scam-signal awareness.

## Experience edition — multi-page website
- Full-screen animated landing page inspired by polished product sites, with floating UI cards, orbiting shield, glowing ambient background and scroll sections.
- Separate routes: `/`, `/login`, `/signup`, and `/app` (React Router page navigation).
- Responsive mobile navigation and consistent visual system across landing, auth and workspace.

## What is included
- Responsive black / neon-green React dashboard and animated cyber background.
- Sign-up, sign-in, JWT-protected routes, bcrypt password hashing and MongoDB user storage.
- Sensitive pattern detection: email, phone, UPI-like payment handle, Aadhaar-like 12-digit pattern and credential-like tokens.
- Scam-language indicators: upfront payment, urgency, sensitive identity requests, unusually attractive offers and private-messaging pressure.
- Clear GOOD / BAD verdict with evidence, heuristic risk score and limitations.
- Redacted preview, copy and `.txt` download.
- Optional Gemini explanation using redacted text and indicator categories only.
- Original content is not written to the database or logged by the app.

## Requirements
Node.js 18+ (20+ recommended), npm, MongoDB Atlas or local MongoDB. Gemini API key is optional.

## Install
Open the `privacymirror-ai` folder in VS Code (the folder containing this README and root `package.json`).

```powershell
npm install
npm run install:all
```

## Configure
Copy `server/.env.example` to `server/.env` and fill in your values:

```env
GEMINI_API_KEY=your_new_gemini_key
GEMINI_MODEL=gemini-2.5-flash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_at_least_32_characters
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

For a new JWT secret in PowerShell:
```powershell
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

For MongoDB Atlas, create a database user and add your current public IP under Security → Network Access. If Vite selects port 5174, update `CLIENT_ORIGIN` to `http://localhost:5174` and restart.

Do not commit `.env` or share API keys, passwords or connection strings.

## Run
```powershell
npm run dev
```
Open the exact `Local:` URL printed by Vite, normally http://localhost:5173.

Backend health check:
http://localhost:5000/api/health

## Demo
1. Create an account and sign in.
2. Load scam demo and click Analyze Content.
3. Review BAD verdict, scam signals and sensitive-data findings.
4. Switch to Protected preview, copy or download the redacted file.
5. Load normal demo and analyze again.
6. Request Gemini guidance.

## Important limitations
This is a hackathon prototype, not a certified security or fraud-detection product. The detector uses patterns and keyword rules, so it can miss threats and produce false positives. A GOOD verdict means only that the implemented checks found no supported indicators. The score is a heuristic, not a probability. Aadhaar-like detection does not validate an Aadhaar number. The MVP accepts pasted text and `.txt` uploads only. JWT is stored in browser localStorage; production should use secure HttpOnly cookies, CSRF protections, email verification, password reset, stronger abuse controls and a security review.
