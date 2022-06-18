## TtpeScript で画像の拡張子(png,svg 等)を import 出来るようにする方法

### モジュールの型定義を行う

➀ src フォルダ配下に**types**フォルダを作成し、その中に**index.d.ts**ファイルを作成する。  
➁ **index.d.ts**ファイル内に**declare module '\*.拡張子'**
➂ 　**tsconfig.json**の**compilerOptions**

```
 "typeRoots": [➀
      "types",
      "node_modules/@types"
    ]
```

## svg 画像の色を変更する方法

svg フォルダのスタイルに直接記述  
背景**background**  
枠線**stroke**  
内部**fill**
