import type {Metadata} from 'next';
import {StoreShell} from '@/components/store-shell';
import './globals.css';
export const metadata:Metadata={title:{default:'NQARO | Ideas Wear Further',template:'%s'},description:'Premium streetwear for creators, dreamers and builders. Born in Accra, made for everywhere.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><StoreShell>{children}</StoreShell></body></html>}
