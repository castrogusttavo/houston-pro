import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pathfinderDivideIcon({ iconName = "pathfinder-divide", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}