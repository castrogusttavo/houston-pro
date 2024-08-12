import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Money02Icon({ iconName = "money02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}