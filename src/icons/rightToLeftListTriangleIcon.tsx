import React from 'react'
import { Icon, IconProps } from '../Icon'

export function rightToLeftListTriangleIcon({ iconName = "right-to-left-list-triangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}