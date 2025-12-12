"use client"; 
import { useRouter } from "next/navigation";    

export default function About() {     
  const router = useRouter();     

  return (         
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          About Our Appify Store
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 ">
          Welcome to Shopify demo! Here you can explore products catalog, 
          add products to the page and can also edit the values of the existing products in the catalog . 
         
        </p>
        <button 
          onClick={() => router.push("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  ); 
}
