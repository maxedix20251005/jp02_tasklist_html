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
- Click the `Download CSV` button and verify a CSV file downloads with the expected columns (ID, TaskName, Owner, Status, Start Date, Due Date, Complete %).
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
- Click `Prev`, `Next`, and page numbers to verify result changes.
- Verify the current page is highlighted.
- Verify the summary shows total count and visible range.
- Scroll a long result set and verify the header remains visible.

### 日本語
- 1 ページ 10 件表示になることを確認。
- `Prev`、`Next`、ページ番号で結果が切り替わることを確認。
- 現在ページが強調表示されることを確認。
- 総件数と表示範囲が表示されることを確認。
- 一覧をスクロールしてもヘッダーが見えることを確認。

## 5. Mobile / Responsive Layout
### English
- Resize the browser to 600px width or less.
- Confirm the table hides and card view displays.
- Verify each card shows task name, owner, category, status, priority, dates, percent complete, and action buttons.
- Verify search and category filter work on card view.
- Verify sorting works on card view.
- Verify pagination works on card view.
- Resize back to desktop and confirm the table returns.
- Use mobile device emulation (DevTools) to verify the layout on iPhone, iPad, and other devices.
- Verify no horizontal scrolling occurs on mobile.
- Verify buttons and links remain accessible and not too close together.

### 日本語
- ブラウザを 600px 以下に縮小。
- テーブルが非表示になり、カードビューが表示されることを確認。
- 各カードにタスク名、担当者、カテゴリ、ステータス、優先度、日付、完了率、操作ボタンが表示されることを確認。
- カードビューで検索とカテゴリ絞り込みが機能することを確認。
- カードビューでソートが機能することを確認。
- カードビューでページングが機能することを確認。
- ブラウザをデスクトップサイズに拡大し、テーブルが戻ることを確認。
- モバイルデバイスエミュレーション（DevTools）を使用して、iPhone、iPad、その他デバイスでレイアウトを確認。
- モバイルで横スクロールが発生しないことを確認。
- ボタンとリンクが操作可能で、間隔が適切であることを確認。

## 6. Create New Task
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

## 7. Validation
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

## 8. Edit Task
### English
- Open task from list and click Edit.
- Modify values and save.
- Verify changes appear in list and detail.

### 日本語
- 一覧からタスクを開き Edit へ。
- 値を変更し保存。
- 一覧と詳細に反映されることを確認。

## 9. Delete Task
### English
- Click Delete and confirm prompt.
- Verify task removed from list.

### 日本語
- Delete 確認ダイアログが出ることを確認。
- 一覧から削除されることを確認。

## 9. Responsive Layout
### English
- On desktop (> 600px viewport width), verify the table view is displayed.
- On tablet/narrow desktop (900px-600px), verify toolbar wraps and non-critical columns hide.
- On mobile (≤ 600px viewport width), verify:
  - Table is hidden.
  - Card view appears showing each task as a card.
  - Each card displays task name, ID, owner, category, status, priority, dates, percent complete, and Edit/Delete buttons.
  - Input controls (search, category dropdown, buttons) do not cause horizontal overflow.
  - Pagination buttons are visible and functional.
  - Bulk delete functionality works with card-based checkboxes (if applicable).
- Open DevTools and test using device emulation (iPhone, iPad, etc.).
- Verify the layout is touch-friendly on mobile and does not require horizontal scrolling.

### 日本語
- デスクトップ（ビューポート幅 > 600px）でテーブルビューが表示されることを確認。
- タブレット/狭いデスクトップ（900px-600px）でツールバーが折り返され、重要度の低い列が非表示になることを確認。
- モバイル（ビューポート幅 ≤ 600px）で以下を確認:
  - テーブルが非表示。
  - カードビューがタスクをカード形式で表示。
  - 各カードにタスク名、ID、担当者、カテゴリ、ステータス、優先度、日付、完了率、Edit/Delete ボタンが表示される。
  - 入力欄（検索、カテゴリドロップダウン、ボタン）が横スクロールを起こさない。
  - ページングボタンが表示され、機能する。
  - 一括削除機能がカードビューで機能する。
- DevTools を開いてデバイスエミュレーション（iPhone、iPad など）でテストする。
- レイアウトがモバイルでタッチフレンドリーで、横スクロール不要であることを確認。

## 10. Persistence
### English
- Close browser and reopen.
- Verify data persists in IndexedDB.

### 日本語
- ブラウザを閉じて再起動。
- IndexedDB のデータが保持されることを確認。
