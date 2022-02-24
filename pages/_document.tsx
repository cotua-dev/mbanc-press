import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    public render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                    {
                        process.env.NEXT_PUBLIC_GTM !== '' &&
                        <noscript><iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`}
                            height="0"
                            width="0"
                            style={{display:'none',visibility:'hidden'}}
                        ></iframe></noscript>
                    }
                    {
                        process.env.NEXT_PUBLIC_FBQ !== '' &&
                        <noscript><img
                            alt=""
                            height="1"
                            width="1"
                            style={{display:'none'}}
                            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FBQ}&ev=PageView&noscript=1`}
                        /></noscript>
                    }
                </body>
            </Html>
        );
    }
}

export default MyDocument;
