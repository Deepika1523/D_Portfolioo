const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'combined.css');
const jsPath = path.join(__dirname, '..', 'assets', 'js', 'combined.js');

const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

console.log('--- JS STRINGS & HTML FRAGMENTS ---');

// Search for any html tags or strings in JS
const strings = js.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g) || [];
console.log('Total strings found in JS:', strings.length);

// Filter strings that contain html tags or class names
const htmlStrings = strings.filter(s => s.includes('<') || s.includes('nk-') || s.includes('portfolio') || s.includes('about'));
console.log('HTML/NK strings sample:', htmlStrings.slice(0, 40));

// Search for all nk- classes in CSS and print all unique selectors
const allSelectors = css.match(/\.nk-[a-z0-9-]+[^{,]*/gi) || [];
const uniqueSelectors = Array.from(new Set(allSelectors.map(s => s.trim())));
console.log('Total NK Selectors:', uniqueSelectors.length);
console.log('Key NK Selectors:', uniqueSelectors.filter(s => 
  ['title', 'header', 'nav', 'portfolio', 'footer', 'gap', 'box', 'card', 'icon', 'progress', 'service', 'team', 'contact', 'post', 'blog', 'hero', 'grid', 'filter'].some(k => s.includes(k))
).slice(0, 100));
