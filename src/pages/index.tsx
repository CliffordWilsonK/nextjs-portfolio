import Head from "next/head";
import { Inter } from "next/font/google";
import { HomPage } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Clifford Kwame Wilson – Software Developer in Ghana</title>

        <meta
          name="description"
          content="Clifford Kwame Wilson is a full-stack developer in Ghana building fast SEO-optimized web apps."
        />

        <meta
          name="keywords"
          content="Clifford Kwame Wilson, Next.js developer Ghana, full stack web developer, React developer, SEO web apps, Django developer"
        />
      </Head>

      <main className={inter.className}>
        <HomPage />
      </main>
    </>
  );
}
