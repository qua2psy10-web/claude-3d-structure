// src/app.html（本体）から、ブラウザで直接開ける index.html を作る。
// 使い方: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
const app = readFileSync(new URL('./src/app.html', import.meta.url), 'utf8');
const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${app}
</body>
</html>
`;
writeFileSync(new URL('./index.html', import.meta.url), html);
console.log('index.html を更新しました');
