import Link from 'next/link';
import type {Product} from '@/lib/catalog';
import {money} from '@/lib/catalog';
export function ProductCard({product:p}:{product:Product}){return <article data-reveal className="product-card"><Link className="product-photo" href={'/products/'+p.id}><img src={p.image} alt={p.name} loading="lazy"/>{p.tag&&<span className="product-tag">{p.tag}</span>}</Link><Link className="product-title" href={'/products/'+p.id}>{p.name}</Link><span className="product-price">{money(p.price)}</span><div className="swatches" aria-label="Available colours">{p.colors.map(c=><span key={c} className={'swatch '+c.toLowerCase()} title={c}/>)}</div></article>}
