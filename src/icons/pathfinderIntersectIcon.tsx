import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pathfinderIntersectIcon({ iconName = "pathfinder-intersect", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}