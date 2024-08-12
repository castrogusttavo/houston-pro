import React from 'react'
import { Icon, IconProps } from '../Icon'

export function target02Icon({ iconName = "target02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}