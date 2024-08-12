import React from 'react'
import { Icon, IconProps } from '../Icon'

export function touch02Icon({ iconName = "touch02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}