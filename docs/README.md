# Tasklist HTML App Documentation (EN/JA)

## Overview (EN)
This package contains a pure HTML/CSS/JavaScript tasklist application. There is no backend server. All data is stored in the browser using IndexedDB. The app provides list/search/sort/pagination and CRUD (create, view, edit, delete) for tasks.

## 概要 (JA)
本パッケージは HTML/CSS/JavaScript のみで構成されたタスクリストアプリです。バックエンドはありません。データはブラウザ内の IndexedDB に保存されます。一覧、検索、ソート、ページング、CRUD（作成・表示・編集・削除）を提供します。

## Quick Start (EN)
1. Open `index.html` in a browser.
2. Use the toolbar to search or filter.
3. Click `New Task` to create a task.
4. Follow Confirm -> Save.

## クイックスタート (JA)
1. `index.html` をブラウザで開きます。
2. ツールバーで検索・絞り込みを行います。
3. `New Task` で新規作成します。
4. Confirm -> Save で保存します。

## File Structure (EN)
- `index.html` Task list view
- `create.html` Create/Edit form
- `confirm.html` Confirmation screen
- `complete.html` Save completion screen
- `view.html` Task detail view
- `assets/app.js` Main logic
- `assets/styles.css` Styles
- `docs/` Documentation

## 構成 (JA)
- `index.html` 一覧画面
- `create.html` 作成・編集画面
- `confirm.html` 確認画面
- `complete.html` 保存完了画面
- `view.html` 詳細画面
- `assets/app.js` メインロジック
- `assets/styles.css` スタイル
- `docs/` ドキュメント

## Data Storage (EN)
- IndexedDB database name: `tasklist_db`
- Stores: `todos`, `categories`, `state`
- Data persists after closing the browser

## データ保存 (JA)
- IndexedDB データベース名: `tasklist_db`
- ストア: `todos`, `categories`, `state`
- ブラウザを閉じてもデータは保持されます

## Requirements (EN)
- Modern browser (Chrome/Edge/Firefox)
- JavaScript enabled

## 必要条件 (JA)
- モダンブラウザ（Chrome/Edge/Firefox）
- JavaScript 有効

## Included Documents (EN)
- `DESIGN_GUIDELINES.md`
- `USER_GUIDE.md`
- `DATA_GUIDE.md`
- `TECHNICAL_OVERVIEW.md`
- `DEPLOYMENT.md`
- `LIMITATIONS.md`
- `TEST_CHECKLIST.md`
- `TEST_SCENARIO.md`
- `TEST_CASES.md`
- `RELEASE_NOTES.md`
- `LICENSE_USAGE.md`
- `SUPPORT_CONTACT.md`
- `DATA_RESET.md`
- `SECURITY_PRIVACY.md`

## 含まれるドキュメント (JA)
- `DESIGN_GUIDELINES.md`
- `USER_GUIDE.md`
- `DATA_GUIDE.md`
- `TECHNICAL_OVERVIEW.md`
- `DEPLOYMENT.md`
- `LIMITATIONS.md`
- `TEST_CHECKLIST.md`
- `TEST_SCENARIO.md`
- `TEST_CASES.md`
- `RELEASE_NOTES.md`
- `LICENSE_USAGE.md`
- `SUPPORT_CONTACT.md`
- `DATA_RESET.md`
- `SECURITY_PRIVACY.md`
