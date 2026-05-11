import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Form Scanner – Scan Forms for Compliance Violations',
  description: 'Crawl websites to find forms missing required GDPR consent checkboxes, privacy links, and data processing notices. Generate actionable compliance reports instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f6158517-38b3-4f99-a164-80757f0ed243"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
