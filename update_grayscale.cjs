const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Hover pairs
content = content.replace(/ grayscale hover:grayscale-0/g, '');
content = content.replace(/grayscale hover:grayscale-0 /g, '');

// 2. Group hover pairs
content = content.replace(/ grayscale group-hover:grayscale-0/g, '');
content = content.replace(/grayscale group-hover:grayscale-0 /g, '');

// 3. Ternary operator pair
content = content.replace(/grayscale-0 opacity-100' : 'grayscale opacity-70/g, "opacity-100' : 'opacity-70");

// 4. Isolated grayscale class (at the end of class string)
content = content.replace(/ grayscale"/g, '"');

// 5. Isolated grayscale class (in the middle of class string)
content = content.replace(/ grayscale /g, ' ');

// 6. Isolated grayscale class (at the start of class string, unlikely but just in case)
content = content.replace(/"grayscale /g, '"');

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('Removed grayscale classes from App.jsx');
