import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/navigation";
import    {ClerkProvider}  from '@clerk/nextjs';



export const metadata: Metadata = {
  title: "Product App",
  description: "Demo next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="flex flex-col min-h-screen"
       
      >
        <header className="bg-slate-900 text-white p-4 text-center">
          <Navigation />
        </header>
        <main className="flex-grow">
            {children}
          </main>
        
      </body>
      
    </html>
    <footer className="bg-slate-900 text-white p-4 text-center mt-8">
          <p>&copy; 2025 Product Catalog App. All rights reserved.</p>
        </footer> 
    </ClerkProvider>
  );
}
