# Technical Overview (EN/JA)

## English
### Architecture
- Single-page per view (multiple HTML pages).
- JavaScript handles data access and UI rendering.
- IndexedDB provides persistence.

### Key Flows
1. List
- Load categories/todos from IndexedDB.
- Apply filters, sorting, pagination.
- Render rows with computed RAG status.

2. Create/Edit -> Confirm -> Save
- Form validates required fields and ranges.
- Data saved as "pending" in IndexedDB state store.
- Confirm page reads "pending" and shows read-only values.
- Save writes to todos store and clears pending.

3. View
- Detail page loads a task by `no`.

### Error Handling
- Basic client-side validation.
- On IndexedDB errors, an alert is shown.

## 日本語
### アーキテクチャ
- 画面ごとに HTML を分割（複数ページ構成）。
- JavaScript がデータ処理と描画を担当。
- 永続化は IndexedDB。

### 主な処理フロー
1. 一覧
- IndexedDB からカテゴリ/タスクを取得。
- 検索/ソート/ページング適用。
- RAG を計算して表示。

2. 作成/編集 -> 確認 -> 保存
- 必須項目と範囲を検証。
- 入力を state ストアの "pending" に保存。
- 確認画面で読み取り専用表示。
- 保存時に todos へ書き込み、pending を削除。

3. 詳細
- no で該当タスクを取得して表示。

### エラーハンドリング
- クライアント側バリデーション。
- IndexedDB エラー時は alert 表示。
