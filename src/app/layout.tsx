"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { Overpass_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const dm_sans = Overpass_Mono({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const getBlocks = () => {
    const blockSize = windowWidth * 0.05;
    const nbOfBlocks = Math.ceil(windowHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, i) => {
      return <div key={i} onMouseEnter={(e) => {colorize(e.target as HTMLElement)}}></div>
    });
  }

  const colorize = (target: HTMLElement) => {
    target.style.backgroundColor = 'white';
    setTimeout(() => {
      target.style.backgroundColor = 'transparent';
    }, 300);
  };


  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} bg-black overflow-hidden`}
      >
        <div className="container">
          <div className="grid">
          {windowWidth > 0 && [...Array(20).keys()].map( (_, index) => {
            return <div key={'b_' + index} className="column">
              {getBlocks()}
          </div>
          })
        }
        </div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
