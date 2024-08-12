import React from 'react'
import { Icon, IconProps } from '../Icon'

export function approximatelyEqualSquareIcon({ iconName = "approximately-equal-square", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}