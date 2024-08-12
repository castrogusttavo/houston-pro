import React from 'react'
import { Icon, IconProps } from '../Icon'

export function leftTriangleIcon({ iconName = "left-triangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}