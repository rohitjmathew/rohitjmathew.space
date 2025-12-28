import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Enhanced Favicon Setup */}
          <link rel="icon" href="/static/favicons/favicon.png" sizes="any" />
          <link rel="icon" href="/static/favicons/favicon.png" type="image/png" sizes="32x32" />
          <link rel="icon" href="/static/favicons/favicon.png" type="image/png" sizes="16x16" />
          <link rel="apple-touch-icon" href="/static/favicons/favicon.png" sizes="180x180" />
          <link rel="manifest" href="/manifest.json" />

          {/* Theme and PWA */}
          <meta name="theme-color" content="#3B82F6" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Rohit Jacob Mathew" />
          <meta name="msapplication-TileColor" content="#3B82F6" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
