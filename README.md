# Fix Word Layout (UA-EN) — Obsidian plugin

Lets you skip switching your system keyboard layout back and forth for just a word or two. For example, if your text is mostly in English and you need to drop in a Ukrainian name or term (or vice versa), keep typing in whichever layout is already active, select the word or short phrase that came out garbled, and run the fix command — no layout switch, no undoing it afterward.

Example: writing in English without switching layout, you type `Україна` and it comes out as `Erhf]yf`. Select `Erhf]yf`, run "Fix layout (auto-detect direction)", and get `Україна`.

**This only rewrites the selected text.** It does not touch your system keyboard layout or input language. The plugin just re-maps the characters you already typed to what they would have been in the other layout.

## Install

Install it directly from within Obsidian (Community Plugins).

Alternatively, you can install it manually:

1. Find your vault's plugin folder: `<YourVault>/.obsidian/plugins/` (if `.obsidian` isn't visible, enable "show hidden files" in your file explorer — it's a hidden folder).
2. Inside `plugins`, create a new folder called `layout-switcher-uk-en`.
3. Copy `manifest.json` and `main.js` into that folder.
   You should end up with:

   ```
   <YourVault>/.obsidian/plugins/layout-switcher-uk-en/manifest.json
   <YourVault>/.obsidian/plugins/layout-switcher-uk-en/main.js
   ```

4. Restart Obsidian.
5. Go to **Settings → Community plugins**. Find **Fix Word Layout (UA-EN)** in the installed plugins list and enable it.

## Set up hotkeys

Go to **Settings → Hotkeys**, search for "layout", and you'll see three commands:

- **Convert selection to Ukrainian layout**
- **Convert selection to English layout**
- **Fix layout (auto-detect direction)** — figures out which direction to convert based on whether the selected text looks more Cyrillic or more Latin

Assign whichever hotkey(s) you like. Most people will just want one hotkey bound to "Fix layout (auto-detect direction)" — select the garbled word, press the hotkey, done. The other two are there if you ever want to force a specific direction.

If you don't select anything and just place your cursor inside a word before pressing the hotkey, the plugin will grab that whole word automatically.

## Notes on the mapping

The conversion is based on physical key position, covering all standard Ukrainian letters. The rare letter "ґ" is mapped to the backtick/tilde key.

---

# Fix Word Layout (UA-EN) — плагін для Obsidian

Дозволяє не перемикати системну розкладку клавіатури туди-й-назад заради одного-двох слів, які потрібно надрукувати в іншій розкладці. Наприклад, якщо ви друкуєте текст українською і вам потрібно вставити англійське ім'я чи термін, просто продовжуйте друкувати в тій розкладці, яка вже активна, виділіть спотворене слово чи коротку фразу і виконайте команду "Fix layout (auto-detect direction)".

Приклад: друкуючи українською без перемикання розкладки, ви набираєте `GitHub`, і виходить `ПшеРги`. Виділіть `ПшеРги`, виконайте команду "Fix layout (auto-detect direction)", і отримаєте `GitHub`.

**Плагін лише перезаписує виділений текст.** Він не змінює розкладку клавіатури у вашій системі чи мову вводу. Плагін просто перетворює вже надруковані символи на ті, якими вони були б в іншій розкладці.

## Встановлення

Встановіть плагін прямо з Obsidian (Community Plugins).

Або встановіть вручну:

1. Знайдіть папку плагінів вашого сховища: `<YourVault>/.obsidian/plugins/`
2. Усередині `plugins` створіть нову папку з назвою `layout-switcher-uk-en`.
3. Скопіюйте `manifest.json` та `main.js` у цю папку. Має вийти так:

   ```
   <YourVault>/.obsidian/plugins/layout-switcher-uk-en/manifest.json
   <YourVault>/.obsidian/plugins/layout-switcher-uk-en/main.js
   ```

4. Перезапустіть Obsidian.
5. Перейдіть у **Settings → Community plugins** та знайдіть **Fix Word Layout (UA-EN)** у списку встановлених плагінів і увімкніть його.

## Налаштування гарячих клавіш

Перейдіть у **Settings → Hotkeys**, знайдіть "layout" — з'являться три команди:

- **Convert selection to Ukrainian layout**
- **Convert selection to English layout**
- **Fix layout (auto-detect direction)** — сам визначає напрямок конвертації залежно від того, якого тексту в виділенні більше — кириличного чи латинського

Призначте будь-які зручні гарячі клавіші. Здебільшого достатньо однієї клавіші для "Fix layout (auto-detect direction)" — виділили слово, що вийшло "кракозябрами", натиснули клавішу, готово. Дві інші команди потрібні, лише якщо хочете примусово задати напрямок конвертації.

Якщо нічого не виділено, а курсор просто стоїть усередині слова, плагін сам зконвертує все це слово.

## Про відповідність розкладок

Конвертація базується на фізичному розташуванні клавіш і охоплює всі стандартні українські літери. Рідкісна літера "ґ" прив'язана до клавіші з тильдою (`` ` ``/`~`).
