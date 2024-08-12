import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Taco02Icon({ iconName = "taco02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}