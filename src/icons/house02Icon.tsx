import React from 'react'
import { Icon, IconProps } from '../Icon'

export function house02Icon({ iconName = "house02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}