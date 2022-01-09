import { defineConfig } from "vitepress"
import "dotenv/config"

export default defineConfig({
    lang: "ja-JP",
    title: "ドキュメント",
    description: "海城コンピューター部の部員向けドキュメント",
    markdown: {
        config: (md) => {},
        lineNumbers: true,
    },
    themeConfig: {
        docsDir: "docs",
        sidebar: {
            "/introduction/": [
                {
                    text: "ようこそ！",
                    link: "/introduction/",
                },
                {
                    text: "プログラミング",
                    link: "/introduction/programming",
                },
                {
                    text: "このサイトについて",
                    link: "/introduction/site",
                },
            ],
        },
        nav: [
            { text: "プログラミング", link: "/programming/" },
            { text: "3DCG", link: "/3dcg/" },
            { text: "音楽制作", link: "/music/" },
            {
                text: "リリースノート",
                link: "https://github.com/KaijoComputer/kaijopc-doc/main/CHANGELOG.md",
            },
        ],
        editLinks: true,
        editLinkText: "GitHubでこのページを編集",
        repo: "KaijoComputer/kaijopc-doc",
        docsBranch: "main",
        lastUpdated: "最終更新",
        logo: "/logo/full-logo.svg",
        algolia: {
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: "page",
        },
    },
})
