export type Product = { id:string; name:string; price:number; category:'T-Shirts'|'Hoodies'|'Caps'|'Accessories'; color:string; colors:string[]; sizes:string[]; description:string; image:string; gallery:string[]; tag?:string };
const img=(id:string,w=900)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const editorial={
 hero:img('photo-1506794778202-cad84cf45f1d',1600),
 creator:img('photo-1534528741775-53994a69daeb',900),
 builder:img('photo-1529139574466-a303027c1d8b',900),
 global:img('photo-1506794778202-cad84cf45f1d',900),
 detail:img('photo-1523381210434-271e8be1f52b',1000),
 story:img('photo-1483985988355-763728e1935b',1400)
};
export const products:Product[]=[
 {id:'signature-tee',name:'Signature Tee',price:200,category:'T-Shirts',color:'Black',colors:['Black','Cream','Charcoal'],sizes:['S','M','L','XL','XXL'],description:'The essential uniform for creators. A relaxed-fit premium cotton tee featuring a minimal NQARO chest identity.',image:img('photo-1521572163474-6864f9cf17ab'),gallery:[img('photo-1521572163474-6864f9cf17ab'),img('photo-1503341504253-dff4815485f1'),img('photo-1523381210434-271e8be1f52b')],tag:'Bestseller'},
 {id:'global-tee',name:'Global Tee',price:200,category:'T-Shirts',color:'Cream',colors:['Cream','Black'],sizes:['S','M','L','XL'],description:'From Accra to everywhere. A bold oversized graphic tee made for new perspectives.',image:img('photo-1503342217505-b0a15ec3261c'),gallery:[img('photo-1503342217505-b0a15ec3261c'),img('photo-1523381210434-271e8be1f52b')]},
 {id:'builders-hoodie',name:'Builders Hoodie',price:380,category:'Hoodies',color:'Black',colors:['Black','Charcoal','Cream'],sizes:['S','M','L','XL','XXL'],description:'A heavyweight everyday layer for the people who create what comes next.',image:img('photo-1556821840-3a63f95609a7'),gallery:[img('photo-1556821840-3a63f95609a7'),img('photo-1578681994506-b8f463449011')],tag:'New'},
 {id:'topography-tee',name:'Topography Tee',price:220,category:'T-Shirts',color:'Charcoal',colors:['Charcoal','Black'],sizes:['S','M','L','XL'],description:'Inspired by the lines and journeys that make us who we are.',image:img('photo-1503341455253-b2e723bb3dbb'),gallery:[img('photo-1503341455253-b2e723bb3dbb')]},
 {id:'roots-tee',name:'Roots Tee',price:200,category:'T-Shirts',color:'Cream',colors:['Cream','Black'],sizes:['S','M','L','XL'],description:'Rooted in Africa. Looking everywhere. An elevated everyday graphic tee.',image:img('photo-1523398002811-999ca8dec234'),gallery:[img('photo-1523398002811-999ca8dec234')]},
 {id:'everyday-cap',name:'Everyday Cap',price:120,category:'Caps',color:'Black',colors:['Black','Cream'],sizes:['One Size'],description:'A structured six-panel cap. Minimal identity, maximum intention.',image:img('photo-1588850561407-ed78c282e89b'),gallery:[img('photo-1588850561407-ed78c282e89b')]},
 {id:'creator-tote',name:'Creator Tote',price:100,category:'Accessories',color:'Cream',colors:['Cream'],sizes:['One Size'],description:'Carry your next big idea. Minimal canvas tote for everyday life.',image:img('photo-1544816155-12df9643f363'),gallery:[img('photo-1544816155-12df9643f363')]},
 {id:'essential-sweatshirt',name:'Essential Sweatshirt',price:350,category:'Hoodies',color:'Black',colors:['Black','Cream'],sizes:['S','M','L','XL'],description:'Quiet confidence, everyday comfort. Premium relaxed-fit crewneck.',image:img('photo-1578681994506-b8f463449011'),gallery:[img('photo-1578681994506-b8f463449011')]}
];
export const money=(n:number)=>`GH₵ ${n.toLocaleString('en-GH')}`;
export const getProduct=(id:string)=>products.find(p=>p.id===id);
