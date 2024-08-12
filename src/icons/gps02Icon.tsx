import React from 'react'
import { Icon, IconProps } from '../Icon'

export function gps02Icon({ iconName = "gps02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}