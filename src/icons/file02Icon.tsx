import React from 'react'
import { Icon, IconProps } from '../Icon'

export function file02Icon({ iconName = "file02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}