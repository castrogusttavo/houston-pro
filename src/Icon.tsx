import React, { useEffect, useState } from 'react';

export interface IconProps {
  iconName?: string;
  iconSize?: number;
  fillType?: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone';
  cornerStyle?: 'sharp' | 'rounded' | 'standard';
  color?: string;
}

export function Icon({
  iconName,
  iconSize = 24,
  fillType = 'stroke',
  cornerStyle = 'standard',
  color = 'currentColor',
}: IconProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const validatedIconName = String(iconName);

    if (fillType === 'duotone') {
      cornerStyle = 'rounded';
    }

    if (
      cornerStyle === 'standard' &&
      fillType !== 'solid' &&
      fillType !== 'stroke'
    ) {
      fillType = 'solid';
    }

    const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${fillType}-${cornerStyle}.svg`;


    fetch(iconUrl)
      .then((response) => response.text())
      .then((data) => {

        const updatedSvgContent = data
          .replace(/fill="[^"]*"/g, `fill="${color}"`)
          .replace(/stroke="[^"]*"/g, `stroke="${color}"`);
        setSvgContent(updatedSvgContent);
      })
      .catch((error) => console.error('Error fetching the SVG:', error));
  }, [iconName, fillType, cornerStyle, color]);

  return (
    <div
      style={{
        width: iconSize,
        height: iconSize,
        display: 'inline-block',
      }}
      dangerouslySetInnerHTML={{ __html: svgContent || '' }}
    />
  );
}
