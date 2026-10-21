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
