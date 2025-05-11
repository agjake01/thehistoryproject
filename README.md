# The History Project Web

*A custom, scalable web application shell for “The History Project”*

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Installation & Setup](#installation--setup)
5. [Running Locally](#running-locally)
6. [Deployment](#deployment)
7. [Project Structure](#project-structure)
8. [Environment Variables](#environment-variables)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

---

## Project Overview

The History Project Web is the frontend shell for **The History Project**, a subscriber-based platform that allows users to interact with lifelike AI-driven avatars of historical and cultural figures. This repository contains the Next.js web application, implementing the landing page, authentication flow, subscription management, and a protected “/app” area for future avatar interactions.

### Key Features

* Responsive landing page with marketing content
* User registration & login via Auth0
* Subscription management with Stripe
* Protected `/app` route for avatar chat UI placeholder
* CMS-driven ‘Explore’ section for historical and cultural content

---

## Tech Stack

* **Framework:** Next.js (App Router) with React & TypeScript
* **Styling:** Tailwind CSS
* **Authentication:** Auth0
* **Payments:** Stripe API
* **Hosting:** Vercel (frontend), AWS ECS/Fargate (future backend)
* **Version Control:** Git & GitHub
* **CI/CD:** GitHub Actions → Vercel

---

## Prerequisites

* Node.js (≥18.x)
* npm or yarn
* Git
* Auth0 account & application
* Stripe account
* Vercel account

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:<your-username>/thehistoryproject-web.git
   cd thehistoryproject-web
   ```
2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables**

   * Copy `.env.example` to `.env.local`
   * Fill in your Auth0 and Stripe credentials (see [Environment Variables](#environment-variables))

---

## Running Locally

* **Development Server**

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  Visit `http://localhost:3000` in your browser.

* **Production Build**

  ```bash
  npm run build
  npm start
  # or
  yarn build && yarn start
  ```

---

## Deployment

This project is configured for seamless deployment to Vercel:

1. Connect your GitHub repo in Vercel.
2. Vercel will automatically detect the Next.js framework.
3. Configure environment variables in the Vercel dashboard.
4. Deploy — every push to `main` triggers a new build.

---

## Project Structure

```
thehistoryproject-web/
├── src/
│   ├── app/             # App Router pages & layouts
│   ├── components/      # Reusable React components
│   ├── styles/          # Global & Tailwind styles
│   ├── utils/           # Helper functions & services
│   └── types/           # TypeScript declarations
├── public/              # Static assets
├── .env.example         # Template for environment variables
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Dependencies & scripts
└── README.md            # Project overview and instructions
```

---

## Environment Variables

Create a `.env.local` file in the root and set the following:

```bash
# Auth0
NEXT_PUBLIC_AUTH0_DOMAIN=your-auth0-domain
NEXT_PUBLIC_AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
AUTH0_ISSUER_BASE_URL=https://your-auth0-domain

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add awesome feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure that code is properly formatted and passes linting checks.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

Project Maintainer – Jacob Voigt
GitHub: [@](https://github.com/your-username)agjake01
