import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cactusIcon({ iconName = "cactus", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}