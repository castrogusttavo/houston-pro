import React from 'react'
import { Icon, IconProps } from '../Icon'

export function radialIcon({ iconName = "radial", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}