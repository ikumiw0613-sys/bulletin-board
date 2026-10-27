# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



## 学んだこと

- nvm use バージョンで使うNode.jsのバージョンを固定できる
- APIの取得にはfetchを使い、サーバからデータを取得したり、送信したりできる
- .thenで処理が成功した後に実行する処理を指定できる
- mapで配列の各要素に対して処理を行い、その結果から新しい配列を作成できる
- BrowserRouter, Routes, Routeを使うとページの遷移ができる
- RoutesのなかでRouteのページパスを作って、そのパスでどれを実行するか指定できる
- Linkを使うとパスを通じて遷移が行える
- Linkは通常のページ全体の再読み込みを行わずに画面を切り替えられる
- JSON.stringfy()でオブジェクトをJSON形式の文字列に変換できる
- useParams()でURLに含まれているパスパラメータを取得できる