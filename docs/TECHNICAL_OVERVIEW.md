# Technical Overview (EN/JA)

## English
### Architecture
- Single-page per view (multiple HTML pages).
- JavaScript handles data access and UI rendering.
- IndexedDB provides persistence.

### Key Flows
1. List
- Load categories/todos from IndexedDB.
- Apply filters, sorting, and fixed-size pagination (10 items per page).
- Render rows with computed RAG status.
- Keep the table header sticky during list scrolling.
- Show explicit active/inactive sort indicators.
- Clamp long list values for readability in dense table layout.
- Use shortened column labels and lighter destructive actions to reduce horizontal width pressure.
- Render `Prev` / `Next`, page-number links, and a total/range summary.
- Provide a CSV download button to export the current filtered list.
- Responsive layout adjusts toolbar wrapping and hides less-critical columns on narrow viewports to improve mobile usability.
- Render RAG as a compact circular color indicator.
- Apply due-date alerts in the list: overdue in red, due within 3 days in yellow.
- Support row selection, select-all for visible rows, and confirmed bulk deletion.
- If no rows match, render a guided empty state with recovery actions.

2. Create/Edit -> Confirm -> Save
- Form validates required fields, ranges, and date order.
- Invalid fields are highlighted and focus moves to the first invalid control.
- Inline helper text supports date and percent input.
- Live character counts are shown for title and description fields.
- Form controls use linked helper/error descriptions and clearer keyboard focus treatment.
- Data saved as "pending" in IndexedDB state store.
- Confirm page reads "pending" and shows read-only values grouped for scanability.
- Save writes to todos store and clears pending.

3. View
- Detail page loads a task by `no`.

4. Complete
- Complete page shows a save-success banner before the read-only task summary.

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
- 検索/ソート/固定ページング（1 ページ 10 件）を適用。
- RAG を計算して表示。
- 一覧スクロール時もテーブルヘッダーを固定表示する。
- ソート状態を分かりやすい記号で表示する。
- 長い文字列は一覧の可読性を保つために抑制表示する。
- 列ラベルの短縮と破壊的操作の軽量表示により、横幅の圧迫を抑えている。
- `Prev`、`Next`、ページ番号、総件数/表示範囲を表示する。
- RAG は小さな円形の色表示にしている。
- Due Date は、期限切れを赤、3日以内を黄で強調表示する。
- 行選択、表示中の全選択、確認付きの一括削除に対応する。
- 該当データがない場合は、次の行動を示す空状態を表示する。

2. 作成/編集 -> 確認 -> 保存
- 必須項目、入力範囲、日付の前後関係を検証。
- エラー項目は強調表示され、最初のエラー項目へフォーカス移動する。
- 日付と % Complete には補助テキストを表示する。
- title と description にはリアルタイムの文字数表示を行う。
- フォーム部品は補助文言・エラー文言と関連付けし、キーボードフォーカスを分かりやすくしている。
- 入力を state ストアの "pending" に保存。
- 確認画面では項目をグループ化して読み取り専用表示する。
- 保存時に todos へ書き込み、pending を削除。

3. 詳細
- no で該当タスクを取得して表示。

4. 完了
- 完了画面では保存成功バナーを表示したうえで保存内容を読み取り専用表示する。

### エラーハンドリング
- クライアント側バリデーション。
- IndexedDB エラー時は alert 表示。
