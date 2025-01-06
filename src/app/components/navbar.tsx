"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function NavBar()  {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='fixed inset-x-0 top-0 z-20 backdrop-blur duration-200'>
            <div className="flex flex-row items-center justify-between mx-5 p-6">
                <Link href="/" className="flex text-zinc-200 text-lg sm:text-xl md:text-3xl">Aditya Misra.</Link>
                <button
                    className="text-zinc-200 sm:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <Menu size={28} />
                </button>
                <div className="hidden sm:flex justify-between gap-8">
                    <Link
                        href="/about"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        About
                    </Link>
                    <Link
                        href="/experience"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        Experience
                    </Link>
                    <Link
                        href="/contact"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume"
                        className="duration-200 text-zinc-400 hover:text-zinc-100"
                    >
                        Resume
                    </Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden bg-zinc-900 p-5">
                <div className="flex flex-col gap-4 text-center">
                  <Link
                    href="/about"
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/experience"
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                    onClick={toggleMenu}
                  >
                    Experience
                  </Link>
                  <Link
                    href="/contact"
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/resume"
                    className="duration-200 text-zinc-400 hover:text-zinc-100"
                    onClick={toggleMenu}
                  >
                    Resume
                  </Link>
                </div>
              </div>
            )}
        </div>
    )
}