import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moonSlowWindIcon({ iconName = "moon-slow-wind", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}