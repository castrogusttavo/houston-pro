interface IconProps {
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
  color = 'currentColor'
}: IconProps) {
  if (fillType === 'duotone') {
    cornerStyle = 'rounded';
  }

  if (cornerStyle === 'standard' && (fillType !== 'solid' && fillType !== 'stroke')) {
    fillType = 'solid';
  }

  const iconUrl = `https://cdn.hugeicons.com/icons/${iconName}-${fillType}-${cornerStyle}.svg`;

  return (
    <img
      src={iconUrl}
      alt={`${iconName} icon`}
      width={iconSize}
      height={iconSize}
      style={{ color }}
    />
  );
}
