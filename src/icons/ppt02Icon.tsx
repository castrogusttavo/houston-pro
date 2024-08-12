import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ppt02Icon({ iconName = "ppt02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}