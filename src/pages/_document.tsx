/* e o index.html do next, para importar fontes e etc necessita fazer esse arquivo */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  render() {
    return (
      /* notar as tags HTML com a primeira letra maiuscula, essas
      vem importadas do next/document */

      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/*  conteudo vai ser renderizado aqui */}
          <Main />

          {/* onde vai vim os arquivos JS */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
