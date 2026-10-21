import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {products,editorial} from '@/lib/catalog';
const frames=[
 {title:'THE UNIFORM',caption:'01 / MAKE YOUR MARK',product:products[0],image:editorial.builder,className:'lookbook-tall'},
 {title:'BEYOND LIMITS',caption:'02 / BUILD DIFFERENT',product:products[2],image:editorial.creator,className:'lookbook-wide'},
 {title:'ROOTED. GLOBAL.',caption:'03 / FROM ACCRA',product:products[4],image:editorial.global,className:'lookbook-wide'},
];
export function CollectionLookbook(){return <section className="lookbook" aria-label="Builders collection editorial lookbook"><div className="lookbook-heading"><div><span className="eyebrow">AN NQARO EDITORIAL</span><h2>THE BUILDERS<br/>LOOKBOOK.</h2></div><p>Individual pieces. A collective mindset.<br/>Drop 001 — designed to move with you.</p></div><div className="lookbook-grid">{frames.map((frame,i)=><Link data-reveal href={'/products/'+frame.product.id} className={'lookbook-frame '+frame.className} key={frame.title}><img src={frame.image} loading="lazy" alt={frame.title+' — NQARO campaign photography'}/><span className="lookbook-overlay"><small>{frame.caption}</small><strong>{frame.title}</strong><span>EXPLORE PIECE <ArrowUpRight size={17}/></span></span><span className="lookbook-number">0{i+1}</span></Link>)}</div></section>}
