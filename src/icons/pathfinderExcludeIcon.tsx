import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pathfinderExcludeIcon({ iconName = "pathfinder-exclude", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}