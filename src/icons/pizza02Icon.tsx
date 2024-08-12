import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pizza02Icon({ iconName = "pizza02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}