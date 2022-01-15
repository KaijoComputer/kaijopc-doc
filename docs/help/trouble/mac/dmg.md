---
description: DMG を解凍できない"不具合"の解決法
---

# DMG を解凍できない"不具合"の解決法

配布 Mac では **なぜか** DMG ファイルが解凍できない **"不具合"** が存在します。

以下の方法で解決できます。

## 解決法 1 (推奨)

### 手順 1 解凍

7zip を利用することで dmg を解凍することができます。

ダウンロードは[公式サイト](https://sevenzip.osdn.jp/download.html)や Homebrew のどちらでも構いませんが、公式サイトからのダウンロードの場合、署名が不正なので [署名が不正なアプリを実行する](/help/trouble/mac/sign)を参考にして修正が必要です。

7zip を入手したら以下のコマンドを実行します。
この例では 7zip コマンドは`7zz`とし、`~/Downloads/Blender.dmg`を解凍しています。

```bash
7zz x ~/Downloads/Blender.dmg -o/Users/$(whoami)/Downloads/
```

これを実行すると、`~/Downloads`直下に`Blender`という名前のフォルダが作成され、そこに dmg が解凍されます。

### 手順 2 権限変更

このままでは 9 割のアプリを実行できないので、次の方法で権限を変更します。
解凍したアプリは`~/Downloads/Blender/Blender.app`とします。

```bash
find ~/Downloads/Blender/Blender.app -type d -exec chmod 777 \{\} \; # 両方実行すること
find ~/Downloads/Blender/Blender.app -type f -exec chmod 777 \{\} \; # まとめてコピペでも可
```

サイズの大きいアプリではこれの実行に結構時間がかかることがあります。

これで 9 割のアプリは実行できるようになります。
しかし、これでもまだ一部のアプリは正常に起動できません。

Electron 系のアプリは次の項目を参考にして修正してください。Electron でないのに開けないアプリはもうお手上げなので、解決法 2 を参考にしてください。

### 起動できないアプリの修正 - Electron

次のレポジトリをダウンロードして、README に従って`Electron Framework.framework.zip`を解凍してください。

[Neutron(p1atdev) - GitHub](https://github.com/p1atdev/Neutron)

対象のアプリ(ここでは`~/Downloads/Descript/Describe.app`)の Electron フレームワークを今ダウンロードしたやつと置き換えます。

`~/Downloads/Descript/Descript.app/Contents/Frameworks/Electron Framework.framework`に Electron があるので、これを置き換えてください。

![DescriptのElectronの場所](/assets/images/help/trouble/mac/dmg/descript-electron.png)

## 簡易実行スクリプト DMGer

この解凍処理が簡単にできるようにしたものを作ったので参照してみてください。

[DMGer(p1atdev) - GitHub](https://github.com/p1atdev/DMGer)
