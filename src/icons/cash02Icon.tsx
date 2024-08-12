import React from 'react'
import { Icon, IconProps } from '../Icon'

export function cash02Icon({ iconName = "cash02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}