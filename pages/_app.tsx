import { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            {
                process.env.NEXT_PUBLIC_GTM !== '' &&
                <>
                    <Script id="google-tag-manager" strategy="afterInteractive">{`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
                    `}</Script>
                </>
            }
            {
                process.env.NEXT_PUBLIC_GTAG !== '' &&
                <>
                    <Script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
                        strategy="afterInteractive"
                    ></Script>
                    <Script id="gtm-data-layer-init" strategy="afterInteractive">{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
                    `}</Script>
                </>
            }
            {
                process.env.NEXT_PUBLIC_FBQ !== '' &&
                <>
                    <Script id="facebook-pixel" strategy="afterInteractive">{`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${process.env.NEXT_PUBLIC_FBQ}');
                        fbq('track', 'PageView');
                    `}</Script>
                </>
            }
            <Component {...pageProps}/>
        </>
    );
}
export default MyApp
