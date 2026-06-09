const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

// Replace logotext(Rajnandini).png with logo.png
content = content.replace(/src="\/assets\/logotext\(Rajnandini\)\.png"/g, 'src="/assets/logo.png"');

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('Updated logo back to logo.png');
