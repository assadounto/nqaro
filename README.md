# NQARO — Ideas Wear Further

Fashion-first Next.js 15 storefront based on the NQARO creative mockup, responsive on mobile and desktop.

## Run

```bash
npm install
npm run dev
```

## Current features

- Editorial homepage, collection view, story and detail pages
- Responsive navigation and product grids
- Local cart with quantity editing persisted in browser storage
- Catalog data isolated in `lib/catalog.ts` ready for the Xonbay adapter

## Production integration

Connect the catalog, variants, availability, authentication, checkout, wishlist and orders to the authenticated tenant-scoped Xonbay Rails API. **The current catalog and cart are demo-only and do not place actual orders or accept payments.** Do not collect cards or invent checkout endpoints. Images are remotely hosted editorial placeholders and product illustrations; replace these with individually licensed high-resolution NQARO images before launch. Set image ownership, loading policy and CDN hosting appropriately.

## Reference

Brand colors: ink #0b0c0d, ivory #f7f5f0, sand #e9e5dc. Typography: system sans, bold condensed display styling. Do not use the single collage as image assets.

## Public Xonbay catalogue integration

Set `XONBAY_SHOP_SUBDOMAIN` to the real NQARO shop subdomain in your deployment environment. `XONBAY_API_URL` defaults to `https://api.xonbay.com`. The `/shop` page then reads the public storefront endpoint `/v1/storefront/shops/:subdomain/products` server-side (2-minute revalidation). With no subdomain configured the shop displays preview products; on a configured-shop API error it shows an unavailable state instead of advertising incorrect stock. The shopping bag remains demo-only and **checkout is disabled** until variant, stock and PaymentIntent integration is completed. No API tokens or secrets should be exposed through `NEXT_PUBLIC_` variables.

## NQARO campaign image pack (October 2026)

The original NQARO editorial artwork is exported into `nqaro-campaign-assets.zip` (provided in the project conversation). To install, copy its `public/campaign/` directory into this repository, commit the WebP files, and set `NEXT_PUBLIC_NQARO_CAMPAIGN_ASSETS=local` in the deployment environment. Until then, existing editorial placeholders remain, avoiding missing-image links. Assets cover desktop hero, mobile hero concept, editorial panels and story banner. The current hero consumes `hero-desktop.webp`; mobile-specific art direction can be added with a picture element or responsive CSS once installed.

AI-generated campaign images are visual concepts—not photos of manufactured NQARO merchandise. Verify real garments and garment prints prior to advertising physical inventory. The source board images are smaller than professional standalone photography; replace with real original photo shoots for production-quality large-screen campaigns.
