'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

/** Progressive enhancement: content stays visible until observers are ready. */
export function MotionObserver(){
 const pathname=usePathname();
 useEffect(()=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce||!('IntersectionObserver' in window))return;
  const elements=Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  const observer=new IntersectionObserver((entries)=>{
   for(const entry of entries)if(entry.isIntersecting){
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
   }
  },{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
  for(const el of elements){
   // Elements near the viewport remain visible immediately, preventing flashes.
   if(el.getBoundingClientRect().top<window.innerHeight*0.95){el.classList.add('is-visible');continue}
   el.classList.add('reveal-pending');observer.observe(el);
  }
  return ()=>observer.disconnect();
 },[pathname]);
 return null;
}
