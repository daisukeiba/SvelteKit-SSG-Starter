# SvelteKit SSG
SvelteKit SSG Sass TypeScript Responsive

## サイト固有の定義ファイル
- `.env.local`
- `.env.staging`
- `.env.production`
- `.browserslistrc`
- `src/lib/scripts/const.ts`
- `src/lib/stylesheet/_global.scss`

## Developing
```bash
# install
npm install

# .env.local を作成後
# serve at localhost
npm run dev

# build
npm run build

# .env.staging を作成後
# staging build
npm run stg

# .env.production を作成後
# production build
npm run prod
```