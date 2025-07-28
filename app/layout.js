import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";
import Link from "next/link";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const metadata = {
  title: "Reflct",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: shadesOfPurple,
    //   variables: {
    //     colorPrimary: "#3b82f6",
    //     colorBackground: "#1a202c",
    //     colorInputBackground: "#2D3748",
    //     colorInputText: "#F3F4F6",
    //   },
    //   elements: {
    //     formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
    //     card: "bg-gray-800",
    //     headerTitle: "text-blue-400",
    //     headerSubtitle: "text-gray-400",
    //   },
    // }}
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50`}
          suppressHydrationWarning={true}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gray-900 text-white py-12 border-t border-gray-200">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Reflct</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Your personal journaling companion for mindful reflection and growth.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">

                    <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                    <li><Link href="/journal/write" className="hover:text-white transition-colors">Journal</Link></li>
                    {/* <li><Link href="/settings" className="hover:text-white transition-colors">Settings</Link></li> */}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><Link href="/" className="hover:text-white transition-colors">Help Center</Link></li>
                    <li><Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Reflct. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
