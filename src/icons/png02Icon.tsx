import React from 'react'
import { Icon, IconProps } from '../Icon'

export function png02Icon({ iconName = "png02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}