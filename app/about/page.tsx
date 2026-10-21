import Link from 'next/link';
import type {Metadata} from 'next';
import {editorial} from '@/lib/catalog';
export const metadata:Metadata={title:'Our Story | NQARO',description:'Born in Accra, made for everywhere. Discover the NQARO mindset.'};
export default function About(){return <main><section className="story-cover" style={{backgroundImage:`linear-gradient(90deg,#090909df,#09090925),url("${editorial.story}")`}}><span className="eyebrow">OUR STORY</span><h1>FROM ACCRA.<br/>TO EVERYWHERE.</h1><p>Ideas wear further.</p></section><section className="story-copy"><span className="eyebrow">MORE THAN CLOTHING</span><h2>Made for minds that never stand still.</h2><p>NQARO is a culture of creators, dreamers and builders who turn ideas into reality. Rooted in Africa and open to the world.</p><Link className="primary" href="/shop">Explore the collection →</Link></section></main>}
