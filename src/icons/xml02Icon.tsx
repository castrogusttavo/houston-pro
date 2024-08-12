import React from 'react'
import { Icon, IconProps } from '../Icon'

export function xml02Icon({ iconName = "xml02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}