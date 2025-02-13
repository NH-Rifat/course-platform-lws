import Link from "next/link";
import React, { ReactNode } from "react";

const ConsumerLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default ConsumerLayout;

const Navbar = () => {
  return (
    <header className="flex h-12 shadow bg-background z-10">
      <nav className="flex gap-4 container">
        <Link href="/" className="mr-auto text-lg hover:underline px-2">
          Home
        </Link>
      </nav>
    </header>
  );
};
