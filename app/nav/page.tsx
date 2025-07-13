import Link from 'next/link';
import React from 'react';

//nav bar component

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/" className="text-lg font-bold">
        Michael&apos;s Portfolio
        </Link>
        <div className="flex space-x-4">
            <Link href="/" className="hover:underline">
                Home
            </Link>
            <Link href="/projects" className="hover:underline">
                Projects
            </Link>
            <Link href="/about" className="hover:underline">
                About
            </Link>
            <Link href="/contact" className="hover:underline">
                Contact
            </Link>
        </div>
    </nav>
  );
}