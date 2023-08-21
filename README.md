## Run locally

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


.
├── components
│   ├── Header.tsx
│   ├── NetworkSelector.tsx
│   ├── BalanceDisplay.tsx
│   ├── WalletActions.tsx
│   ├── AssetBox.tsx
│   └── Modals
│       ├── WalletModal.tsx
│       ├── ScannerModal.tsx
│       ├── ConfirmationModal.tsx
│       └── SolanaPayModal.tsx
│
├── pages
│   ├── api
│   │   └── hello.ts
│   ├── _app.tsx
│   └── index.tsx
│
├── public
│   ├── favicon.ico
│   ├── ios.png
│   ├── logo.svg
│   └── vercel.svg
│
├── styles
│   └── globals.css
│
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
