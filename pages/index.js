import Head from "next/head";
import Image from "next/image";
import FirstComponent from "../components/FirstComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <FirstComponent />
      </main>

      <footer></footer>
    </div>
  );
}
