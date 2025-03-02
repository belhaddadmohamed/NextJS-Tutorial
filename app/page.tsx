import Link from "next/link";
import Card from "./Components/Card";
import Image from "next/image";

export default function Home() {

  return (
      
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1>BELHADDAD MOHAMED ISLEM IS THE BEST IN THE WORLD OF DATA</h1>
        <Link href="/users"> Users  </Link>
        <Image src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="Vercel Logo" width={150} height={200} priority />
        <Card />
        
      </main>
  );
}
