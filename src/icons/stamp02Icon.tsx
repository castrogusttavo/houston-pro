import React from 'react'
import { Icon, IconProps } from '../Icon'

export function stamp02Icon({ iconName = "stamp02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}