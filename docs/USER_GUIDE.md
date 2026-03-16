# User Guide (EN/JA)

## 1. Task List Page (index.html)
### English
- Shows all tasks in a table.
- Use Search to filter by task name.
- Use Category dropdown to filter by category.
- Click column headers to sort.
- Active sort columns show clearer sort direction indicators.
- The table header stays visible while scrolling large result sets.
- Long task names and assignee names are compacted for readability.
- Desktop labels are shortened for readability, such as `Owner`, `Start`, `Due`, and `%`.
- The Actions column uses a stronger `Edit` action and a lighter `Delete` action to reduce visual weight.
- The layout adjusts for smaller screens: toolbar wraps, and non-critical columns are hidden to keep the table readable.
- RAG is shown as a circular color indicator without text.
- Pagination shows 10 items per page with `Prev`, `Next`, page links, and a total/range summary.
- A `Download CSV` button exports the current filtered list as a CSV file (columns: ID, TaskName, Owner, Status, Start Date, Due Date, Complete %, Category, Description).
- Overdue due dates are highlighted in red, and due dates within 3 days are highlighted in yellow.
- Each row has a checkbox, and the header checkbox selects or clears all visible rows.
- `Delete selected` deletes the selected records after confirmation.
- When no tasks match, the page shows a guided empty state with reset and create actions.
- Click a task name to open the detail view.
- Click Edit or Delete from the Actions column.

### 日本語
- タスク一覧をテーブルで表示します。
- Search でタスク名検索ができます。
- Category でカテゴリ絞り込みができます。
- 列ヘッダーで並び替えができます。
- ソート中の列は方向が分かりやすい表示になります。
- 件数が多い場合でもテーブルヘッダーを固定表示します。
- 長いタスク名や担当者名は読みやすく整理して表示します。
- 一覧では `Owner`、`Start`、`Due`、`%` のようにラベルを短縮しています。
- Actions 列は `Edit` を主操作、`Delete` を軽い表示にして横幅と視認性を調整しています。
- RAG は文字なしの円形カラー表示にしています。
- ページングは 1 ページ 10 件固定で、`Prev`、`Next`、ページ番号、総件数/表示範囲を表示します。
- `Download CSV` ボタンで現在の絞り込み結果を CSV ファイルとして出力します（列: ID、TaskName、Owner、Status、Start Date、Due Date、Complete %、Category、Description）。
- レイアウトは小さい画面でも読みやすくなるように自動調整され、重要度の低い列は省略されます。
- 期限切れの Due Date は赤、3日以内の Due Date は黄で強調表示します。
- 各行にチェックボックスがあり、ヘッダーのチェックボックスで表示中の行を一括選択/解除できます。
- `Delete selected` は確認ダイアログの後に選択レコードを一括削除します。
- 条件に一致するタスクがない場合は、リセットと新規作成を案内する空状態を表示します。
- タスク名をクリックすると詳細画面へ移動します。
- Actions の Edit / Delete を使用します。

## 2. Create/Edit Page (create.html)
### English
- New Task opens empty form.
- Edit loads existing data.
- Required fields: Task Name, Assigned To.
- % Complete accepts 0-100.
- Due Date must be on or after Start Date.
- Invalid fields are highlighted and focus moves to the first field with an error.
- Task Name and Description show live character guidance.
- Start Date, Due Date, and % Complete display inline helper guidance.
- Keyboard focus is shown clearly on interactive controls.
- Form fields are linked to helper and error messages for clearer accessibility support.
- Confirm button validates and moves to Confirm page.

### 日本語
- New Task は空のフォームが表示されます。
- Edit は既存データを読み込みます。
- 必須: Task Name, Assigned To。
- % Complete は 0-100 を受け付けます。
- Due Date は Start Date 以降である必要があります。
- エラー時は該当フィールドが強調表示され、最初のエラー項目にフォーカスが移動します。
- Task Name と Description は文字数ガイダンスをリアルタイム表示します。
- Start Date、Due Date、% Complete には補助ガイダンスが表示されます。
- キーボード操作時のフォーカス表示を明確にしています。
- フォーム項目は補助文言とエラーメッセージに関連付けられています。
- Confirm で検証して確認画面へ移動します。

## 3. Confirm Page (confirm.html)
### English
- Shows read-only values grouped by Basic Information, Schedule, and Progress.
- Save persists the task to IndexedDB.
- Back returns to the form with previous inputs.

### 日本語
- 入力内容を Basic Information、Schedule、Progress の単位で読み取り専用表示します。
- Save で IndexedDB に保存します。
- Back でフォームに戻り入力を保持します。

## 4. Complete Page (complete.html)
### English
- Shows saved task with a success summary banner.
- Back returns to list.
- Edit opens the same task in edit mode.

### 日本語
- 保存済みタスクを成功メッセージ付きで表示します。
- Back で一覧に戻ります。
- Edit で同じタスクを編集します。

## 5. Detail Page (view.html)
### English
- Shows task detail (read-only).
- Back returns to list.
- Edit opens task in edit mode.

### 日本語
- タスク詳細を表示します（読み取り専用）。
- Back で一覧に戻ります。
- Edit で編集画面に移動します。
