import './globals.css'
import { Inter } from 'next/font/google';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jared Addair | Portfolio',
  description: 'Jared is a fullstack developer with 3 years experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-slate-50 text-gray-950 pt-28 sm:pt-36`}>
        <div className='bg-emerald-200 -z-10 absolute top-[-6rem] right-[3rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] '></div>
        <div className='bg-sky-200 -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[55.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
        </body>
    </html>
  )
}
