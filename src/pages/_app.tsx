import { MantineProvider } from "@mantine/core";
import { type AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "@/components/commons/GlobalStyles";
import RouterTransition from "@/components/commons/RouterTransition";
import MainLayout from "@/components/layouts/MainLayout";

const _App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="title" content="Dwi Payana" />
        <meta name="description" content="I'm an Front-End developer living in Bali, Indonesia" />
        <title>Dwi Payana</title>
      </Head>
      <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        <RouterTransition />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </>
  );
};

export default _App;
