import en from '../../i18n/en.json';

const dictionaries = { en };
const ATTRIBUTES = ['placeholder', 'aria-label', 'title', 'alt'];

function lookup(dictionary, key) {
  return key.split('.').reduce(
    (acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined),
    dictionary,
  );
}

export function t(key, lang = 'en') {
  return lookup(dictionaries[lang] || dictionaries.en, key);
}

/**
 * Applies translations to elements marked with data-i18n
 * and data-i18n-<attribute>. Missing keys leave the text as is.
 */
export function applyTranslations(root = document, lang = document.documentElement.lang || 'en') {
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = t(el.dataset.i18n, lang);
    if (typeof value === 'string') {el.replaceChildren(value);}
  });

  ATTRIBUTES.forEach((attr) => {
    root.querySelectorAll('[data-i18n-' + attr + ']').forEach((el) => {
      const value = t(el.getAttribute('data-i18n-' + attr), lang);
      if (typeof value === 'string') {el.setAttribute(attr, value);}
    });
  });
}
