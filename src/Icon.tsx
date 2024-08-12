export interface IconProps {
  iconName?: string
  iconSize?: number
  fillType?: 'stroke' | 'solid' | 'bulk' | 'duotone' | 'twotone'
  cornerStyle?: 'sharp' | 'rounded' | 'standard'
  color?: string
}

export function Icon({
  iconName,
  iconSize = 24,
  fillType = 'stroke',
  cornerStyle = 'standard',
  color = 'currentColor',
}: IconProps) {
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

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      data-src={iconUrl}
      color={color}
      role="img"
    />
  )
}
