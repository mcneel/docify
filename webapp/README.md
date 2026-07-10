# RhinoCommon API docs site

Documentation site for RhinoCommon. **Vue 3 + Vite + Tailwind CSS + Pinia** SPA
(hash router, served under `/api/rhinocommon/`). Data comes from the `docify`
generator (`../src`), which writes `src/api_info.json` / `src/api_examples.json`;
those are copied into `public/data/` at dev/build time (see `scripts/copy-data.mjs`).

> Migrated from a Quasar (webpack/SSR) app to this stack.

## Install
```bash
yarn
```

## Develop (hot reload)
```bash
yarn dev
```

## Build for production
```bash
yarn build          # outputs to dist/
yarn preview        # serve the build locally at /api/rhinocommon/
```

## Test
```bash
yarn test           # vitest: pure-util unit tests + real-data pipeline + app render smoke
```

## Format
```bash
yarn format
```

## Project structure

```
src/
  main.js            app entry — createApp + Pinia + router
  App.vue            <RouterView> + tooltip provider
  router/            route table (hash mode) + ?version-carry guard
  stores/            Pinia state
    api.js             dataset (shallowRef/markRaw) + memoized tree / typeMap / search indexes
    selection.js       tree expand state + lazily-built child cache
    search.js          Fuse index (built on first search)
    settings.js        dark mode, inherited toggle, drawer width
  composables/       useApiData, useVersionFilter, useTypeLinks, useDocumentMeta
  utils/             pure helpers: signatures, version, tree, typemap, members, search, paths, sandcastle
  components/        NavTree(+Node), AppHeader, SearchOverlay, MemberSignature,
                     + primitives (Btn, Badge, Tip, Icon, CodeCard, Breadcrumbs)
  layouts/           MainLayout — header + resizable drawer + content area
  pages/             IndexPage, DataTypePage, MemberDetailPage, ExamplePage,
                     WhatsNewPage, ReferencesPage, SandcastleRedirect, NotFoundPage
  styles/            Tailwind entry + theme tokens, highlight.js theme
public/data/         api_info.json / api_examples.json (copied from ../src at dev/build)
test/                vitest: pure-util units, real-data pipeline, app render smoke
```

**Data flow:** `useApiStore.load()` fetches the JSON once into a non-reactive
`shallowRef`; the tree, type map, and search list are memoized computeds derived
from it. Components read those; the **route is the single source of truth** for
the selected node (no legacy view-model or pub/sub). Version/inherited filtering
happens at render time via `useVersionFilter`.

## Deploy
`.github/workflows/deploy.yaml` builds the SPA and deploys the static output to Heroku
via a dependency-free static server (`server.js` + `Procfile` + `deploy.package.json`),
then invalidates CloudFront. Hash routing means no server-side SPA fallback is required.
