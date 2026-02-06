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
- Steps: Set page size to 10, click page 2.
- Expected: Items change and summary updates.

### 日本語
- 手順: 表示件数10、ページ2へ移動。
- 期待結果: 表示内容とサマリが更新。

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

## TC-11 Persistence
### English
- Steps: Add task -> close browser -> reopen.
- Expected: Task still exists.

### 日本語
- 手順: タスク追加 -> ブラウザ再起動。
- 期待結果: タスクが残っている。
