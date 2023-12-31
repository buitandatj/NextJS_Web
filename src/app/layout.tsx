import './globals.css';
import '../styles/styles.css';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProviderContext from '@/app/Provider';
import { ToastContainer } from 'react-toastify';;

export const metadata: Metadata = {
  title: 'BATRA studio',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <ProviderContext>
          <Header />
          <ToastContainer autoClose={2000}/>
          <div className='App'>
            {children}
          </div>
          <Footer />
        </ProviderContext>
      </body>
    </html>
  )
}
