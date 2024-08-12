import React from 'react'
import { Icon, IconProps } from '../Icon'

export function energyEllipseIcon({ iconName = "energy-ellipse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}