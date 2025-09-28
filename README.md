


## Configuration
```sh
goalpulse/
├─ src/
│ ├─ app/
│ │ ├─ api/
│ │ │ └─ cron/
│ │ │ ├─ notify/route.ts # キックオフ5分前通知（runtime=nodejs）
│ │ │ └─ live/route.ts # ゴール速報ポーリング（runtime=nodejs）
│ │ ├─ layout.tsx # 任意
│ │ └─ page.tsx # 任意（ダッシュボードなど）
│ ├─ lib/
│ │ ├─ apifootball.ts # API-FOOTBALLラッパ
│ │ ├─ line-notify.ts # LINE通知
│ │ ├─ time.ts # JST/UTCユーティリティ
│ │ └─ logger.ts # ログ
│ └─ components/ # 任意（UI）
├─ prisma/
│ ├─ schema.prisma
│ └─ migrations/
├─ scripts/
│ ├─ seed-match.ts # 動作確認用の手動投入
│ └─ backfill-fixtures.ts # 過去/今週分の一括投入
├─ docs/
│ └─ diagrams/
│ ├─ architecture.mmd # アーキテクチャ図（Mermaid）
│ ├─ sequence-live.mmd # シーケンス図
│ └─ er.mmd # ER図
├─ public/
├─ .github/workflows/
│ └─ render-diagrams.yml # Mermaid → SVG/PNG 自動生成
├─ vercel.json # Cron設定
├─ next.config.ts # 任意
├─ tsconfig.json # パスエイリアス設定（@ → src）
├─ .env.example # 環境変数テンプレ
├─ package.json
└─ README.md
```