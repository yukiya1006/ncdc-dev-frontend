# NCDC 株式会社　フロントエンド課題

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
- .tsx 拡張子だとエラーが出てしまうため jsx で書いたファイルがある(/components/molucules/sidebar/MenuArea.jsx)
- useEffect 内での axios の初回レンダリングする際にオブジェクトが undefided になり warnig が発生する
- 子コンポーネント間での処理の操作が出来なかったためコンポートが肥大化してしまった
  <br>

### ❒ 制作中に気づいた点

- svg 画像のスタイルをを変更する方法 ( 画像フォルダのスタイルに直接記入 )  
  背景 **background**  
  枠線 **stroke**  
  内部 **fill**  
  <br>

- TypeScript で画像の拡張子(png,svg 等)を import 出来るようにする方法

1. src フォルダ配下に**types**フォルダを作成し、その中に**index.d.ts**ファイルを作成する。
2. **index.d.ts**ファイル内に**declare module '\*.拡張子'**
3. **tsconfig.json**の**compilerOptions**

```
 "typeRoots": [
      "types",
      "node_modules/@types"
    ]
```

<br>
