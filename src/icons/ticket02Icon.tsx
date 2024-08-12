import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ticket02Icon({ iconName = "ticket02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}