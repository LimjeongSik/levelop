import "../styles/font.css";

import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Header />
            <Component {...pageProps} />
        </Layout>
    );
}
