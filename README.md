# 🤫 yap-less

> **Zero-config, 1-click CLI tool to stop AI coding agents from talking too much, wasting tokens, and burying you in chatter.**

Tired of AI coding assistants starting responses with *"Sure! I'd be happy to help you with that!"* or ending with *"Let me know if you need anything else!"*?

**yap-less** injects a battle-tested `.cursorrules` directive straight into your project that forces AI agents (Cursor, Claude, Copilot, Windsurf, Gemini, etc.) into **Zero-Yap Mode**: pure code, accurate diffs, zero filler.

---

## ⚡ Quick Start

Run it once inside any project root:

```bash
npx yap-less
```

That's it! If `.cursorrules` already exists, `yap-less` cleanly appends the zero-yap directives. If not, it creates a fresh file ready to go.

---

## 🎯 What it Inforces

When `yap-less` is activated, your AI coding assistant is strictly instructed:

1. 🚫 **No Explanations**: No unsolicited thought process, meta-commentary, or monologues.
2. 🤐 **No Introductions or Outros**: Eliminates pleasantries like *"Here is your code"*.
3. ⚡ **Pure Diffs & Code**: Only runnable terminal commands and exact code diffs.
4. 💬 **Concise Comments**: Essential context provided via minimal inline comments only.
5. 📂 **File Paths Included**: Precise target file headers for every code block.

---

## 🛠️ Local Development & Testing

If you are developing or testing `yap-less` locally:

```bash
cd yap-less
npm link
```

Now you can run:

```bash
yap-less
```

from any directory in your terminal!

---

## 📄 License

MIT © [iamneyamat](https://github.com)
