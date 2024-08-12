const fs = require('fs');
const path = require('path');

// Diretório dos ícones e arquivo de saída
const iconsDir = path.join(__dirname, 'src/icons');
const indexFile = path.join(__dirname, 'src/index.ts');

// Lê todos os arquivos no diretório de ícones
const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('Icon.tsx'));

// Gera o conteúdo do arquivo index.ts
const exportStatements = iconFiles.map(file => {
  const iconName = path.basename(file, '.tsx');
  return `export * from './icons/${file}';`;
}).join('\n');

// Cria o conteúdo do arquivo index.ts
const fileContent = `
${exportStatements}
`;

fs.writeFileSync(indexFile, fileContent.trim(), 'utf8');
console.log('Arquivo index.ts gerado com sucesso!');
