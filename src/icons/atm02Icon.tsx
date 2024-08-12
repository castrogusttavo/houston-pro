import React from 'react'
import { Icon, IconProps } from '../Icon'

export function atm02Icon({ iconName = "atm02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}