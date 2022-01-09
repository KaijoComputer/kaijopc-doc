import { defineConfig } from "vitepress"

export default defineConfig({
    lang: "ja-JP",
    title: "海城コンピューター部公式ドキュメント",
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
                    text: "プログラミング",
                    link: "/introduction/programming",
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
        logo: "/logo.webp",
    },
})
