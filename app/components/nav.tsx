import Image from 'next/image';
import React, { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <ul className="fixed w-2/4 hidden md:flex flex-row justify-evenly">
        <button
          onClick={() =>
            document
              .getElementById('boffaus')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Boffaus
        </button>
        <button
          onClick={() =>
            document
              .getElementById('larp')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          LARP
        </button>
        <button
          onClick={() =>
            document
              .getElementById('yhdistys')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Yhdistys
        </button>
        <button
          onClick={() =>
            document
              .getElementById('contact')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Yhteydenotto
        </button>
      </ul>
      <button
        onClick={toggleMenu}
        className=" w-24 h-16 -mt-4 text-7xl block md:hidden border-0 "
      >
        ≡
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-[25vh] bg-white transition-all duration-300">
          <Image
            className="fixed top-2 right-4  cursor-pointer max-w-60"
            src="/images/perkunas_full_b.png"
            alt="AA Logo"
            width={300}
            height={300}
          />
          <button
            onClick={toggleMenu}
            className=" w-24 h-16 -mt-4 text-7xl block md:hidden text-black border-0 z-50 "
          >
            X
          </button>
          <ul className=" z-40 fixed grid grid-cols-2 grid-rows-2 mt-4 w-full backdrop-blur-none text-black">
            <button
              className="border-0 bg-slate-200"
              onClick={() => {
                document
                  .getElementById('boffaus')
                  ?.scrollIntoView({ behavior: 'smooth' });
                toggleMenu();
              }}
            >
              Boffaus
            </button>
            <button
              className="border-0 bg-slate-300"
              onClick={() => {
                document
                  .getElementById('larp')
                  ?.scrollIntoView({ behavior: 'smooth' });
                toggleMenu();
              }}
            >
              LARP
            </button>
            <button
              className="border-0 bg-slate-200"
              onClick={() => {
                document
                  .getElementById('yhdistys')
                  ?.scrollIntoView({ behavior: 'smooth' });
                toggleMenu();
              }}
            >
              Yhdistys
            </button>
            <button
              className="border-0 bg-slate-300"
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
                toggleMenu();
              }}
            >
              Yhteydenotto
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
