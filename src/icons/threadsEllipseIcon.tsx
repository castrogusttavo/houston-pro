import React from 'react'
import { Icon, IconProps } from '../Icon'

export function threadsEllipseIcon({ iconName = "threads-ellipse", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}