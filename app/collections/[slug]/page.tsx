import {notFound} from 'next/navigation';
import Link from 'next/link';
import type {Metadata} from 'next';
import {products} from '@/lib/catalog';
import {ProductCard} from '@/components/product-card';
export const dynamicParams=false;
export function generateStaticParams(){return [{slug:'builders'}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:slug==='builders'?'The Builders Collection | NQARO':'Collection | NQARO',description:'Drop 001 — built for creators, dreamers and makers.'}}
export default async function Collection({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug!=='builders')notFound();return <main><section className="home-manifesto collection-intro"><div className="home-manifesto-inner"><span className="eyebrow">DROP 001 / NQARO</span><h1>THE BUILDERS<br/>COLLECTION.</h1><p>From Accra to everywhere. Clothes for those building the next chapter.</p></div></section><section className="content-section shop-body"><div className="section-heading"><h2>ALL PIECES</h2><Link href="/shop" className="text-link">SHOP ALL →</Link></div><div className="product-grid shop-grid">{products.map(p=><ProductCard product={p} key={p.id}/>)}</div></section></main>}
