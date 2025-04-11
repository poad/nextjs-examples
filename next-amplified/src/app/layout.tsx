'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import "@aws-amplify/ui-react/styles.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider theme={studioTheme}> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
