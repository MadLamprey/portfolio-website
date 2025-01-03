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
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <nav className="my-10 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-3xl duration-500 text-zinc-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <h1 className="text-8xl text-transparent duration-1000 bg-white animate-title bg-clip-text">
        Aditya Misra
      </h1>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-400">
          Software engineer with a passion to create for social good
        </h2>
      </div>
      <Image src="/profile.png" alt="Aditya Misra" width={300} height={300} className="rounded-full animate-fade-in" />
    </div>
  );
}