const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON com os nomes dos ícones
const iconNames = require('./src/iconsName.json');

// Caminho para o diretório onde os arquivos .tsx serão gerados
const outputDir = path.join(__dirname, 'src/icons');

// Garante que o diretório de saída exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Função para gerar o conteúdo do componente para um ícone específico
const generateIconComponent = (iconName) => `
import React from 'react';
import { Icon, IconProps } from '../Icon';

export const ${iconName}Icon = (props: Omit<IconProps, 'iconName'>) => (
  <Icon {...props} iconName="${iconName}" />
);
`;

// Gera e escreve um arquivo para cada ícone
iconNames.forEach(iconName => {
  const fileContent = generateIconComponent(iconName);
  const filePath = path.join(outputDir, `${iconName}Icon.tsx`);
  fs.writeFileSync(filePath, fileContent.trim(), 'utf8');
  console.log(`Arquivo criado: ${filePath}`);
});

console.log('Todos os arquivos de ícones foram gerados com sucesso!');
