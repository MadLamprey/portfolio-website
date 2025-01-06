import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-10 overflow-hidden">
      <Image
        src="/profile.png"
        alt="Aditya Misra"
        width={200}
        height={200}
        className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full animate-fade-in"
      />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-transparent duration-1000 bg-white animate-title bg-clip-text uppercase text-center">
          Aditya Misra
        </h1>
        <div className="text-center animate-fade-in">
          <h2 className="text-lg sm:text-xl md:text-2xl text-zinc-400">
            Software engineer with a passion to create for social good
          </h2>
        </div>
      </div>
      <nav className="animate-fade-in">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 justify-items-center p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl sm:text-2xl md:text-3xl duration-500 text-zinc-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}