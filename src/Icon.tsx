import { IconName } from './iconsNames';

export interface IconProps {
  iconName: IconName;
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
  const validatedIconName = String(iconName);

  if (fillType === 'duotone') {
    cornerStyle = 'rounded';
  }

  if (cornerStyle === 'standard' && (fillType !== 'solid' && fillType !== 'stroke')) {
    fillType = 'solid';
  }

  const iconUrl = `https://cdn.hugeicons.com/icons/${validatedIconName}-${fillType}-${cornerStyle}.svg`;

  return (
    <img
      src={iconUrl}
      alt={`${validatedIconName} icon`}
      width={iconSize}
      height={iconSize}
      style={{ color }}
    />
  );
}
