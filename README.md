# Thumbnailer

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

The Thumbnailer uses [YouTube v3 APIs](https://developers.google.com/youtube/v3) to fetch video thumbnails for video using auto generated ID. 
<br />It is designed to be highly efficient, AD free and easy to use.

## Usage

Simply visit [Thumbnailer](https://thumbnailer-two.vercel.app) and paste video ID in input field.

## Development

**1. Clone the repository and install dependencies**
```bash 
git clone https://github.com/asheikho99/thumbnailer.git
cd thumbnailer
npm install
```

**2. Configure your local environment**
<br />API_KEY: can be created from [Google Cloud Console](https://console.cloud.google.com/) and Enable YouTube API.
```bash
API_KEY=*****************
```

**3. Once you've created a project and installed dependencies with npm install, start a development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contributing

Contributions to the Thumbnailer project are welcome. If you would like to contribute, please fork the repository and submit a pull request.

## License

The Thumbnailer is licensed under the MIT License. See the `LICENSE` file for more information.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

