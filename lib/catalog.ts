export type Product = { id:string; name:string; price:number; category:'T-Shirts'|'Hoodies'|'Caps'|'Accessories'; color:string; colors:string[]; sizes:string[]; description:string; image:string; gallery:string[]; tag?:string };
const img=(id:string,w=900)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
// Original NQARO campaign SVGs served directly from /public/campaign.
export const editorial={
 hero:'/campaign/hero-desktop.svg',
 heroMobile:'/campaign/hero-mobile.svg',
 creator:'/campaign/creator-editorial.svg',
 builder:'/campaign/builders-editorial.svg',
 global:'/campaign/roots-editorial.svg',
 detail:'/campaign/accessories-editorial.svg',
 story:'/campaign/story-editorial.svg'
};
export const products:Product[]=[
 {id:'signature-tee',name:'Signature Tee',price:200,category:'T-Shirts',color:'Black',colors:['Black','Cream','Charcoal'],sizes:['S','M','L','XL','XXL'],description:'The essential uniform for creators. A relaxed-fit premium cotton tee featuring a minimal NQARO chest identity.',image:'/products/signature-tee.svg',gallery:['/products/signature-tee.svg'],tag:'Bestseller'},
 {id:'global-tee',name:'Global Tee',price:200,category:'T-Shirts',color:'Cream',colors:['Cream','Black'],sizes:['S','M','L','XL'],description:'From Accra to everywhere. A bold oversized graphic tee made for new perspectives.',image:'/products/global-tee.svg',gallery:['/products/global-tee.svg']},
 {id:'builders-hoodie',name:'Builders Hoodie',price:380,category:'Hoodies',color:'Black',colors:['Black','Charcoal','Cream'],sizes:['S','M','L','XL','XXL'],description:'A heavyweight everyday layer for the people who create what comes next.',image:'/products/builders-hoodie.svg',gallery:['/products/builders-hoodie.svg'],tag:'New'},
 {id:'topography-tee',name:'Topography Tee',price:220,category:'T-Shirts',color:'Charcoal',colors:['Charcoal','Black'],sizes:['S','M','L','XL'],description:'Inspired by the lines and journeys that make us who we are.',image:'/products/topography-tee.svg',gallery:['/products/topography-tee.svg']},
 {id:'roots-tee',name:'Roots Tee',price:200,category:'T-Shirts',color:'Cream',colors:['Cream','Black'],sizes:['S','M','L','XL'],description:'Rooted in Africa. Looking everywhere. An elevated everyday graphic tee.',image:'/products/roots-tee.svg',gallery:['/products/roots-tee.svg']},
 {id:'everyday-cap',name:'Everyday Cap',price:120,category:'Caps',color:'Black',colors:['Black','Cream'],sizes:['One Size'],description:'A structured six-panel cap. Minimal identity, maximum intention.',image:'/products/everyday-cap.svg',gallery:['/products/everyday-cap.svg']},
 {id:'creator-tote',name:'Creator Tote',price:100,category:'Accessories',color:'Cream',colors:['Cream'],sizes:['One Size'],description:'Carry your next big idea. Minimal canvas tote for everyday life.',image:'/products/creator-tote.svg',gallery:['/products/creator-tote.svg']},
 {id:'essential-sweatshirt',name:'Essential Sweatshirt',price:350,category:'Hoodies',color:'Black',colors:['Black','Cream'],sizes:['S','M','L','XL'],description:'Quiet confidence, everyday comfort. Premium relaxed-fit crewneck.',image:'/products/essential-sweatshirt.svg',gallery:['/products/essential-sweatshirt.svg']}
];
export const money=(n:number)=>`GH₵ ${n.toLocaleString('en-GH')}`;
export const getProduct=(id:string)=>products.find(p=>p.id===id);
