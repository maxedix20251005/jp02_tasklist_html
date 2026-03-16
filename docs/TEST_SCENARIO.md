# Test Scenario (EN/JA)

## 1. App Launch
### English
- Open `index.html` and confirm the list renders without errors.
- Confirm default tasks appear when the DB is empty.

### 日本語
- `index.html` を開き、一覧がエラーなく表示されることを確認。
- DB が空の場合に初期データが表示されることを確認。

## 2. Search & Filter
### English
- Search by task name and verify results update.
- Filter by category and verify results update.
- Combine search + category filter and verify.
- Use a filter combination with no matches and verify the empty state actions appear.
- Verify overdue due dates appear in red and due-soon dates appear in yellow.
- Select multiple rows and verify bulk delete removes only the checked records after confirmation.

### 日本語
- タスク名検索が反映されることを確認。
- カテゴリ絞り込みが反映されることを確認。
- 検索とカテゴリの併用が反映されることを確認。
- 該当データなし条件で、空状態のアクションが表示されることを確認。
- 期限切れの Due Date が赤、3日以内の Due Date が黄で表示されることを確認。
- 複数行を選択し、確認後にチェックされたレコードのみ一括削除されることを確認。

## 3. Sorting
### English
- Sort by each column and confirm ascending/descending.
- Verify sort indicator changes.
- Verify the active sort column remains visually distinct.
- Confirm shortened header labels still map to the correct sort behavior.
- Verify RAG appears as a circular color-only indicator.

### 日本語
- 各列で昇順/降順が正しく切り替わることを確認。
- ソート表示が切り替わることを確認。
- アクティブなソート列が視覚的に区別できることを確認。
- 短縮された見出しでも正しい列でソートされることを確認。
- RAG が円形の色表示になっていることを確認。

## 4. Pagination
### English
- Confirm the list shows 10 items per page.
- Click `前へ`, `次へ`, and page numbers to verify result changes.
- Verify the current page is highlighted.
- Verify the summary shows total count and visible range.
- Scroll a long result set and verify the header remains visible.

### 日本語
- 1 ページ 10 件表示になることを確認。
- `前へ`、`次へ`、ページ番号で結果が切り替わることを確認。
- 現在ページが強調表示されることを確認。
- 総件数と表示範囲が表示されることを確認。
- 一覧をスクロールしてもヘッダーが見えることを確認。

## 5. Create New Task
### English
- Open New Task form.
- Enter valid data and proceed to Confirm.
- Verify Confirm groups values into Basic Information, Schedule, and Progress.
- Save and verify success banner appears and the new task appears in list.

### 日本語
- New Task で作成フォームを開く。
- 有効な入力で Confirm へ進む。
- Confirm 画面で Basic Information、Schedule、Progress に分かれて表示されることを確認。
- Save 後に成功バナーが表示され、一覧へ反映されることを確認。

## 6. Validation
### English
- Leave required fields empty and verify error messages.
- Enter invalid percent and verify error message.
- Enter Due Date earlier than Start Date and verify error message.
- Confirm the first invalid field receives focus and is highlighted.
- Type in Task Name and Description and verify live character counts update.
- Verify helper guidance is visible for Start Date, Due Date, and % Complete.
- Navigate the form and action controls with keyboard only and verify focus is clearly visible.
- Inspect a field with an error and confirm its helper/error text is associated with the control.

### 日本語
- 必須項目未入力でエラー表示を確認。
- % Complete の範囲外入力でエラー表示を確認。
- Due Date を Start Date より前にしてエラー表示を確認。
- 最初のエラー項目にフォーカスし、強調表示されることを確認。
- Task Name と Description 入力時に文字数表示が更新されることを確認。
- Start Date、Due Date、% Complete に補助ガイダンスが表示されることを確認。
- キーボード操作のみで移動し、フォーカス表示が明確であることを確認。
- エラーのある項目で、補助文言とエラー文言が対象コントロールに紐付いていることを確認。

## 7. Edit Task
### English
- Open task from list and click Edit.
- Modify values and save.
- Verify changes appear in list and detail.

### 日本語
- 一覧からタスクを開き Edit へ。
- 値を変更し保存。
- 一覧と詳細に反映されることを確認。

## 8. Delete Task
### English
- Click Delete and confirm prompt.
- Verify task removed from list.

### 日本語
- Delete 確認ダイアログが出ることを確認。
- 一覧から削除されることを確認。

## 9. Persistence
### English
- Close browser and reopen.
- Verify data persists in IndexedDB.

### 日本語
- ブラウザを閉じて再起動。
- IndexedDB のデータが保持されることを確認。
