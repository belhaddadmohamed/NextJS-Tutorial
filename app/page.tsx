import Link from "next/link";
import Card from "./Components/Card";

export default function Home() {

  return (
      
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <h1>BELHADDAD MOHAMED ISLEM IS THE BEST IN THE WORLD OF DATA</h1>
          <Link href="/users"> Users  </Link>
          <Card />
      </main>
  );
}
