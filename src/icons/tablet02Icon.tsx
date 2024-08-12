import React from 'react'
import { Icon, IconProps } from '../Icon'

export function tablet02Icon({ iconName = "tablet02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}