import Head from 'next/head';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { InThePress } from '../components/InThePress';

export interface HomeStaticProps {
    props: {};
    revalidate: number;
};

export async function getStaticProps(): Promise<HomeStaticProps> {
    return { props: {}, revalidate: 1 };
}

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>{`MBanc. Mortgages for Self Employed Borrowers & Investors`}</title>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="theme-color" content="#1976D2"/>
                <meta name="description" content="At MBANC, we understand that you have a choice of who your Financial Advisor will be for your mortgage journey. Whether it is purchasing a home or refinancing your mortgage, we want to be your choice."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/png" sizes="48x48" href="/images/icons/android/android-launchericon-48-48.png"/>
                <link rel="icon" type="image/png" sizes="72x72" href="/images/icons/android/android-launchericon-72-72.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/android/android-launchericon-96-96.png"/>
                <link rel="icon" type="image/png" sizes="144x144" href="/images/icons/android/android-launchericon-144-144.png"/>
                <link rel="icon" type="image/png" sizes="512x512" href="/images/icons/android/android-launchericon-512-512.png"/>
                <link rel="apple-touch-icon" href="/images/icons/android/android-launchericon-192-192.png"/>
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            <Navigation/>
            <main>
                <InThePress/>
            </main>
            <Footer/>
        </>
    );
}
