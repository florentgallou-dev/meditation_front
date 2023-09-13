//@ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200;10..48,500;10..48,800&display=swap" rel="stylesheet" />
      </Head>
      <body className=' font-grotesque'>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
