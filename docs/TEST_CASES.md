# Test Cases (EN/JA)

## TC-01 Launch App
### English
- Steps: Open `index.html`.
- Expected: Task list loads without errors.

### 日本語
- 手順: `index.html` を開く。
- 期待結果: 一覧がエラーなく表示される。

## TC-02 Default Data Seed
### English
- Steps: Clear IndexedDB, reload page.
- Expected: Default tasks appear.

### 日本語
- 手順: IndexedDB を削除して再読み込み。
- 期待結果: 初期データが表示される。

## TC-03 Search
### English
- Steps: Enter a task name in Search and submit.
- Expected: Only matching tasks shown.

### 日本語
- 手順: Search にタスク名を入力して実行。
- 期待結果: 該当タスクのみ表示。

## TC-04 Category Filter
### English
- Steps: Select a category.
- Expected: Only tasks in that category shown.

### 日本語
- 手順: カテゴリを選択。
- 期待結果: 該当カテゴリのみ表示。

## TC-05 Sorting
### English
- Steps: Click Task Name header twice.
- Expected: Sort asc then desc.

### 日本語
- 手順: Task Name を2回クリック。
- 期待結果: 昇順/降順が切り替わる。

## TC-06 Pagination
### English
- Steps: Open page 1, click page 2, then click `Prev` / `Next`.
- Expected: 10 items are shown per page, the active page changes, and the summary updates.

### 日本語
- 手順: 1ページ目を開き、ページ2、`Prev`、`Next` を操作。
- 期待結果: 1ページ10件表示、現在ページ強調、サマリ更新が行われる。

## TC-06A Due Date Alert
### English
- Steps: Prepare one task with a past due date and one task due within 3 days.
- Expected: Past due date is highlighted red, due-soon date is highlighted yellow.

### 日本語
- 手順: 期限切れのタスクと、3日以内期限のタスクを用意する。
- 期待結果: 期限切れは赤、3日以内は黄で強調表示される。

## TC-07 Create Task (Valid)
### English
- Steps: New Task -> fill valid data -> Confirm -> Save.
- Expected: Task appears in list.

### 日本語
- 手順: New Task で入力 -> Confirm -> Save。
- 期待結果: 一覧に追加される。

## TC-08 Create Task (Validation)
### English
- Steps: Leave Task Name empty -> Confirm.
- Expected: Error message shown.

### 日本語
- 手順: Task Name 未入力で Confirm。
- 期待結果: エラーメッセージ表示。

## TC-09 Edit Task
### English
- Steps: Open existing task -> Edit -> change fields -> Save.
- Expected: Updated values displayed.

### 日本語
- 手順: 既存タスク編集 -> 保存。
- 期待結果: 値が更新される。

## TC-10 Delete Task
### English
- Steps: Click Delete -> confirm.
- Expected: Task removed from list.

### 日本語
- 手順: Delete 実行 -> 確認。
- 期待結果: タスクが削除される。

## TC-10A Bulk Delete
### English
- Steps: Select multiple row checkboxes, optionally use select-all, click `Delete selected`, then confirm.
- Expected: Only the selected records are deleted.

### 日本語
- 手順: 複数行を選択し、必要に応じて全選択を使い、`Delete selected` を実行して確認する。
- 期待結果: 選択されたレコードのみ削除される。

## TC-11 Persistence
### English
- Steps: Add task -> close browser -> reopen.
- Expected: Task still exists.

### 日本語
- 手順: タスク追加 -> ブラウザ再起動。
- 期待結果: タスクが残っている。
