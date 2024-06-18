import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Boffaus from './components/boffaus';
import Larp from './components/larp';
import Yhdistys from './components/yhdistys';
import Contact from './components/contact';

export default function Home() {
  return (
    <main>
      <div className="bg-red-500 fixed w-1/2 h-screen -z-50 opacity-5 bg-shadow" />
      <Image
        className="fixed opacity-10 top-24 sm:-right-[8%] -right-[40%] w-auto blur-sm "
        src="/images/perkunas_serpent_w.png"
        alt="AA Logo"
        width={1500}
        height={1500}
      />
      <Header />
      <Hero />
      <Boffaus />
      <Larp />
      <Yhdistys />
      <Contact />
      <Footer />
    </main>
  );
}
