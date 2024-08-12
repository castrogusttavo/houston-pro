import React from 'react'
import { Icon, IconProps } from '../Icon'

export function home02Icon({ iconName = "home02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}