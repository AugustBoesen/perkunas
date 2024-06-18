'use client';
import Image from 'next/image';
import Nav from './nav';

export default function Header() {
  return (
    <header className="fixed bg-black bg-opacity-40 w-screen h-24">
      <Image
        className="fixed top-2 right-4  cursor-pointer max-w-60"
        src="/images/perkunas_full_w.png"
        alt="AA Logo"
        width={300}
        height={300}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      <Nav />
    </header>
  );
}
