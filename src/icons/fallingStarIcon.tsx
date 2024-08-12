import React from 'react'
import { Icon, IconProps } from '../Icon'

export function fallingStarIcon({ iconName = "falling-star", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}