# Vue 3 + Typescript + Vite + TSX

## Start Dev

```bash
npm i
npm run dev
```


## プロジェクト作成メモ

```bash
# npm 7 以降は追加で `--` が必要
npm init vite@latest vue3-vite-tsx -- --template vue-ts

# Vue 3 に対応した vue-router をインストール
npm i vue-router@4

# JSX を使うプラグインをインストール
npm i @vitejs/plugin-vue-jsx
```

vite.config.ts に JSX を使用する設定を追加する。
vite.config.ts を以下のように修正する。

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ]
})
```
