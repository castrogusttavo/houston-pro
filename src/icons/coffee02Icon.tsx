import React from 'react'
import { Icon, IconProps } from '../Icon'

export function coffee02Icon({ iconName = "coffee02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}