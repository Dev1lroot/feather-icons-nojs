const fs = require('fs');
const path = require('path');

const directoryPath = './dist/icons/';
const cssFilePath = './feather-icons.css';
const mainClass = `
.fe{
    filter: invert(100%);
    width: 32px;
    height: 32px;
    background-position: center;
    background-size: contain;
    display: inline-block;
}\n`;

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg');

  const cssContent = mainClass + svgFiles.map(file => {
    const imageName = path.basename(file, path.extname(file));
    const imagePath = path.join(directoryPath, file).replace(/\\/g, '/');
    return `.fe-${imageName} {\n    background-image: url(${imagePath});\n}`;
  }).join('\n');

  fs.writeFile(cssFilePath, cssContent, err => {
    if (err) {
      console.error('Error writing CSS file:', err);
      return;
    }
    console.log(`New iconpack built successfully '${cssFilePath}' registered ${svgFiles.length} icons`);
  });
});