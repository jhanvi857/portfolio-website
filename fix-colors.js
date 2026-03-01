import fs from 'fs';
import path from 'path';

const files = [
    'src/components/ActiveNodeContent.jsx',
    'src/CustomCursor.jsx'
];

files.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/rgba\(0, ?255, ?255,/g, 'rgba(217,199,163,');
    content = content.replace(/#00ffff/gi, '#D9C7A3'); // hex shadow glows
    fs.writeFileSync(fullPath, content, 'utf8');
});
console.log("Replaced native hex values.");
