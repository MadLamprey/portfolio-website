"use client";

import "./globals.css";
import { useState, useEffect } from "react";

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
      return <div key={i} onMouseEnter={(e) => {colorize(e.target)}}></div>
    });
  }

  const colorize = (target) => {
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
        className='bg-black'
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
      </body>
    </html>
  );
}
