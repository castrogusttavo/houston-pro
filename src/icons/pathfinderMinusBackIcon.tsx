import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pathfinderMinusBackIcon({ iconName = "pathfinder-minus-back", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}