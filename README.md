# NCDC 株式会社　フロントエンド技術課題

### ❒ 使用言語・フレームワーク

HTML/CSS/JavaScript/React/Typescript  
<br>

### ❒ 開発環境

Wibndows11  
Visual Sutudio Code  
<br>

### ❒ 設計に関して

アトミックデザインをベースにコンポーネントを意識して設計しました  
<br>

### ❒ 課題・反省点

- 型定義が不完全である
- useEffect 内での axios の初回レンダリングする際にオブジェクトが undefided になり warnig が発生する
- 子コンポーネント間での処理の操作が出来なかったためコンポートが肥大化してしまった
  <br>

### ❒ 制作中に気づいた点

- svg 画像のスタイルをを変更する方法 ( 画像フォルダのスタイルに直接記入 )

```
背景 **background**
枠線 **stroke**
内部 **fill**
```

<br>

- TypeScript で画像の拡張子(png,svg 等)を import 出来るようにする方法

```
手順
1. src フォルダ配下にtypesフォルダを作成し、その中にindex.d.tsファイルを作成する
2. index.d.tsファイル内にdeclare module '\*.拡張子'
3. tsconfig.jsonのcompilerOptionsを設定
```

```
"typeRoots": [
  "types",
  "node_modules/@types"
 ]
```

<br>

- axios に関して

```
1. postがオブジェクトの場合引数を設定する必要がある
2. メソッドは続けて使用することが可能
   例 postしたあとにgetすることで非同期処理となる
```

<br>

- props に関して

```
親要素から子要素にprops(値)を渡すことができる
```

```
例

親が子コンポーネントのボタンの中にhogeを渡す
---
<ChildrenButton>hoge<ChirdlenButton>
---

子は受け取ったhogeをpropsとして受け取り{children}で使う
---
<ChildrenButton>{children}<ChirdlenButton>
---
```

<br>

- ルーティングに関して

```
遷移先の指定
<Router>
  <Routes>
    <Route path="ルーティングのpathを指定" element={描画したいコンポーネント}>
  </Routes>
</Router>


<Link to="ルーティングのpathを設定">
  <button>hoge<button>
</Link>
```
