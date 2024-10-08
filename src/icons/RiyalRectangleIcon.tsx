import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RiyalRectangleIcon({
  iconName = 'riyal-rectangle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
