import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import { Nova_Square } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const NovaSquare = Nova_Square({ subsets: ['latin'], weight:"400" })
export const metadata = {
  title: 'Tapri',
  description: 'The Indo Chinese Kitchen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${NovaSquare.className}  scroll-smooth`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
