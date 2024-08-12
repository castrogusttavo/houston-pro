import React from 'react'
import { Icon, IconProps } from '../Icon'

export function minusPlus02Icon({ iconName = "minus-plus02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}