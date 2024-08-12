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

// Converte um nome de ícone de kebab-case para camelCase
const toCamelCase = (str) =>
  str.replace(/-./g, (match) => match.charAt(1).toUpperCase())

// Função para gerar o conteúdo do componente para um ícone específico
const generateIconComponent = (iconName) => {
  const camelCaseName = toCamelCase(iconName)

  return `
import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ${camelCaseName}Icon({ iconName = "${iconName}", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
`.trim()
}

// Gera e escreve um arquivo para cada ícone
iconNames.forEach((iconName) => {
  const fileContent = generateIconComponent(iconName)
  const filePath = path.join(outputDir, `${toCamelCase(iconName)}Icon.tsx`)
  fs.writeFileSync(filePath, fileContent, 'utf8')
  console.log(`Arquivo criado: ${filePath}`)
})

console.log('Todos os arquivos de ícones foram gerados com sucesso!')
