import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="SFWit7ZfhDbJz7dVO2UyLliuUX8JVthyT-MAkIBjvKU"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;600&family=Nunito:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/3dfa64a2c5.js"
            crossorigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
