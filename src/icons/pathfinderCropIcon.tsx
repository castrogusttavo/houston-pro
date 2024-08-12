import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pathfinderCropIcon({ iconName = "pathfinder-crop", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}