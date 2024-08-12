import React from 'react'
import { Icon, IconProps } from '../Icon'

export function chess02Icon({ iconName = "chess02", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}