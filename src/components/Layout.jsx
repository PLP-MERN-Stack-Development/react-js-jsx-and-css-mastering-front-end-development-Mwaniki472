import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-6 sm:px-6 md:px-10 animate-slideUp">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
