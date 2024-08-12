import React from 'react'
import { Icon, IconProps } from '../Icon'

export function desk02Icon({ iconName = "desk02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}