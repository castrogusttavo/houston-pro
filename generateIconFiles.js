const fs = require('fs')
const path = require('path')

// Caminho para o arquivo JSON com os nomes dos ícones
const iconNames = require('./src/iconsName.json')

// Caminho para o diretório onde os arquivos .tsx serão gerados
const outputDir = path.join(__dirname, 'src/icons')

// Garante que o diretório de saída exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Função para converter de kebab-case para camelCase
const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (match, p1) => p1.toUpperCase())
}

// Função para gerar o conteúdo do componente para um ícone específico
const generateIconComponent = (iconName, camelCaseName) => `
import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ${camelCaseName}Icon({ iconName = "${iconName}", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
`

// Gera e escreve um arquivo para cada ícone
iconNames.forEach((iconName) => {
  const camelCaseName = toCamelCase(iconName)
  const fileContent = generateIconComponent(iconName, camelCaseName)
  const filePath = path.join(outputDir, `${camelCaseName}Icon.tsx`)
  fs.writeFileSync(filePath, fileContent.trim(), 'utf8')
  console.log(`Arquivo criado: ${filePath}`)
})

console.log('Todos os arquivos de ícones foram gerados com sucesso!')
