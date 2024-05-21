import './globals.css';
import { Inter } from 'next/font/google';
import React, { ReactNode } from "react";
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marley Sellem',
  description: 'Portfolio',
}

export default function RootLayout({ children }: {children?: ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className='flex justify-center p-2'>
          <footer className="flex items-center justify-center font-bold">
            <div className='flex justify-center'>&copy; 2024 Marleysz</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
