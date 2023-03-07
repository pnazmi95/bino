import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
   return (
      <Html lang="fa-ir" dir='rtl'>
         <Head>
            <link rel="preconnect" href="//fdn.fontcdn.ir"/>
            <link rel="preconnect" href="//v1.fontapi.ir"/>
            <link href="https://v1.fontapi.ir/css/Estedad" rel="stylesheet"/>
         </Head>
         <body>
         <Main/>
         <NextScript/>
         </body>
      </Html>
   )
}
