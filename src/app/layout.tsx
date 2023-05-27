import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins(
  {
    weight: [
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ],
    subsets: ['latin'],
    variable: '--font-poppins'
  }
)

export const metadata = {
  title: 'Fura Blog',
  description: 'Página web de blogs hecho en Nextjs utilizando markdow para la realización del contenido del blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        {
          children
        }
      </body>
    </html>
  )
}
