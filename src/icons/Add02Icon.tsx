import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Add02Icon({ iconName = "add02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}