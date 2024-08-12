import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threadsRectangleIcon({ iconName = "threads-rectangle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}