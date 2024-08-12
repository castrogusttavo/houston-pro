import React from 'react'
import { Icon, IconProps } from '../Icon'

export function setup02Icon({ iconName = "setup02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}