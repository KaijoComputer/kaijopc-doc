import { defineConfig } from "vitepress"

export default defineConfig({
    lang: "ja-JP",
    title: "海城コンピューター部公式ドキュメント",
    description: "海城コンピューター部の部員向けドキュメント",
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        docsDir: "docs",
        sidebar: {
            "/": "auto",
        },
        nav: [
            {
                text: "Web Site",
                link: "/",
            },
        ],
        editLinks: true,
        editLinkText: "GitHubでこのページを編集",
        repo: "KaijoComputer/kaijopc-doc",
        docsBranch: "main",
    },
})
