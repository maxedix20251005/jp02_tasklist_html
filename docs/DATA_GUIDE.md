# Data Guide (EN/JA)

## English
### IndexedDB Overview
- Database: `tasklist_db`
- Stores: `todos`, `categories`, `state`

### Store Schemas
1. todos
- keyPath: `no`
- fields: taskName, assignedTo, status, priority, startDate, dueDate,
  percentComplete, description, categoryId, createdAt

2. categories
- keyPath: `id`
- fields: name, color

3. state
- keyPath: `key`
- used for temporary values: pending, draft

### Persistence
- Data is stored on disk in Chrome profile IndexedDB.
- Data remains after closing the browser.

### RAG Logic
- Completed -> Green
- Cancelled -> Red
- % Complete >= 80 -> Green
- % Complete >= 30 -> Amber
- Status On Hold or Merged -> Amber
- Otherwise -> Red

## 日本語
### IndexedDB 概要
- データベース: `tasklist_db`
- ストア: `todos`, `categories`, `state`

### スキーマ
1. todos
- 主キー: `no`
- 項目: taskName, assignedTo, status, priority, startDate, dueDate,
  percentComplete, description, categoryId, createdAt

2. categories
- 主キー: `id`
- 項目: name, color

3. state
- 主キー: `key`
- 一時保存: pending, draft

### 永続性
- Chrome プロファイル内の IndexedDB に保存。
- ブラウザを閉じても保持。

### RAG ロジック
- Completed -> Green
- Cancelled -> Red
- % Complete >= 80 -> Green
- % Complete >= 30 -> Amber
- Status が On Hold または Merged -> Amber
- それ以外 -> Red
