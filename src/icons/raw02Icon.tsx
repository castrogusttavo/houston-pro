import React from 'react'
import { Icon, IconProps } from '../Icon'

export function raw02Icon({ iconName = "raw02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}