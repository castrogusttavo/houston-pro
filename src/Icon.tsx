import React, { useState, useEffect } from 'react';

export interface IconProps {
  iconName: string;
  iconSize?: number;
  fillType?: 'stroke' | 'solid' | 'bulk' | 'duotone';
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
  const [IconComponent, setIconComponent] = useState<React.FC<IconProps> | null>(null);

  useEffect(() => {
    const iconNameString = String(iconName);

    import(`./icons/${iconNameString}Icon`)
      .then(module => {
        const component = module[`${iconNameString}Icon`] as React.FC<IconProps>;
        setIconComponent(() => component);
      })
      .catch(() => {
        console.warn(`Icon "${iconNameString}" not found.`);
        setIconComponent(null);
      });
  }, [iconName]);

  if (!IconComponent) {
    return null;
  }

  if (fillType === 'duotone') {
    cornerStyle = 'rounded';
  }

  if (cornerStyle === 'standard' && (fillType !== 'solid' && fillType !== 'stroke')) {
    fillType = 'solid';
  }

  return (
    <IconComponent
      iconName={iconName}
      iconSize={iconSize}
      fillType={fillType}
      cornerStyle={cornerStyle}
      color={color}
    />
  );
}
