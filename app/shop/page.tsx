import {getStoreProducts} from '@/lib/xonbay-storefront';
import {ShopCatalog} from '@/components/shop-catalog';
export default async function ShopPage(){const {products,live}=await getStoreProducts();return <ShopCatalog products={products} live={live}/>}
