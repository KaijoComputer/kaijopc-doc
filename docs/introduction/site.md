# このサイトについて

## 使用している技術

### Vitepress

このサイトは[Vitepress](https://vitepress.vuejs.org/)を使って制作されています。
GitHub リポジトリは https://github.com/vuejs/vitepress です。

Vitepress は Vuepress の弟的な存在で、Vite が使用されているためより高速にビルドができます。

また、Vue3 という最新の Vue.js を利用できるためモダンでシンプルな記法を使うことができます。

```vue
<script lang="ts" setup>
const count = ref(0)
</script>

<template>
    <button @click="count++">Count: {{ count }}</button>
</template>
```

Vue2 話者や React 話者にしかこのありがたみはわからないかもしれませんが、結構シンプルで楽です。
~~Svelte はずるいので持ち出してはいけません。~~

### Algolia

いい感じの検索を高速にできる Algolia という検索エンジンを利用しています。
なんと、Vitepress に付属しており、API Key を設定するだけで使えてしまうという優れもの。
時代は Algolia です。ただ、API Key を直で書いて GitHub の Public リポジトリに公開するとかいうこのサイトの創設者みたいな馬鹿なことはしないように。
