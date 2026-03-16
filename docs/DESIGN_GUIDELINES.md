# Design Guidelines (Color Scheme)

## English

### Purpose
This document defines the current UI color scheme used by this project after the visual refresh.  
It should be used as the shared reference when discussing design updates, future screens, and UI consistency.

### Design Direction
- Use a neutral grayscale foundation for most surfaces and text.
- Use blue as the primary accent color.
- Use red only for destructive actions and error states.
- Use green and amber only for status or progress meaning, not as broad page themes.

### Core Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#0062C4` | Primary action, active state, key emphasis |
| `--color-primary-dark` | `#004C98` | Primary hover state |
| `--color-danger` | `#D62D2D` | Delete button, errors, destructive action |
| `--color-danger-dark` | `#B52222` | Danger hover state |
| `--color-text` | `#22262A` | Main text |
| `--color-text-muted` | `#56616C` | Secondary text, labels, table headers |
| `--color-text-soft` | `#7B8995` | Placeholder and soft helper text |
| `--color-border` | `#CBD2D6` | Default border |
| `--color-border-strong` | `#B2BCC3` | Stronger border where needed |
| `--color-surface` | `#FFFFFF` | Main card and control background |
| `--color-surface-muted` | `#F6F8F9` | Read-only field and muted surface |
| `--color-surface-alt` | `#EEF3F8` | App background support tone |
| `--color-surface-accent` | `#E8F1FB` | Blue-tinted accent surface |
| `--color-success` | `#2F7D32` | Positive state, green RAG |
| `--color-warning` | `#D59B11` | Warning state, amber RAG |

### Usage Rules

#### 1. Primary Blue
- Use blue for the main CTA such as `Search`, `New Task`, `Confirm`, `Save`, and `Edit`.
- Use blue for focused inputs, active pagination, and hover emphasis on important interactive elements.
- Do not use blue as a large flat page background outside the approved hero/header area.

#### 2. Neutral Base
- Use white and light gray for cards, tables, form controls, and read-only fields.
- Keep the main reading experience neutral and calm.
- Prefer muted text for labels and supporting UI, while preserving strong contrast for content.

#### 3. Danger Red
- Use red only for destructive actions like `Delete` and for validation errors.
- Do not use red as a page theme or decorative accent.

#### 4. Semantic Colors
- Use green only for successful/healthy meaning such as completed status or green RAG.
- Use amber only for caution states such as `On Hold` or amber RAG.
- Do not use semantic colors as general branding colors.

### Status and Badge Guidance

#### Category Badges
Category badges should stay soft and readable, not fully saturated.

| Category Tone | Background | Text |
|---|---|---|
| Tone 1 | `#E8F1FB` | `#0056AB` |
| Tone 2 | `#E9F6EA` | `#26652A` |
| Tone 3 | `#FFF7DC` | `#926700` |
| Tone 4 | `#EEF1F3` | `#56616C` |
| Tone 5 | `#FDEAEA` | `#B52222` |

#### Status Pills
- `Not Started`: muted gray
- `In Progress`: blue
- `On Hold`: amber
- `Completed`: green
- `Cancelled` / `Merged`: neutral gray

#### Priority Pills
- `Critical`: red tone
- `High`: orange/amber tone
- `Medium` / `Normal`: blue tone
- `Low`: muted gray

### Accessibility Guidance
- Maintain strong contrast between text and background.
- Use color together with text meaning. Do not rely on color alone.
- Keep badges and pills readable at small sizes.
- Prefer soft background fills with darker text over white text on light colors.

### Current Implementation Reference
The implemented color system is defined in:
- `assets/styles.css`

The list/detail/form screens using this scheme are:
- `index.html`
- `create.html`
- `confirm.html`
- `complete.html`
- `view.html`

### Team Agreement
When adding or changing screens:
- Reuse existing color tokens before introducing new colors.
- If a new semantic color is needed, document the reason first.
- Avoid ad hoc inline colors in HTML or JavaScript unless there is a clear system-level decision.

---

## 日本語

### 目的
本ドキュメントは、本プロジェクトで現在採用している UI の配色ルールを定義するものです。  
画面追加や改修時に、デザイン認識のズレを防ぐための共通基準として使用してください。

### デザイン方針
- ベースはニュートラルなグレースケールで構成する。
- アクセントカラーは青を使用する。
- 赤は削除やエラーなど、破壊的な意味に限定する。
- 緑やアンバーは状態表現にのみ使い、全体テーマには使わない。

### 基本カラートークン

| トークン | 値 | 用途 |
|---|---|---|
| `--color-primary` | `#0062C4` | 主ボタン、アクティブ状態、重要な強調 |
| `--color-primary-dark` | `#004C98` | 主ボタンのホバー |
| `--color-danger` | `#D62D2D` | 削除、エラー、破壊的操作 |
| `--color-danger-dark` | `#B52222` | danger 系のホバー |
| `--color-text` | `#22262A` | 本文テキスト |
| `--color-text-muted` | `#56616C` | 補助テキスト、ラベル、テーブル見出し |
| `--color-text-soft` | `#7B8995` | プレースホルダー、弱い補助文言 |
| `--color-border` | `#CBD2D6` | 標準ボーダー |
| `--color-border-strong` | `#B2BCC3` | 強めのボーダー |
| `--color-surface` | `#FFFFFF` | カード、入力欄の背景 |
| `--color-surface-muted` | `#F6F8F9` | 読み取り専用欄、弱い背景 |
| `--color-surface-alt` | `#EEF3F8` | アプリ全体の背景補助色 |
| `--color-surface-accent` | `#E8F1FB` | 青系の淡い背景 |
| `--color-success` | `#2F7D32` | 成功、Green RAG |
| `--color-warning` | `#D59B11` | 注意、Amber RAG |

### 使用ルール

#### 1. プライマリブルー
- `Search`、`New Task`、`Confirm`、`Save`、`Edit` などの主要操作に使う。
- 入力フォーカス、アクティブなページネーション、重要なホバー強調にも使う。
- 承認されたヘッダー領域以外では、大きな面積でベタ塗りしない。

#### 2. ニュートラルベース
- カード、テーブル、フォーム部品、読み取り専用欄は白と淡いグレーを中心に構成する。
- 画面全体は落ち着いた印象を維持する。
- 本文は十分なコントラストを保ち、ラベルや補助情報は muted を使う。

#### 3. Danger Red
- 赤は `Delete` やバリデーションエラーなど、破壊的・警告的な意味に限定する。
- ページ全体のテーマカラーとして使わない。

#### 4. セマンティックカラー
- 緑は完了や正常などのポジティブな意味にのみ使用する。
- アンバーは保留や注意などの意味にのみ使用する。
- セマンティックカラーをブランドカラーの代わりに使わない。

### ステータス・バッジ運用

#### カテゴリバッジ
カテゴリバッジは彩度を上げすぎず、柔らかい背景色と濃い文字色で表現する。

| カテゴリトーン | 背景 | 文字 |
|---|---|---|
| Tone 1 | `#E8F1FB` | `#0056AB` |
| Tone 2 | `#E9F6EA` | `#26652A` |
| Tone 3 | `#FFF7DC` | `#926700` |
| Tone 4 | `#EEF1F3` | `#56616C` |
| Tone 5 | `#FDEAEA` | `#B52222` |

#### ステータスピル
- `Not Started`: グレー
- `In Progress`: 青
- `On Hold`: アンバー
- `Completed`: 緑
- `Cancelled` / `Merged`: ニュートラルグレー

#### 優先度ピル
- `Critical`: 赤系
- `High`: オレンジ/アンバー系
- `Medium` / `Normal`: 青系
- `Low`: グレー系

### アクセシビリティ指針
- 文字と背景のコントラストを十分に確保する。
- 色だけで意味を伝えず、必ずテキストも併用する。
- 小さいバッジやピルでも可読性を保つ。
- 明るい背景には白文字より濃い文字を優先する。

### 実装上の参照先
現在の配色実装は以下に定義されています。
- `assets/styles.css`

対象画面:
- `index.html`
- `create.html`
- `confirm.html`
- `complete.html`
- `view.html`

### チーム内ルール
今後の画面追加・変更時は以下を守ってください。
- 新しい色を追加する前に、既存トークンの再利用を優先する。
- 新しいセマンティックカラーが必要な場合は、理由を先に明文化する。
- システム上の合意がない限り、HTML や JavaScript に場当たり的な色指定を入れない。
