import {products as demoProducts,type Product} from '@/lib/catalog';
const origin=(process.env.XONBAY_API_URL||'https://api.xonbay.com').replace(/\/$/,'');
const subdomain=process.env.XONBAY_SHOP_SUBDOMAIN?.trim();
export const isLiveShopConfigured=Boolean(subdomain);
type PublicSummary={id:number|string;name:string;slug:string;price:number|string;currency?:string;image_url?:string|null;available?:boolean;stock_quantity?:number|null;featured?:boolean};
type PublicDetail=PublicSummary&{description?:string|null;images?:string[];variants?:Array<{id:string|number;name?:string;price?:number;quantity?:number;options?:Record<string,string>}>;category?:{name:string}|null};
async function request<T>(path:string):Promise<T>{
 const response=await fetch(origin+path,{next:{revalidate:120},headers:{Accept:'application/json'}});
 if(!response.ok)throw new Error('Xonbay storefront responded '+response.status);
 return await response.json() as T;
}
function mapProduct(raw:PublicSummary,detail?:PublicDetail):Product{
 const image=raw.image_url||'/products/signature-tee.svg';
 const categoryName=(detail?.category?.name||'').toLowerCase();
 const category:Product['category']=categoryName.includes('hood')?'Hoodies':categoryName.includes('cap')?'Caps':categoryName.includes('accessor')?'Accessories':'T-Shirts';
 const options=detail?.variants?.flatMap(v=>Object.entries(v.options||{}));
 const sizes=[...new Set((options||[]).filter(([k])=>/size/i.test(k)).map(([,v])=>String(v)))];
 const colors=[...new Set((options||[]).filter(([k])=>/colou?r/i.test(k)).map(([,v])=>String(v)))];
 return {id:raw.slug,name:raw.name,price:Number(raw.price),category,color:colors[0]||'Default',colors:colors.length?colors:['Default'],sizes:sizes.length?sizes:['One Size'],description:detail?.description||'NQARO independent streetwear.',image,gallery:detail?.images?.length?detail.images:[image],tag:raw.featured?'Featured':undefined};
}
export async function getStoreProducts():Promise<{products:Product[];live:boolean;error?:string}>{
 if(!subdomain)return {products:demoProducts,live:false};
 try{
  const payload=await request<{data:PublicSummary[]}>(`/v1/storefront/shops/${encodeURIComponent(subdomain)}/products?per_page=100`);
  if(!Array.isArray(payload.data))throw new Error('Unexpected catalogue payload');
  return {products:payload.data.filter(p=>p.slug&&Number.isFinite(Number(p.price))).map(p=>mapProduct(p)),live:true};
 }catch(e){
  console.error('NQARO storefront catalogue:',e);
  return {products:[],live:false,error:'Live catalogue temporarily unavailable'};
 }
}
export async function getStoreProduct(slug:string):Promise<{product:Product|null;live:boolean}>{
 if(!subdomain)return {product:demoProducts.find(p=>p.id===slug)||null,live:false};
 try{
  const raw=await request<PublicDetail>(`/v1/storefront/shops/${encodeURIComponent(subdomain)}/products/${encodeURIComponent(slug)}`);
  return {product:mapProduct(raw,raw),live:true};
 }catch(e){console.error('NQARO product lookup:',e);return {product:null,live:false}}
}
