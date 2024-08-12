import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tap02Icon({ iconName = "tap02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}