import React, { useEffect, useState } from 'react'

export interface IconProps {
  iconName?: string
  iconSize?: number
  fillType?: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone'
  cornerStyle?: 'sharp' | 'rounded' | 'standard'
  color?: string
}

export function Icon({
  iconName = 'default-icon',
  iconSize = 24,
  fillType = 'stroke',
  cornerStyle = 'standard',
  color = 'currentColor',
}: IconProps) {
  const [svgElement, setSvgElement] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    const validatedIconName = String(iconName)

    if (fillType === 'duotone') {
      cornerStyle = 'rounded'
    }

    if (
      cornerStyle === 'standard' &&
      fillType !== 'solid' &&
      fillType !== 'stroke'
    ) {
      fillType = 'solid'
    }

    const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${fillType}-${cornerStyle}.svg`

    fetch(iconUrl)
      .then((response) => response.text())
      .then((svgText) => {
        const parser = new DOMParser()
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml')
        const svgNode = svgDoc.documentElement

        // Adicionando propriedades dinamicamente
        svgNode.setAttribute('width', iconSize.toString())
        svgNode.setAttribute('height', iconSize.toString())
        svgNode.setAttribute('fill', color)

        // Converter o SVG em um elemento React
        setSvgElement(
          React.createElement('svg', {
            dangerouslySetInnerHTML: { __html: svgNode.innerHTML },
            ...Array.from(svgNode.attributes).reduce(
              (acc, attr) => {
                acc[attr.name] = attr.value
                return acc
              },
              {} as { [key: string]: string },
            ),
          }),
        )
      })
      .catch((error) => {
        console.error(`Error loading SVG icon: ${error}`)
        setSvgElement(null)
      })
  }, [iconName, iconSize, fillType, cornerStyle, color])

  return svgElement
}
