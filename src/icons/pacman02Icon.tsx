import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pacman02Icon({ iconName = "pacman02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}