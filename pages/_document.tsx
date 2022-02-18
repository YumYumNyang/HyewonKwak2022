import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Hyewon Kwak Frontend Developer Portfolio Website"
          ></meta>
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Hyewon Kwak Portfolio" />
          <meta
            property="og:description"
            content="Hyewon Kwak Frontend Developer Portfolio Website"
          />
          {/* <meta property="og:image" content="" /> */}
          {/* <meta property="og:url" content="PERMALINK" /> */}
          <meta property="og:site_name" content="Hyewon Kwak Portfolio" />
          <link
            rel="canonical"
            href="https://hyewon-kwak-portfolio.vercel.app/"
          />
          <link rel="shortcut icon" href="/logo.jpeg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Modak&family=Rubik+Mono+One&family=Rubik:wght@500&display=swap"
            rel="stylesheet"
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
