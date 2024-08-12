import React from 'react'
import { Icon, IconProps } from '../Icon'

export function honourStarIcon({ iconName = "honour-star", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}