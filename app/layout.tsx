import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'NQARO | Ideas Wear Further', description: 'Premium streetwear for creators, dreamers and builders. Born in Accra, made for everywhere.', openGraph: {title:'NQARO — Ideas Wear Further',description:'Premium streetwear for people building a different tomorrow.'} };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
