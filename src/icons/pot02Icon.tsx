import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pot02Icon({ iconName = "pot02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}