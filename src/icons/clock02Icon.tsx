import React from 'react'
import { Icon, IconProps } from '../Icon'

export function clock02Icon({ iconName = "clock02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}