import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ethereumEllipseIcon({ iconName = "ethereum-ellipse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}