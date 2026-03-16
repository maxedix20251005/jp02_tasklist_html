# Test Checklist (EN/JA)

## English
### List View
- Page loads and shows tasks.
- Search filters by task name.
- Category filter works.
- Sorting works for each column.
- Active sort indicator is visible.
- Table header remains visible while scrolling.
- Long task names and assignee names remain readable without breaking layout.
- Shortened list labels render correctly.
- Edit remains prominent while Delete is visually lighter.
- RAG renders as a circle with color-only meaning.
- Pagination shows 10 items per page.
- `前へ`, `次へ`, page links, active-page highlight, and total/range summary work correctly.
- Overdue due dates are highlighted in red.
- Due dates within 3 days are highlighted in yellow.
- Row checkboxes can be selected individually.
- Header checkbox selects and clears all visible rows.
- `選択した項目を削除` shows a confirmation dialog and deletes selected records.
- Empty result state shows reset and create actions.

### Create / Edit
- Validation for required fields.
- % Complete accepts 0-100.
- Due Date cannot be earlier than Start Date.
- Invalid fields are highlighted and the first invalid field receives focus.
- Task Name and Description show live character counts.
- Date and percent fields show helper guidance.
- Keyboard focus is clearly visible on buttons, links, and sortable headers.
- Helper and error messages are associated with relevant form controls.
- Confirm page shows values in grouped sections.
- Save creates a new task.
- Edit updates existing task.

### Detail / Complete
- Detail view shows correct data.
- Complete page shows saved task with success banner.
- Edit links open the correct task.

### Delete
- Delete prompt appears.
- Task is removed from list.

### Persistence
- Close browser and reopen.
- Data remains in IndexedDB.

## 日本語
### 一覧画面
- ページ読み込みでタスクが表示される。
- Search でタスク名が絞り込まれる。
- Category の絞り込みが動作する。
- 各列のソートが動作する。
- アクティブなソート表示が見える。
- スクロール時もテーブルヘッダーが見える。
- 長いタスク名や担当者名でもレイアウトが崩れない。
- 短縮ラベルが正しく表示される。
- Edit が主操作、Delete が軽い表示になっている。
- RAG が色のみの円形表示になっている。
- ページングは 1 ページ 10 件で表示される。
- `前へ`、`次へ`、ページ番号、アクティブページ表示、総件数/表示範囲が正しく動作する。
- 期限切れの Due Date が赤で表示される。
- 3日以内の Due Date が黄で表示される。
- 各行のチェックボックスを個別選択できる。
- ヘッダーのチェックボックスで表示中の全選択/解除ができる。
- `選択した項目を削除` で確認ダイアログ後に選択レコードが削除される。
- 該当データなしの状態でリセットと新規作成アクションが表示される。

### 作成 / 編集
- 必須項目の検証が動作する。
- % Complete が 0-100 を受け付ける。
- Due Date が Start Date より前にならない。
- エラー時に対象フィールドが強調表示され、最初のエラー項目にフォーカスする。
- Task Name と Description に文字数ガイダンスが表示される。
- 日付項目と % Complete に補助ガイダンスが表示される。
- ボタン、リンク、ソート見出しでキーボードフォーカスが見やすい。
- 補助文言とエラー文言が対象フォーム項目に関連付いている。
- 確認画面に入力内容がグループ化されて表示される。
- Save で新規作成される。
- Edit で既存タスクが更新される。

### 詳細 / 完了
- 詳細画面に正しい内容が表示される。
- 完了画面に成功バナー付きで保存内容が表示される。
- Edit リンクで正しいタスクが開く。

### 削除
- 削除確認ダイアログが出る。
- タスクが一覧から削除される。

### 永続性
- ブラウザを閉じて再起動。
- IndexedDB にデータが残る。
