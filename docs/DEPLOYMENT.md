# Deployment / Distribution (EN/JA)

## English
### Option A: Open as Local Files (file://)
- Double-click `index.html`.
- Data stored in IndexedDB for file:// origin.
- Note: module scripts are avoided to prevent file:// restrictions.

### Option B: Local Server (recommended for sharing)
- Use any static server to host the files.
- Example: VSCode Live Server or simple HTTP server.
- Origin becomes http://localhost:xxxx, which is a different IndexedDB bucket.

### Sharing With Others
- Zip the entire folder `jp02_tasklist_html`.
- The recipient can open `index.html` or host via a local server.

## 日本語
### 方法A: ローカルファイルで開く（file://）
- `index.html` をダブルクリックで開く。
- データは file:// 用の IndexedDB に保存されます。
- file:// 制限を避けるため module スクリプトは使用していません。

### 方法B: ローカルサーバ（共有時推奨）
- 静的サーバでファイルを公開します。
- 例: VSCode Live Server や簡易 HTTP サーバ。
- origin が http://localhost:xxxx になり、別の IndexedDB 領域になります。

### 共有方法
- `jp02_tasklist_html` フォルダを丸ごと zip にする。
- 受け取り側は `index.html` を開くかローカルサーバで閲覧します。
