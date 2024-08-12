import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Alien02Icon({ iconName = "alien02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}