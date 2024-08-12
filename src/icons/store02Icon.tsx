import React from 'react'
import { Icon, IconProps } from '../Icon'

export function store02Icon({ iconName = "store02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}