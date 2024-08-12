import React from 'react'
import { Icon, IconProps } from '../Icon'

export function wrench02Icon({ iconName = "wrench02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}