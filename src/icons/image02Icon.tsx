import React from 'react'
import { Icon, IconProps } from '../Icon'

export function image02Icon({ iconName = "image02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}