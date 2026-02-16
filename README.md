This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Source code for 
[https://www.youtube.com/watch?v=u8vMu7viCm8&amp;t=27s](https://www.youtube.com/watch?v=u8vMu7viCm8&t=27s)

## Model Selection Guide

| Model Name                  | Speed/Cost Multiplier | Speed      | Cost     | Recommended for Critical Tasks? | Example Use Case               |
|-----------------------------|----------------------|------------|-----------|-------------------------------|----------------------------------|
| Claude Haiku 4.5            | 0.33x                | Fast       | Low       | ❌ (unless speed > quality)    | Quick drafts, summaries         |
| Claude Opus 4.5/4.6         | 3x                   | Slow       | High      | ✅ (high quality)              | Complex reasoning, coding       |
| Claude Sonnet 4/4.5         | 1x                   | Standard   | Standard  | ✅                             | General tasks, balanced quality |
| Gemini 3 Flash (Preview)    | 0.33x                | Fast       | Low       | ❌ (unless speed > quality)    | Fast Q&A, simple tasks          |
| Gemini 3 Pro (Preview)      | 1x                   | Standard   | Standard  | ✅                             | Planning, agent mode            |
| GPT-4.1, GPT-5.1, etc.      | 1x                   | Standard   | Standard  | ✅                             | General coding, planning        |
| GPT-5.1-Codex-Mini (Preview)| 0.33x                | Fast       | Low       | ❌ (unless speed > quality)    | Quick code suggestions          |
| GPT-5.2, GPT-5.3-Codex      | 1x                   | Standard   | Standard  | ✅                             | Critical code generation        |
| Grok Code Fast 1            | 0.25x                | Very Fast  | Very Low  | ❌ (unless speed > quality)    | Rapid prototyping, drafts       |

### Example Scenarios

- **Speed/Cheap Tasks:**  
  Use **Claude Haiku 4.5** or **Gemini 3 Flash** for quick answers, drafts, or when cost is a concern.
- **Critical/Complex Tasks:**  
  Use **Claude Opus 4.5/4.6**, **Gemini 3 Pro**, or **GPT-4.1/5.1/5.2** for planning, agent mode, or anything requiring high reliability and quality.
- **Balanced Tasks:**  
  Use **Claude Sonnet 4/4.5** or **GPT-4.1/5.1** for general use where you want a balance of speed, cost, and quality.

> **Tip:**  
> For critical tasks (ask, plan, agent mode), prefer models with **1x or higher** for best quality.  
> For routine or bulk tasks, use **0.33x or 0.25x** models to save time and money.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
