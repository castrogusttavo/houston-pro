import React from 'react'
import { Icon, IconProps } from '../Icon'

export function leftToRightListTriangleIcon({ iconName = "left-to-right-list-triangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}