import Clock from "@/components/Clock";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Adriel FE - 전지훈</title>
      </Head>
      <div className="w-screen h-screen">
        <main className="flex items-center justify-center w-full h-full">
          <Clock />
        </main>
      </div>
    </>
  );
}
