const fs = require('fs');

let content = fs.readFileSync('src/App.jsx', 'utf8');

const importReplacement = `import { Agentation } from "agentation";\nimport React, { useState, useEffect, useRef } from 'react';`;
content = content.replace("import React, { useState, useEffect, useRef } from 'react';", importReplacement);

const renderReplacement = `            <Footer setPage={setCurrentPage} />\n            {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}\n        </div>`;
content = content.replace("            <Footer setPage={setCurrentPage} />\n        </div>", renderReplacement);

const renderReplacementWindows = `            <Footer setPage={setCurrentPage} />\r\n            {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}\r\n        </div>`;
content = content.replace("            <Footer setPage={setCurrentPage} />\r\n        </div>", renderReplacementWindows);

fs.writeFileSync('src/App.jsx', content, 'utf8');
console.log('App.jsx updated with Agentation!');
