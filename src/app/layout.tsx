import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import './globals.css'


config.autoAddCss = false;

const rootFont = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lavender',
  description: 'welcome to the fox\'s website :3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rootFont.className}>{children}</body>
    </html>
  )
}
