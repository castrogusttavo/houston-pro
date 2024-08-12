import React from 'react'
import { Icon, IconProps } from '../Icon'

export function router02Icon({ iconName = "router02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}