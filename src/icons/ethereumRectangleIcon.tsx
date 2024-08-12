import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ethereumRectangleIcon({ iconName = "ethereum-rectangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}