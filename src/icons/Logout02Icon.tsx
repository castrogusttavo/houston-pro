import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Logout02Icon({ iconName = "logout02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}