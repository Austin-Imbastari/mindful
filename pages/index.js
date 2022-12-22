import Head from "next/head";
//import components
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Features from "../components/Features";

export default function Home() {
    return (
        <>
            <Head>
                <title>Mindful</title>
                <meta name='viewport' content='mindful application' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link
                    href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Electrolize&family=Inter:wght@100;200;300;400;500;700;800;900&family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Navbar />
            <Herosection />
            <Features />
        </>
    );
}
