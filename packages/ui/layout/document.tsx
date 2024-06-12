/* eslint-disable @next/next/no-title-in-document-head */
// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => (
  <Html lang="en">
    <Head>
      <title>Samurai Financial</title>
      <meta property="og:title" content="Samurai" />
      <meta property="og:description" content="Utility NFT Nodes-as-a-Service" />
      <link rel="apple-touch-icon" href="https://samurai.financial/favicon.png" />
      <link rel="icon" href="https://samurai.financial/favicon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://samurai.financial" />
      <meta property="og:site_name" content="Samurai" />
      <meta property="og:image" content="https://samurai.financial/banner.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
