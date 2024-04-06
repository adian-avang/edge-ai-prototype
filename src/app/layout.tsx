import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jet = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IA-Prototype',
  description: 'Generated by Edge IA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={jet.className}>{children}</body>
    </html>
  )
}