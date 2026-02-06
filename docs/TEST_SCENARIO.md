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

### 日本語
- タスク名検索が反映されることを確認。
- カテゴリ絞り込みが反映されることを確認。
- 検索とカテゴリの併用が反映されることを確認。

## 3. Sorting
### English
- Sort by each column and confirm ascending/descending.
- Verify sort indicator changes.

### 日本語
- 各列で昇順/降順が正しく切り替わることを確認。
- ソート表示が切り替わることを確認。

## 4. Pagination
### English
- Change page size and verify results count.
- Move between pages and confirm results.

### 日本語
- 表示件数変更が反映されることを確認。
- ページ移動が反映されることを確認。

## 5. Create New Task
### English
- Open New Task form.
- Enter valid data and proceed to Confirm.
- Save and verify new task appears in list.

### 日本語
- New Task で作成フォームを開く。
- 有効な入力で Confirm へ進む。
- Save 後に一覧へ反映されることを確認。

## 6. Validation
### English
- Leave required fields empty and verify error messages.
- Enter invalid percent and verify error message.

### 日本語
- 必須項目未入力でエラー表示を確認。
- % Complete の範囲外入力でエラー表示を確認。

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
