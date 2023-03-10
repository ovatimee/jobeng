import Head from "next/head";
import Header from "./header";
import { classnames } from "../utils/classnames";
import Footer from "./home/footer";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

const siteTitle: string = "Home";

export default function Layout({ children, home }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>WorkNomads</title>
      </Head>

      <div
        className={classnames(
          "flex flex-col max-w-[1400px]  my-0 mx-auto bg-theme-bg-color",
          { "overflow-hidden h-screen": !home }
        )}
      >
        <Header />
        {children}
      </div>
    </>
  );
}
