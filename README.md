png画像をpdfファイルに変換するツール

## インストール
GitHubよりクローンして npm install。node の v12.10.0 で動作確認しています。必要なモジュールが一回で入らないときがあるので、そのときは個別に以下のモジュールをインストールしてください。

- images-to-pdf

## 実行方法
index.jsと同じ階層に`img`と`pdf`いうディレクトリを作り、`img`に変換したいpngファイルを格納してください。その後、以下コマンドで実行します。

- node index.js

## 期待する結果
- `pdf`にpng画像と同じ名前のpdfファイルが格納される