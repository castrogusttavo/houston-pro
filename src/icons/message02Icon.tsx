import React from 'react'
import { Icon, IconProps } from '../Icon'

export function message02Icon({ iconName = "message02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}