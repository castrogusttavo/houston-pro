import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cloudSlowWindIcon({ iconName = "cloud-slow-wind", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}