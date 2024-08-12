import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Mail02Icon({ iconName = "mail02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}