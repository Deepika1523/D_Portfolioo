const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'combined.css');
const css = fs.readFileSync(cssPath, 'utf8');

// Function to extract CSS rule for selector regex
function findRules(pattern) {
    const regex = new RegExp(`([^}]*${pattern}[^{]*\\{[^}]+\\})`, 'gi');
    const matches = css.match(regex) || [];
    return matches.slice(0, 10);
}

console.log('--- NAVBAR CSS ---');
console.log(findRules('\\.nk-navbar').join('\n'));

console.log('--- TITLE / HEADING CSS ---');
console.log(findRules('\\.nk-title').join('\n'));

console.log('--- PORTFOLIO ITEM CSS ---');
console.log(findRules('\\.nk-portfolio-item').join('\n'));

console.log('--- BUTTON CSS ---');
console.log(findRules('\\.nk-btn').concat(findRules('\\.btn-extra-indent')).join('\n'));
