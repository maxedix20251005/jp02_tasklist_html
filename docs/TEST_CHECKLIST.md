# Test Checklist (EN/JA)

## English
### List View
- Page loads and shows tasks.
- Search filters by task name.
- Category filter works.
- Sorting works for each column.
- Pagination works and preserves filters.

### Create / Edit
- Validation for required fields.
- % Complete accepts 0-100.
- Confirm page shows values.
- Save creates a new task.
- Edit updates existing task.

### Detail / Complete
- Detail view shows correct data.
- Complete page shows saved task.
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
- ページングが動作し、条件が維持される。

### 作成 / 編集
- 必須項目の検証が動作する。
- % Complete が 0-100 を受け付ける。
- 確認画面に入力内容が表示される。
- Save で新規作成される。
- Edit で既存タスクが更新される。

### 詳細 / 完了
- 詳細画面に正しい内容が表示される。
- 完了画面に保存内容が表示される。
- Edit リンクで正しいタスクが開く。

### 削除
- 削除確認ダイアログが出る。
- タスクが一覧から削除される。

### 永続性
- ブラウザを閉じて再起動。
- IndexedDB にデータが残る。
