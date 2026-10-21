import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {products,getProduct,money} from '@/lib/catalog';
import {ProductPurchase} from '@/components/product-purchase';
export const dynamicParams=false;
export function generateStaticParams(){return products.map(p=>({slug:p.id}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProduct(slug);return p?{title:p.name+' | NQARO',description:p.description,openGraph:{title:p.name+' | NQARO',description:p.description,images:[p.image]}}:{title:'Product unavailable | NQARO'}}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProduct(slug);if(!p)notFound();return <main className="detail-wrap"><Link className="back-link" href="/shop">← Back to collection</Link><ProductPurchase product={p}/><section className="product-description"><h2>MADE FOR THE BUILDERS</h2><p>{p.description}</p><p>Listed sizes and colours are provisional until the Xonbay catalogue is connected.</p></section></main>}
