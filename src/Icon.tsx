'use client'

import React, { useEffect, useState } from 'react'

export interface IconProps {
  iconName?: string
  size?: number
  fillType?: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone'
  cornerStyle?: 'sharp' | 'rounded' | 'standard'
  color?: string
  strokeWidth?: number
}

export function Icon({
  iconName = 'default-icon',
  size = 24,
  fillType = 'stroke',
  cornerStyle = 'rounded',
  color = '#000000',
  strokeWidth = 1.5,
}: IconProps) {
  const [svgElement, setSvgElement] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    const validatedIconName = String(iconName)

    const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${fillType}-${cornerStyle}.svg`

    fetch(iconUrl)
      .then((response) => response.text())
      .then((svgText) => {
        const parser = new DOMParser()
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml')
        const svgNode = svgDoc.documentElement

        svgNode.setAttribute('width', size.toString())
        svgNode.setAttribute('height', size.toString())
        svgNode.setAttribute('color', color)

        svgNode.querySelectorAll('*').forEach((element) => {
          const hasFill = element.hasAttribute('fill')
          const hasStroke = element.hasAttribute('stroke')

          if (hasFill) {
            element.setAttribute('fill', 'currentColor')
          }
          if (hasStroke) {
            element.setAttribute('stroke', 'currentColor')
            element.setAttribute('stroke-width', strokeWidth.toString())
          }
        })

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
  }, [iconName, size, fillType, cornerStyle, color, strokeWidth])

  return svgElement
}
