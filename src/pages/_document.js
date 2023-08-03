import { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

export default function Document () {
  return (
    <Html>
      <Head>
      <title>Nicolas Colombo | Fullstack Developer</title>
      <link rel="icon" href="/images/blackclover.webp"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Handjet:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
