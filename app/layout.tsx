import './globals.css'
import { Inter } from 'next/font/google'
import React, { ReactNode } from "react"

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
        <footer className="text-center font-bold text-other">&copy; 2023 Marleysz</footer>
      </body>
    </html>
  )
}
