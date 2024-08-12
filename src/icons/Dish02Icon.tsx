import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Dish02Icon({ iconName = "dish02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}