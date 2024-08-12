import React from 'react'
import { Icon, IconProps } from '../Icon'

export function add02Icon({ iconName = "add02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}