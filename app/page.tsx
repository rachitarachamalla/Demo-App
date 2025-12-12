import Image from "next/image";
import { Greet } from "./components/greet";

import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black flex items-center justify-center px-4 py-10">
      <main className="w-full max-w-4xl bg-white dark:bg-black 
        rounded-xl 
        flex flex-col 
        items-center 
        sm:items-start 
        gap-0
        py-12 
        px-6 
        sm:px-10 
        md:px-16 
      ">
        
        <Greet />
        <ProductList />

      </main>
    </div>
  );
}

