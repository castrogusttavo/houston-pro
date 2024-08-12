import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Sun02Icon({ iconName = "sun02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}