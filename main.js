const { Plugin } = require('obsidian');

/*
 * Physical-key mapping between a US QWERTY layout and the standard
 * Ukrainian (ЙЦУКЕН) layout. Each character below sits on the same
 * physical key as the character at the same index in the other string.
 */
const EN_LOWER = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const UA_LOWER = "йцукенгшщзхїфівапролджєячсмитьбю.";
const EN_UPPER = "QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?";
const UA_UPPER = "ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ,";
// Extra key for the rare letter "ґ" (usually the backtick/tilde key)
const EN_EXTRA = "`~";
const UA_EXTRA = "'Ґ";

function buildMaps() {
	const enToUa = {};
	const uaToEn = {};
	const pairAll = (enStr, uaStr) => {
		for (let i = 0; i < enStr.length; i++) {
			enToUa[enStr[i]] = uaStr[i];
			uaToEn[uaStr[i]] = enStr[i];
		}
	};
	pairAll(EN_LOWER, UA_LOWER);
	pairAll(EN_UPPER, UA_UPPER);
	pairAll(EN_EXTRA, UA_EXTRA);
	return { enToUa, uaToEn };
}

const { enToUa, uaToEn } = buildMaps();

function convert(text, map) {
	let out = "";
	for (const ch of text) {
		out += map[ch] !== undefined ? map[ch] : ch;
	}
	return out;
}

function isMostlyCyrillic(text) {
	const cyr = (text.match(/[а-яіїєґ]/gi) || []).length;
	const lat = (text.match(/[a-z]/gi) || []).length;
	return cyr > lat;
}

module.exports = class LayoutSwitcherPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'convert-to-ukrainian',
			name: 'Convert selection to Ukrainian layout',
			editorCallback: (editor) => this.runConversion(editor, 'toUa'),
		});

		this.addCommand({
			id: 'convert-to-english',
			name: 'Convert selection to English layout',
			editorCallback: (editor) => this.runConversion(editor, 'toEn'),
		});

		this.addCommand({
			id: 'fix-layout-auto',
			name: 'Fix layout (auto-detect direction)',
			editorCallback: (editor) => this.runConversion(editor, 'auto'),
		});
	}

	runConversion(editor, mode) {
		let selection = editor.getSelection();
		let range = null;

		// If nothing is selected, grab the word under the cursor instead.
		if (!selection) {
			const cursor = editor.getCursor();
			const wordRange = editor.wordAt(cursor);
			if (!wordRange) return;
			range = wordRange;
			selection = editor.getRange(wordRange.from, wordRange.to);
		}

		if (!selection) return;

		let direction = mode;
		if (mode === 'auto') {
			direction = isMostlyCyrillic(selection) ? 'toEn' : 'toUa';
		}

		const map = direction === 'toUa' ? enToUa : uaToEn;
		const converted = convert(selection, map);

		if (range) {
			editor.replaceRange(converted, range.from, range.to);
			editor.setSelection(range.from, {
				line: range.to.line,
				ch: range.from.ch + converted.length,
			});
		} else {
			editor.replaceSelection(converted);
		}
	}
};
