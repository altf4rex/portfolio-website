import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'altf4rex portfolio',
  description: 'About me and my experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  )
}
