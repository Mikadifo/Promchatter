![Logo](https://github.com/Mikadifo/Promchatter/assets/51935560/3268f902-a23f-4202-a3e4-5db0577ed9e2)

# Promchatter

Propmchatter is a web application that will help you create, share and use AI-chat prompts, so you can take advantage and be more productive in this AI era.

## Features

-   Create unique and custom prompts.
-   Share your created prompts with other all over the world.
-   Use others' promtps and get the best results out of AI-chats.
-   Mark prompts as favorites and manage your own prompt with an online account.

## Getting Started

-   First, create and seed a `.env` file with the following:

```
REACT_APP_API_KEY=<your-firebase-api-key>
REACT_APP_AUTH_DOMAIN=<your-firebase-project>.firebaseapp.com
REACT_APP_DATABASE_URL=<your-firebase-db-url>
REACT_APP_PROJECT_ID=<your-firebase-project>
REACT_APP_STORAGE_BUCKET=<your-firebase-project>.appspot.com
REACT_APP_MESSAGING_SENDER_ID=<your-firebase-sender-id>
REACT_APP_APP_ID=<your-firebase-app-id>
# AES Encryption
REACT_APP_SECRET_KEY=<a-hashed-secret-key>
REACT_APP_SECRET_IV=<a-hashed-secret-iv>
REACT_APP_ENCRYPTION_METHOD=aes-256-cbc
REACT_APP_HASHING_METHOD=sha-512
```

-   Install the project dependencies:

```bash
npm install
# or
npm i
```

-   Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Configuration

This project uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Raleway and Lato, custom Google Fonts.

We're using [tailwindcss](https://tailwindcss.com/) for the css styles.

## Contributing

We welcome any contribution to the project, code, review, tips, transalation, documentation, etc.

When contributing consider the following rules:

-   Make sure your contribution explains what you did and how it solves a problem or issue in the project.
-   If it's a code contribution, you should open a pull request. Pull request should be reviewed by a code owner before merging to master.

Feel free to contanct us by email or opening a discussion.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
