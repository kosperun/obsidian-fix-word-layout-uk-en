# Layout Switcher (UA-EN) — Obsidian plugin

Converts selected text between English (QWERTY) and Ukrainian keyboard
layouts — for when you typed a word without switching layout first.

Example: select `Erhf]yf`, run "Convert selection to Ukrainian layout", get `Україна`.

No build step required — it's plain JavaScript that Obsidian runs directly.

## Install

Install it directly from within Obsidian (Community Plugins). 

Alternatively, you can install it manually:
1. Find your vault's plugin folder: `<YourVault>/.obsidian/plugins/`
   (if `.obsidian` isn't visible, enable "show hidden files" in your file
   explorer — it's a hidden folder).
2. Inside `plugins`, create a new folder called `layout-switcher-uk-en`.
3. Copy `manifest.json` and `main.js` into that folder.
   You should end up with:
   ```
   <YourVault>/.obsidian/plugins/layout-switcher-uk-en/manifest.json
   <YourVault>/.obsidian/plugins/layout-switcher-uk-en/main.js
   ```
4. Restart Obsidian (or reload it: Ctrl/Cmd+R won't do it — just quit and reopen,
   or use the "Reload app without saving" command from the command palette).
5. Go to **Settings → Community plugins**. If "Restricted mode" is on, turn it
   off (this just means you're allowed to run locally-installed plugins).
6. Find **Layout Switcher (UA/EN)** in the installed plugins list and enable it.

## Set up hotkeys

Go to **Settings → Hotkeys**, search for "layout", and you'll see three commands:

- **Convert selection to Ukrainian layout**
- **Convert selection to English layout**
- **Fix layout (auto-detect direction)** — figures out which direction to
  convert based on whether the selected text looks more Cyrillic or more Latin

Assign whichever hotkey(s) you like. Most people will just want one hotkey
bound to "Fix layout (auto-detect direction)" — select the mistyped word,
press the hotkey, done. The other two are there if you ever want to force a
specific direction.

If you don't select anything and just place your cursor inside a word before
pressing the hotkey, the plugin will grab that whole word automatically.

## Notes on the mapping

The conversion is based on physical key position (the same layout mapping
tools like Punto Switcher use), covering all standard Ukrainian letters. The
rare letter "ґ" is mapped to the backtick/tilde key since it doesn't have a
dedicated slot on most physical keyboards.
