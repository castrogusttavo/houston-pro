import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rotateClockwiseIcon({ iconName = "rotate-clockwise", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}