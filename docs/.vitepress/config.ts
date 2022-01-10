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
            "/edit/": [
                {
                    text: "編集",
                    link: "/edit/",
                },
                {
                    text: "GitHubの使い方",
                    link: "/edit/github/",
                },
                {
                    text: "issueの使い方",
                    link: "/edit/github/issue",
                },
                {
                    text: "pull requestの使い方",
                    link: "/edit/github/pr",
                },
            ],
            "/programming/web/": [
                {
                    text: "Webサイト制作",
                    link: "/programming/web/",
                },
                {
                    text: "HTMLの基本",
                    link: "/programming/web/html",
                },
                {
                    text: "CSSの基本",
                    link: "/programming/web/css",
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
    head: [
        ["link", { rel: "icon", href: "/logo/favicon" }],
        ["meta", { name: "og:title", content: "海城コンピューター部公式ドキュメント" }],
        ["meta", { name: "og:description", content: "海城コンピューター部の部員向けドキュメント" }],
    ],
})
