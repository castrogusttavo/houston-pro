import React from 'react'
import { Icon, IconProps } from '../Icon'

export function radiusIcon({ iconName = "radius", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}