import React from 'react'
import { Icon, IconProps } from '../Icon'

export function moon02Icon({ iconName = "moon02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}